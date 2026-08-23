# Mapy.com Map Card

A [Home Assistant](https://www.home-assistant.io/) Lovelace card that replaces the built-in **map card** and uses **[Mapy.com](https://mapy.com/)** as the tile source.

![preview](https://img.shields.io/badge/HACS-Custom-41BDF7.svg)

## Features

- 🗺️ **Mapy.com** tiles (basic, outdoor, winter, aerial) via the official Map Tiles REST API
- 👤 Entities with GPS position (`person`, `device_tracker`, `geo_location`, …) – including picture markers based on `entity_picture`
- 〰️ **Location history** via the `history/history_stream` WebSocket API (same mechanism as the built-in map card), with a one-shot `history/history_during_period` fallback
- ⭕ **Zones** with radius; passive zones shown in gray
- 🎨 Dark mode (`auto` follows the HA theme), automatic fit bounds
- 🛠️ GUI editor with entity picker (uses `ha-entity-picker`)
- Clicking a marker opens the standard *more-info* dialog

## Installation

### HACS (recommended)

1. Add this repository to HACS: **HACS → ⋮ menu → Custom repositories**
2. URL: `https://github.com/jpribil/mapy-map-card`, category *Lovelace*
3. Install **Mapy.com Map Card**
4. Refresh your browser (Ctrl+F5)

### Manual installation

Download the [latest release](https://github.com/jpribil/mapy-map-card/releases) and copy `mapy-map-card.js` into `config/www/`:

```
config/
└── www/
    └── mapy-map-card.js
```

and register it in your dashboard configuration (YAML or *Raw editor*):

```yaml
resources:
  - url: /local/mapy-map-card.js?v=0.1.1
    type: module
```

## Getting an API key

1. Sign up at [developer.mapy.com](https://developer.mapy.com/) (free)
2. Create a new **project**
3. Add the **Map Tiles REST API** product (plus *Outdoor map* etc. if needed)
4. Copy the project **API key** and put it into the card's `api_key` option

> The key is private – the card runs entirely in the browser and talks directly to `api.mapy.com`.

## Configuration

| Option | Type | Default | Description |
|---|---|---|---|
| `api_key` | string | – | **Required** (unless you use `tile_url`). API key from developer.mapy.com |
| `entities` | list | auto | List of entities; empty list = automatically all entities with GPS |
| `hours_to_show` | number | `24` | How old history to show (`0` = disabled) |
| `show_zones` | bool | `true` | Show zones |
| `theme_mode` | `auto`/`light`/`dark` | `auto` | Tile dark mode |
| `tile_style` | `basic`/`outdoor`/`winter`/`aerial` | `basic` | Mapy.com tile style |
| `language` | string | auto | Map label language (`cs`, `en`, `de`, …) – the API `lang` parameter |
| `aspect_ratio` | string | `16:9` | Aspect ratio (`16:9`, `4:3`, `1:1`) or a CSS height value (`400px`) |
| `default_zoom` | number | `14` | Zoom for a single position / max zoom when fitting bounds |
| `fit_bounds` | bool | `true` | Automatically fit the viewport to all points |
| `title` | string | – | Card title |
| `entity_colors` | map | – | Per-entity color override, e.g. `person.joe: "#e53935"`. Applies to the position marker and its history trail |
| `history_line_width` | number | `4` | History trail line width in px |
| `history_line_opacity` | number | `0.65` | History trail line opacity (0.1–1) |
| `history_line_color` | color | entity color | Fixed trail line color for all entities |
| `history_point_color` | color | entity color | Fixed trail point color for all entities |
| `history_point_type` | `dot`/`ring`/`square`/`none` | `dot` | Style of the trail points; hovering a point shows its date & time |
| `tile_url` | string | – | Advanced: custom `{z}/{x}/{y}` tile URL template (overrides Mapy.com) |
| `tile_attribution` | string | – | Custom attribution for custom tiles |

### Examples

Minimal:

```yaml
type: custom:mapy-map-card
api_key: YOUR_API_KEY
```

Full replacement of the built-in map card:

```yaml
type: custom:mapy-map-card
api_key: YOUR_API_KEY
title: Family
hours_to_show: 48
tile_style: outdoor
theme_mode: auto
aspect_ratio: 4:3
language: en
entities:
  - entity: person.tomas
    name: Tom
  - person.jana
show_zones: true
```

Custom trail styling with per-entity colors:

```yaml
type: custom:mapy-map-card
api_key: YOUR_API_KEY
hours_to_show: 24
entity_colors:
  person.tomas: "#1e88e5"
  person.jana: "#e53935"
history_line_width: 5
history_line_opacity: 0.8
# history_line_color: "#ff9800"   # one line color for everyone
# history_point_color: "#ff9800"  # one point color for everyone
history_point_type: dot           # dot | ring | square | none
```

## Notes

- Location history requires the **Recorder** integration (enabled by default).
- The `aerial` style is experimental – it requires the aerial imagery product to be enabled for your project at developer.mapy.com; if tiles are missing, use `basic`/`outdoor`.
- Using the API key means you agree to the [Mapy.com API terms](https://developer.mapy.com/).

## Development

```bash
npm install
npm run build     # type check + build into dist/
npm run watch     # rebuild on changes
npm test          # smoke test (jsdom)
```

Manual visual test: open `test/harness.html` in a browser.

## License

MIT
