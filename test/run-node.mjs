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
      subscribeMessage: async (cb) => {
        lastHistoryCb = cb;
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
ok("marker dot for person.tester", !!root?.querySelector(".mmc-dot"));
ok("picture icon for person.mobile", !!root?.querySelector("img.mmc-picture-icon"));
ok("permanent label Tester", [...(root?.querySelectorAll(".leaflet-tooltip") ?? [])].some((t) => t.textContent === "Tester"));
ok("zone circle drawn", (root?.querySelectorAll(".leaflet-overlay-pane path") ?? []).length >= 1);
ok("history subscribed once", typeof lastHistoryCb === "function");
ok(
  "attribution contains Mapy.com",
  root?.querySelector(".leaflet-control-attribution")?.textContent.includes("Mapy.com")
);

// --- history trail arrives via websocket callback
lastHistoryCb?.({
  locations: [
    { entity_id: "person.tester", map_state: [50.06, 14.41] },
    { entity_id: "person.tester", map_state: [50.065, 14.42] },
    { entity_id: "person.tester", map_state: [50.07, 14.43] },
    { entity_id: "person.tester", map_state: [50.0755, 14.4378] },
    { entity_id: "person.mobile", map_state: null },
  ],
});
await tick(100);
const overlayPaths = root.querySelectorAll(".leaflet-overlay-pane path").length;
ok("polyline + zone overlays present", overlayPaths >= 2);
ok("no runtime errors so far", errors.length === 0);

// --- more-info event on marker click
let moreInfoId = null;
el.addEventListener("hass-more-info", (ev) => (moreInfoId = ev.detail.entityId));
root.querySelector(".mmc-dot")?.dispatchEvent(new w.MouseEvent("click", { bubbles: true }));
await tick(100);
ok("click opens more-info", moreInfoId === "person.tester");

// --- dark mode
el.setConfig({ type: "custom:mapy-map-card", api_key: "K", theme_mode: "dark", hours_to_show: 0 });
await tick(100);
ok("dark filter class applied", root.querySelector(".mmc-map").classList.contains("mmc-dark"));

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

console.log(results.join("\n"));
console.log(errors.length ? "\nJS ERRORS:\n" + errors.join("\n") : "\nno js errors");
console.log(allOk && errors.length === 0 ? "\n== ALL CHECKS PASSED ==" : "\n== SOME CHECKS FAILED ==");
process.exit(allOk && errors.length === 0 ? 0 : 1);
