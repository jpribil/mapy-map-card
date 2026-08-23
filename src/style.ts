import leafletCss from "leaflet/dist/leaflet.css";

export const cardStyles = `${leafletCss}
:host {
  display: block;
  height: 100%;
}

ha-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  background: var(--card-background-color, #fff);
}

.mmc-header {
  font-size: var(--map-card-header-font-size, 1.2em);
  padding: 10px 16px 4px;
  color: var(--primary-text-color, #000);
}

.mmc-map-wrapper {
  position: relative;
  flex: 1;
  min-height: 200px;
}

.mmc-map {
  position: absolute;
  inset: 0;
  background: #e5e3df;
}

.mmc-map.leaflet-container {
  font: inherit;
  height: 100%;
}

.mmc-error {
  padding: 16px;
  color: var(--error-color, #db4437);
  font-size: 14px;
}

/* --- markers --- */

.mmc-icon-wrapper {
  background: transparent !important;
  border: none !important;
}

.mmc-dot {
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.95);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.45);
}

.mmc-picture-icon {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.95);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.45);
  object-fit: cover;
}

/* --- tooltips rendered as plain labels --- */

.leaflet-tooltip.mmc-label {
  background: transparent;
  border: none;
  box-shadow: none;
  padding: 0;
  color: var(--primary-text-color, #000);
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  text-shadow:
    -1px -1px 0 rgba(255, 255, 255, 0.85),
    1px -1px 0 rgba(255, 255, 255, 0.85),
    -1px 1px 0 rgba(255, 255, 255, 0.85),
    1px 1px 0 rgba(255, 255, 255, 0.85),
    0 0 6px rgba(255, 255, 255, 0.85);
}

.leaflet-tooltip.mmc-label::before {
  display: none;
}

.mmc-dark .leaflet-tooltip.mmc-label {
  color: #fff;
  text-shadow:
    -1px -1px 0 rgba(0, 0, 0, 0.9),
    1px -1px 0 rgba(0, 0, 0, 0.9),
    -1px 1px 0 rgba(0, 0, 0, 0.9),
    1px 1px 0 rgba(0, 0, 0, 0.9),
    0 0 6px rgba(0, 0, 0, 0.9);
}

/* --- history trail points --- */

.mmc-trail-square {
  display: block;
  width: 8px;
  height: 8px;
  border: 1px solid rgba(255, 255, 255, 0.95);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
}

.leaflet-tooltip.mmc-trail-tip {
  font-size: 11px;
  padding: 2px 6px;
  white-space: nowrap;
}

/* --- dark mode tile filter --- */

.mmc-dark .leaflet-tile-pane {
  filter: invert(1) hue-rotate(180deg) brightness(0.92) contrast(0.92) saturate(0.55);
}

/* --- controls --- */

.leaflet-control-attribution {
  font-size: 9px;
}

.mmc-dark .leaflet-control-zoom a,
.mmc-dark .leaflet-control-attribution {
  background: rgba(30, 30, 30, 0.8);
  color: #ddd;
}

.mmc-dark .leaflet-control-zoom a:hover {
  background: rgba(60, 60, 60, 0.9);
  color: #fff;
}

/* --- tile style switcher --- */

.leaflet-control-layers-toggle,
.leaflet-retina .leaflet-control-layers-toggle {
  background-image: none !important;
}

.leaflet-control-layers-toggle::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: no-repeat center / 18px
    url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23333' stroke-width='1.8' stroke-linejoin='round' stroke-linecap='round'><polygon points='12 2 21 7 12 12 3 7'/><polyline points='3 12 12 17 21 12'/><polyline points='3 17 12 22 21 17'/></svg>");
}

.leaflet-control-layers-expanded {
  font-size: 12px;
  padding: 8px 10px;
}

.leaflet-control-layers label {
  font-size: 12px;
  margin: 3px 0;
}

.mmc-dark .leaflet-control-layers-toggle {
  background-color: rgba(30, 30, 30, 0.85);
}

.mmc-dark .leaflet-control-layers-toggle::before {
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ddd' stroke-width='1.8' stroke-linejoin='round' stroke-linecap='round'><polygon points='12 2 21 7 12 12 3 7'/><polyline points='3 12 12 17 21 12'/><polyline points='3 17 12 22 21 17'/></svg>");
}

.mmc-dark .leaflet-control-layers-expanded {
  background: rgba(30, 30, 30, 0.92);
  color: #ddd;
}

.mmc-dark .leaflet-control-layers-separator {
  border-top-color: rgba(255, 255, 255, 0.2);
}

/* --- history range switcher (same visual family, different icon) --- */

.mmc-history-toggle::before {
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23333' stroke-width='1.8' stroke-linejoin='round' stroke-linecap='round'><circle cx='12' cy='12' r='9'/><polyline points='12 7 12 12 16 14'/></svg>");
}

.mmc-dark .mmc-history-toggle::before {
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ddd' stroke-width='1.8' stroke-linejoin='round' stroke-linecap='round'><circle cx='12' cy='12' r='9'/><polyline points='12 7 12 12 16 14'/></svg>");
}
`;
