# Mapy.com Map Card

Lovelace karta pro [Home Assistant](https://www.home-assistant.io/), která nahrazuje vestavěnou **mapovou kartu** (`map`) a jako podklady používá **[Mapy.com](https://mapy.com/)**.

![preview](https://img.shields.io/badge/HACS-Custom-41BDF7.svg)

## Funkce

- 🗺️ Dlaždice **Mapy.com** (basic, outdoor, případně aerial) přes oficiální Map Tiles REST API
- 👤 Entity s GPS polohou (`person`, `device_tracker`, `geo_location`, …) – včetně obrázkových markerů podle `entity_picture`
- 〰️ **Historie poloh** za zvolený počet hodin přes WebSocket `history/history_stream` (stejný mechanismus jako vestavěná karta)
- ⭕ Zobrazení **zón** s poloměrem, pasivní zóny šedě
- 🎨 Tmavý režim (`auto` reaguje na téma HA), automatické přizpůsobení výřezu (fit bounds)
- 🛠️ Grafický editor s výběrem entit (využívá `ha-entity-picker`)
- Kliknutí na marker otevře standardní dialog *more-info*

## Instalace

### HACS (doporučeno)

1. Přidejte tento repozitář do HACS: **HACS → Lovelace → Custom repositories**
2. Jako kategorii zvolte *Lovelace* a vložte URL repozitáře
3. Nainstalujte **Mapy.com Map Card**
4. Obnovte prohlížeč (Ctrl+F5)

### Ruční instalace

Zkopírujte `dist/mapy-map-card.js` do `config/www/`:

```
config/
└── www/
    └── mapy-map-card.js
```

a přidejte do dashboardu (YAML nebo *Raw editor*):

```yaml
resources:
  - url: /local/mapy-map-card.js?v=0.1.0
    type: module
```

## Získání API klíče

1. Zaregistrujte se na [developer.mapy.com](https://developer.mapy.com/) (zdarma)
2. Vytvořte nový **projekt**
3. Přidejte produkt **Map Tiles REST API** (podle potřeby i *Outdoor map* apod.)
4. Zkopírujte **API klíč** projektu a vložte jej do konfigurace karty (`api_key`)

> Klíč je soukromý – karta běží plně v prohlížeči a posílá požadavky přímo na `api.mapy.com`.

## Konfigurace

| Parametr | Typ | Výchozí | Popis |
|---|---|---|---|
| `api_key` | string | – | **Povinné** (pokud nepoužijete `tile_url`). API klíč z developer.mapy.com |
| `entities` | list | auto | Seznam entit; prázdný seznam = automaticky všechny entity s GPS |
| `hours_to_show` | number | `24` | Jak starou historii poloh zobrazit (`0` = vypnout) |
| `show_zones` | bool | `true` | Zobrazit zóny |
| `theme_mode` | `auto`/`light`/`dark` | `auto` | Tmavý režim dlaždic |
| `tile_style` | `basic`/`outdoor`/`winter`/`aerial` | `basic` | Styl podkladu Mapy.com |
| `language` | string | auto | Jazyk popisků mapy (`cs`, `en`, `de`, …) – parametr `lang` API |
| `aspect_ratio` | string | `16:9` | Poměr stran (`16:9`, `4:3`, `1:1`) nebo CSS výška (`400px`) |
| `default_zoom` | number | `14` | Zoom při jedné pozici / max. zoom při fit bounds |
| `fit_bounds` | bool | `true` | Automaticky přizpůsobit výřez všem bodům |
| `title` | string | – | Nadpis karty |
| `tile_url` | string | – | Pokročilé: vlastní URL dlaždic `{z}/{x}/{y}` (nahrazuje Mapy.com) |
| `tile_attribution` | string | – | Vlastní attribution pro vlastní dlaždice |

### Příklady

Minimální:

```yaml
type: custom:mapy-map-card
api_key: VAS_API_KLIC
```

Plná náhrada původní mapové karty:

```yaml
type: custom:mapy-map-card
api_key: VAS_API_KLIC
title: Rodina
hours_to_show: 48
tile_style: outdoor
theme_mode: auto
aspect_ratio: 4:3
entities:
  - entity: person.tomas
    name: Tomáš
  - person.jana
show_zones: true
```

## Poznámky

- Historie poloh vyžaduje zapnutou integraci **Recorder** (standardně aktivní).
- Styl `aerial` je experimentální – vyžaduje aktivovaný produkt leteckých map ve vašem projektu na developer.mapy.com; pokud dlaždice chybí, použijte `basic`/`outdoor`.
- Používáním API klíče se zavazujete dodržovat [podmínky Mapy.com API](https://developer.mapy.com/).

## Vývoj

```bash
npm install
npm run build     # typová kontrola + build do dist/
npm run watch     # rebuild při změnách
npm test          # smoke test (jsdom)
```

Ruční vizuální test: otevřete `test/harness.html` v prohlížeči.

## Licence

MIT
