import * as L from "leaflet";

/**
 * Shared, browser-wide tile cache (Cache Storage API) used by every
 * mapy-map-card instance on the page – tiles are the same resource
 * regardless of which card/dashboard shows them. Falls back to a plain
 * network `<img src>` whenever the Cache API is unavailable or fails
 * (private browsing, quota, older embedded browsers), so caching can
 * never break the map.
 */

const TILE_CACHE_NAME = "mapy-map-card-tiles-v1";
const INDEX_STORAGE_KEY = "mapy-map-card:tile-cache-index";
const STATS_STORAGE_KEY = "mapy-map-card:tile-cache-stats";
const INDEX_PERSIST_DELAY_MS = 2000;

interface TileIndexEntry {
  size: number;
  lastAccessed: number;
}

interface TileCacheStats {
  hits: number;
  misses: number;
}

let cacheLimitBytes = 50 * 1024 * 1024;
let index: Record<string, TileIndexEntry> | undefined;
let stats: TileCacheStats | undefined;
let persistIndexTimer: ReturnType<typeof setTimeout> | undefined;

function hasCacheApi(): boolean {
  return typeof caches !== "undefined";
}

function loadIndex(): Record<string, TileIndexEntry> {
  if (index) return index;
  try {
    const raw = window.localStorage.getItem(INDEX_STORAGE_KEY);
    index = raw ? JSON.parse(raw) : {};
  } catch {
    index = {};
  }
  return index!;
}

function loadStats(): TileCacheStats {
  if (stats) return stats;
  try {
    const raw = window.localStorage.getItem(STATS_STORAGE_KEY);
    stats = raw ? JSON.parse(raw) : { hits: 0, misses: 0 };
  } catch {
    stats = { hits: 0, misses: 0 };
  }
  return stats!;
}

function schedulePersistIndex(): void {
  if (persistIndexTimer) return;
  persistIndexTimer = setTimeout(() => {
    persistIndexTimer = undefined;
    try {
      window.localStorage.setItem(INDEX_STORAGE_KEY, JSON.stringify(index ?? {}));
    } catch {
      // storage unavailable/full – cache still works this session
    }
  }, INDEX_PERSIST_DELAY_MS);
}

function persistStats(): void {
  try {
    window.localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(stats));
  } catch {
    // ignore
  }
}

/** Sets the shared cache size limit (MB); 0 disables caching entirely. */
export function setTileCacheLimitMb(mb: number): void {
  cacheLimitBytes = Math.max(0, Number(mb) || 0) * 1024 * 1024;
}

export function isTileCacheEnabled(): boolean {
  return cacheLimitBytes > 0 && hasCacheApi();
}

export function getTileCacheStats(): { tileCount: number; sizeMb: number; hits: number; misses: number } {
  const entries = Object.values(loadIndex());
  const sizeBytes = entries.reduce((sum, e) => sum + e.size, 0);
  const s = loadStats();
  return {
    tileCount: entries.length,
    sizeMb: Math.round((sizeBytes / (1024 * 1024)) * 10) / 10,
    hits: s.hits,
    misses: s.misses,
  };
}

export async function clearTileCache(): Promise<void> {
  index = {};
  stats = { hits: 0, misses: 0 };
  try {
    window.localStorage.removeItem(INDEX_STORAGE_KEY);
    window.localStorage.removeItem(STATS_STORAGE_KEY);
  } catch {
    // ignore
  }
  if (!hasCacheApi()) return;
  try {
    await caches.delete(TILE_CACHE_NAME);
  } catch {
    // ignore
  }
}

function maybeEvict(): void {
  const idx = loadIndex();
  const entries = Object.entries(idx);
  let total = entries.reduce((sum, [, e]) => sum + e.size, 0);
  if (total <= cacheLimitBytes) return;

  entries.sort((a, b) => a[1].lastAccessed - b[1].lastAccessed);
  const toEvict: string[] = [];
  for (const [url, entry] of entries) {
    if (total <= cacheLimitBytes) break;
    toEvict.push(url);
    total -= entry.size;
  }
  for (const url of toEvict) delete idx[url];
  schedulePersistIndex();
  if (toEvict.length === 0) return;

  caches
    .open(TILE_CACHE_NAME)
    .then((cache) => {
      for (const url of toEvict) cache.delete(url).catch(() => {});
    })
    .catch(() => {});
}

function recordAccess(url: string, size: number, hit: boolean): void {
  loadIndex()[url] = { size, lastAccessed: Date.now() };
  const s = loadStats();
  if (hit) s.hits++;
  else s.misses++;
  schedulePersistIndex();
  persistStats();
  maybeEvict();
}

/**
 * Loads a tile through the shared cache, returning a blob object URL.
 * Rejects if caching is disabled/unavailable/fails – the caller falls back
 * to the plain tile URL.
 */
export async function loadCachedTile(url: string): Promise<string> {
  if (!isTileCacheEnabled()) throw new Error("tile cache disabled");
  const cache = await caches.open(TILE_CACHE_NAME);
  let response = await cache.match(url);
  const hit = !!response;
  if (!response) {
    response = await fetch(url);
    if (!response.ok) throw new Error(`tile fetch failed: ${response.status}`);
    await cache.put(url, response.clone());
  }
  const blob = await response.blob();
  recordAccess(url, blob.size, hit);
  return URL.createObjectURL(blob);
}

/** Tile layer that transparently routes tile loads through the shared cache. */
export class CachedTileLayer extends L.TileLayer {
  protected override createTile(coords: L.Coords, done: L.DoneCallback): HTMLElement {
    const tile = document.createElement("img");
    tile.alt = "";
    tile.setAttribute("role", "presentation");

    L.DomEvent.on(tile, "load", L.Util.bind(this._tileOnLoad, this, done, tile));
    L.DomEvent.on(tile, "error", L.Util.bind(this._tileOnError, this, done, tile));

    const revokeIfBlob = () => {
      if (tile.src.startsWith("blob:")) URL.revokeObjectURL(tile.src);
    };
    L.DomEvent.on(tile, "load", revokeIfBlob);
    L.DomEvent.on(tile, "error", revokeIfBlob);

    const url = this.getTileUrl(coords);
    loadCachedTile(url)
      .then((objectUrl) => {
        tile.src = objectUrl;
      })
      .catch(() => {
        tile.src = url;
      });

    return tile;
  }
}
