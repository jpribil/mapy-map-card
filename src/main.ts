import "./mapy-map-card";
import "./editor";

const CARD_TYPE = "mapy-map-card";

window.customCards = window.customCards ?? [];
window.customCards.push({
  type: CARD_TYPE,
  name: "Mapy.com Map Card",
  description:
    "Map card powered by Mapy.com tiles – entities, history trails, zones. Replacement for the built-in map card.",
  preview: true,
});

console.info(
  "%c MAPY-MAP-CARD %c v0.2.0 ",
  "color: white; background: #c83737; font-weight: 700;",
  "color: white; background: #333; font-weight: 700;",
  "\nhttps://github.com/jpribil/mapy-map-card"
);
