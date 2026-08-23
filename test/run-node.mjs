import { JSDOM } from "jsdom";
import { readFileSync } from "node:fs";

const bundle = readFileSync(new URL("../dist/mapy-map-card.js", import.meta.url), "utf8");

const dom = new JSDOM("<!doctype html><html><body><div id=card></div></body></html>", {
  url: "http://localhost/",
  pretendToBeVisual: true,
  runScripts: "dangerously",
});
const w = dom.window;

w.ResizeObserver ??= class {
  observe() {}
  unobserve() {}
  disconnect() {}
};
w.fetch ??= async () => { throw new Error("no network in test"); };

const errors = [];
w.addEventListener("error", (e) => errors.push(String(e.error ?? e.message)));
w.addEventListener("unhandledrejection", (e) => errors.push("rejection: " + String(e.reason)));

const bundleScript = w.document.createElement("script");
bundleScript.textContent = bundle;
w.document.body.appendChild(bundleScript);

const svgDot =
  "data:image/svg+xml;base64," +
  Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><circle cx="20" cy="20" r="18" fill="#1e88e5"/></svg>').toString("base64");

let lastHistoryCb = null;
let lastHistoryMessage = null;
function makeHass() {
  return {
    themes: { darkMode: false },
    states: {
      "person.tester": {
        entity_id: "person.tester",
        state: "home",
        attributes: { friendly_name: "Tester", latitude: 50.0755, longitude: 14.4378, gps_accuracy: 10 },
      },
      "person.mobile": {
        entity_id: "person.mobile",
        state: "work",
        attributes: { friendly_name: "Mobil", latitude: 50.087, longitude: 14.4208, entity_picture: svgDot },
      },
      "zone.home": {
        entity_id: "zone.home",
        state: "zoning",
        attributes: { friendly_name: "Home", latitude: 50.087, longitude: 14.4208, radius: 150 },
      },
      "light.kitchen": { entity_id: "light.kitchen", state: "on", attributes: { friendly_name: "Kitchen" } },
    },
    connection: {
      subscribeMessage: async (cb, message) => {
        lastHistoryCb = cb;
        lastHistoryMessage = message;
        return async () => {};
      },
    },
    callService: async () => {},
  };
}

const tick = (ms) => new Promise((r) => setTimeout(r, ms));

const doc = w.document;
const results = [];
let allOk = true;
const ok = (name, cond) => {
  results.push(`${cond ? "PASS" : "FAIL"}  ${name}`);
  allOk &&= !!cond;
};

// --- card is registered
ok("custom element defined", !!w.customElements.get("mapy-map-card"));
ok("editor element defined", !!w.customElements.get("mapy-map-card-editor"));

// --- instantiate
const el = doc.createElement("mapy-map-card");
el.setConfig({
  type: "custom:mapy-map-card",
  api_key: "SMOKE-KEY",
  entities: ["person.tester", "person.mobile"],
  hours_to_show: 24,
  show_zones: true,
});
el.hass = makeHass();
doc.getElementById("card").appendChild(el);
await tick(400);

const root = el.shadowRoot;
ok("shadow rendered", !!root);
ok("leaflet container", !!root?.querySelector(".mmc-map.leaflet-container"));
ok("tile layer src uses mapy.com api v1", !!root?.querySelector('img.leaflet-tile[src*="api.mapy.com/v1/maptiles/basic"]'));
const switcherControls = [...(root?.querySelectorAll(".leaflet-control-layers") ?? [])];
ok("tile style switcher control rendered", switcherControls.length === 2);
ok("both switchers start collapsed", !root?.querySelector(".mmc-switch-expanded"));
ok(
  "tile style switcher lists all styles",
  switcherControls[0]?.querySelectorAll(".mmc-switch-list label").length === 4
);
ok(
  "history range switcher lists all options",
  switcherControls[1]?.querySelectorAll(".mmc-switch-list label").length === 6
);

// --- switcher can be opened and closed again by clicking its own toggle
const tileToggle = switcherControls[0]?.querySelector(".leaflet-control-layers-toggle");
tileToggle?.dispatchEvent(new w.MouseEvent("click", { bubbles: true }));
await tick(50);
ok("clicking the toggle expands the switcher", switcherControls[0]?.classList.contains("mmc-switch-expanded"));
tileToggle?.dispatchEvent(new w.MouseEvent("click", { bubbles: true }));
await tick(50);
ok("clicking the toggle again collapses it", !switcherControls[0]?.classList.contains("mmc-switch-expanded"));

// --- clicking elsewhere on the map also closes an open switcher
tileToggle?.dispatchEvent(new w.MouseEvent("click", { bubbles: true }));
await tick(50);
root.querySelector(".mmc-map")?.dispatchEvent(new w.MouseEvent("click", { bubbles: true }));
await tick(50);
ok("clicking the map closes an open switcher", !switcherControls[0]?.classList.contains("mmc-switch-expanded"));
ok(
  "history range switcher defaults to configured hours_to_show",
  switcherControls[1]?.querySelector('input[type="radio"]:checked')?.parentElement?.textContent?.trim() === "24 h"
);
ok("marker dot for person.tester", !!root?.querySelector(".mmc-dot"));
ok("picture icon for person.mobile", !!root?.querySelector("img.mmc-picture-icon"));
ok("permanent label Tester", [...(root?.querySelectorAll(".leaflet-tooltip") ?? [])].some((t) => t.textContent === "Tester"));
ok("zone circle drawn", (root?.querySelectorAll(".leaflet-overlay-pane path") ?? []).length >= 1);
ok("history subscribed once", typeof lastHistoryCb === "function");
ok(
  "attribution contains Mapy.com",
  root?.querySelector(".leaflet-control-attribution")?.textContent.includes("Mapy.com")
);

// --- history trail arrives via websocket callback (`history/stream` shape)
const tsBase = Math.floor(Date.now() / 1000) - 3600; // epoch seconds like HA `lu`
lastHistoryCb?.({
  states: {
    "person.tester": [
      { s: "not_home", a: { latitude: 50.06, longitude: 14.41 }, lu: tsBase },
      { s: "not_home", a: { latitude: 50.065, longitude: 14.42 }, lu: tsBase + 60 },
      { s: "not_home", a: { latitude: 50.07, longitude: 14.43 }, lu: tsBase + 120 },
      { s: "home", a: { latitude: 50.0755, longitude: 14.4378 }, lu: tsBase + 180 },
    ],
    "person.mobile": [{ s: "work", a: {}, lu: tsBase }],
  },
});
await tick(100);
const overlayPaths = root.querySelectorAll(".leaflet-overlay-pane path").length;
ok("polyline + zone overlays present", overlayPaths >= 2);

// --- trail points rendered as hoverable dots with time tooltips
let interactivePaths = root.querySelectorAll(".leaflet-overlay-pane path.leaflet-interactive");
// zone circle (1) + 4 trail dots
ok("trail dots drawn", interactivePaths.length === 5);
interactivePaths[interactivePaths.length - 1]?.dispatchEvent(
  new w.MouseEvent("mouseover", { bubbles: true })
);
await tick(100);
const tipTexts = [...root.querySelectorAll(".leaflet-tooltip")].map((t) => t.textContent ?? "");
ok("trail point tooltip shows time", tipTexts.some((t) => /\d{4}/.test(t) && t.includes(":")));
ok("no runtime errors so far", errors.length === 0);

// --- history range switcher: picking "1 h" live re-subscribes with a ~1h window
const oneHourRadio = [...switcherControls[1].querySelectorAll('input[type="radio"]')].find(
  (r) => r.parentElement?.textContent?.trim() === "1 h"
);
oneHourRadio?.click();
await tick(100);
const windowMs = lastHistoryMessage
  ? Date.parse(lastHistoryMessage.end_time) - Date.parse(lastHistoryMessage.start_time)
  : 0;
ok("selecting 1 h re-subscribes with a ~1h window", windowMs > 0.9 * 3600 * 1000 && windowMs < 1.1 * 3600 * 1000);
ok(
  "history range switcher shows 1 h as selected after click",
  switcherControls[1].querySelector('input[type="radio"]:checked')?.parentElement?.textContent?.trim() === "1 h"
);

// --- picking "Off" clears the trail live
const offRadio = [...switcherControls[1].querySelectorAll('input[type="radio"]')].find(
  (r) => r.parentElement?.textContent?.trim() === "Off"
);
offRadio?.click();
await tick(100);
ok(
  "selecting Off clears the trail",
  root.querySelectorAll(".leaflet-overlay-pane path.leaflet-interactive").length === 1 // zone circle only
);

// --- more-info event on marker click
let moreInfoId = null;
el.addEventListener("hass-more-info", (ev) => (moreInfoId = ev.detail.entityId));
root.querySelector(".mmc-dot")?.dispatchEvent(new w.MouseEvent("click", { bubbles: true }));
await tick(100);
ok("click opens more-info", moreInfoId === "person.tester");

// --- live picks (tile style, history range) persist across re-attach via localStorage
const tileSwitcher = root.querySelectorAll(".leaflet-control-layers")[0];
const outdoorRadio = [...tileSwitcher.querySelectorAll('input[type="radio"]')].find(
  (r) => r.parentElement?.textContent?.trim() === "Outdoor"
);
outdoorRadio?.click();
await tick(50);
const cardHost = doc.getElementById("card");
cardHost.removeChild(el); // simulates HA re-attach (e.g. edit-mode toggle)
await tick(50);
cardHost.appendChild(el);
await tick(400);
const reRoot = el.shadowRoot;
const reTileSwitcher = reRoot.querySelectorAll(".leaflet-control-layers")[0];
ok(
  "tile style pick survives disconnect/reconnect via localStorage",
  reTileSwitcher?.querySelector('input[type="radio"]:checked')?.parentElement?.textContent?.trim() === "Outdoor"
);
ok(
  "persisted tile style is actually applied to the map",
  !!reRoot.querySelector('img.leaflet-tile[src*="api.mapy.com/v1/maptiles/outdoor"]')
);

// --- dark mode
el.setConfig({ type: "custom:mapy-map-card", api_key: "K", theme_mode: "dark", hours_to_show: 0 });
await tick(100);
ok("dark filter class applied", root.querySelector(".mmc-map").classList.contains("mmc-dark"));

// --- custom trail styling (entity color + line/point colors + square points)
el.setConfig({
  type: "custom:mapy-map-card",
  api_key: "K",
  entities: ["person.tester", "person.mobile"],
  hours_to_show: 24,
  entity_colors: { "person.tester": "#123abc" },
  history_line_color: "#ff00ff",
  history_point_color: "#00ff00",
  history_point_type: "square",
});
await tick(100);
lastHistoryCb?.({
  states: {
    "person.tester": [
      { s: "not_home", a: { latitude: 50.06, longitude: 14.41 }, lu: tsBase },
      { s: "not_home", a: { latitude: 50.065, longitude: 14.42 }, lu: tsBase + 60 },
      { s: "home", a: { latitude: 50.0755, longitude: 14.4378 }, lu: tsBase + 120 },
    ],
  },
});
await tick(100);
const strokes = [...root.querySelectorAll(".leaflet-overlay-pane path")].map((p) =>
  p.getAttribute("stroke")
);
ok("line color override applied", strokes.includes("#ff00ff"));
const squares = root.querySelectorAll(".mmc-trail-square");
ok("square point style rendered", squares.length === 3);
ok(
  "square uses point color",
  !!squares[0] && squares[0].getAttribute("style").includes("background:#00ff00")
);
ok(
  "marker dot uses entity color",
  root.querySelector(".mmc-dot")?.getAttribute("style")?.includes("background:#123abc") ?? false
);

// --- point type "none" hides dots, keeps polyline
el.setConfig({
  type: "custom:mapy-map-card",
  api_key: "K",
  entities: ["person.tester"],
  hours_to_show: 24,
  history_point_type: "none",
});
await tick(100);
lastHistoryCb?.({
  states: {
    "person.tester": [
      { s: "not_home", a: { latitude: 50.06, longitude: 14.41 }, lu: tsBase },
      { s: "home", a: { latitude: 50.0755, longitude: 14.4378 }, lu: tsBase + 60 },
    ],
  },
});
await tick(100);
interactivePaths = root.querySelectorAll(".leaflet-overlay-pane path.leaflet-interactive");
// only the zone circle remains interactive
ok("point type none hides dots", interactivePaths.length === 1);

// --- missing key error path
el.setConfig({ type: "custom:mapy-map-card", entities: [] });
await tick(100);
ok("missing key shows error", !!root.querySelector(".mmc-error"));

// --- editor smoke test
const editor = doc.createElement("mapy-map-card-editor");
editor.hass = makeHass();
editor.setConfig({ type: "custom:mapy-map-card", api_key: "X", entities: ["person.tester"], hours_to_show: 24 });
doc.body.appendChild(editor);
await tick(600);
let cfgFromEditor = null;
editor.addEventListener("config-changed", (ev) => (cfgFromEditor = ev.detail.config));
const titleInput = editor.shadowRoot.querySelector('input[type="text"]');
if (titleInput) {
  titleInput.value = "Moje mapa";
  titleInput.dispatchEvent(new w.Event("input", { bubbles: true }));
  await tick(50);
}
ok("editor emits config-changed with title", cfgFromEditor?.title === "Moje mapa");
ok("editor textarea fallback renders", !!editor.shadowRoot.querySelector("textarea"));
ok("editor shows entity colors section", !!editor.shadowRoot.querySelector('input[type="color"]'));

console.log(results.join("\n"));
console.log(errors.length ? "\nJS ERRORS:\n" + errors.join("\n") : "\nno js errors");
console.log(allOk && errors.length === 0 ? "\n== ALL CHECKS PASSED ==" : "\n== SOME CHECKS FAILED ==");
process.exit(allOk && errors.length === 0 ? 0 : 1);
