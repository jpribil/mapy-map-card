import { JSDOM } from "jsdom";
import { readFileSync } from "node:fs";

const bundle = readFileSync("dist/mapy-map-card.js", "utf8");
const dom = new JSDOM("<!doctype html><html><body><div id=card></div></body></html>", {
  url: "http://localhost/", pretendToBeVisual: true, runScripts: "dangerously",
});
const w = dom.window;
w.ResizeObserver ??= class { observe(){} unobserve(){} disconnect(){} };
const s = w.document.createElement("script"); s.textContent = bundle; w.document.body.appendChild(s);

const el = w.document.createElement("mapy-map-card");
el.setConfig({ type: "custom:mapy-map-card", api_key: "K", entities: ["person.t"], hours_to_show: 24 });
el.hass = { themes:{darkMode:false}, states: { "person.t": {entity_id:"person.t", state:"x", attributes:{friendly_name:"T", latitude:50, longitude:14}} }, connection: { subscribeMessage: async () => async () => {} } };
w.document.getElementById("card").appendChild(el);
await new Promise(r => setTimeout(r, 300));

const map = el._map;
console.log("map.hasLayer(markerLayer):", map.hasLayer(el._markerLayer));
console.log("map.hasLayer(tileLayer):", map.hasLayer(el._tileLayer));
const L = map.constructor; // leaflet namespace trick won't work; use global from window
const LL = w.L;
console.log("window.L exists:", !!LL);
const m2 = LL.marker([51, 15]).addTo(map);
console.log("direct marker pane children:", el.shadowRoot.querySelectorAll(".leaflet-marker-pane *").length);
console.log("m2 icon element:", !!m2._icon);
