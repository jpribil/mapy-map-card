import * as L from "leaflet";

/**
 * Shared, browser-wide tile cache used by every mapy-map-card instance on
 * the page – tiles are the same resource regardless of which card/dashboard
 * shows them. Uses IndexedDB (not the Cache Storage API) specifically
 * because Cache Storage requires a secure context (HTTPS/localhost) and
 * most home HA installs are reached over plain http:// on the LAN; IndexedDB
 * has no such restriction and stores Blobs natively. Falls back to a plain
 * network `<img src>` whenever IndexedDB is unavailable or fails (private
 * browsing, quota, older embedded browsers), so caching can never break the
 * map.
 */

const DB_NAME = "mapy-map-card-tiles";
const DB_VERSION = 1;
const STORE_NAME = "tiles";
const STATS_STORAGE_KEY = "mapy-map-card:tile-cache-stats";
const EVICT_DEBOUNCE_MS = 3000;

interface TileRecord {
  url: string;
  blob: Blob;
  size: number;
  lastAccessed: number;
}

interface TileCacheStats {
  hits: number;
  misses: number;
}

let cacheLimitBytes = 50 * 1024 * 1024;
let stats: TileCacheStats | undefined;
let dbPromise: Promise<IDBDatabase> | undefined;
let evictTimer: ReturnType<typeof setTimeout> | undefined;

function hasIndexedDb(): boolean {
  return typeof indexedDB !== "undefined";
}

function openDb(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: "url" });
        store.createIndex("lastAccessed", "lastAccessed");
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error ?? new Error("indexedDB open failed"));
  });
  return dbPromise;
}

function getRecord(db: IDBDatabase, url: string): Promise<TileRecord | undefined> {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readonly");
    const req = tx.objectStore(STORE_NAME).get(url);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error ?? new Error("indexedDB get failed"));
  });
}

function putRecord(db: IDBDatabase, record: TileRecord): Promise<void> {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite");
    tx.objectStore(STORE_NAME).put(record);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error ?? new Error("indexedDB put failed"));
  });
}

function getAllRecords(db: IDBDatabase): Promise<TileRecord[]> {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readonly");
    const req = tx.objectStore(STORE_NAME).getAll();
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error ?? new Error("indexedDB getAll failed"));
  });
}

function deleteRecords(db: IDBDatabase, urls: string[]): Promise<void> {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    for (const url of urls) store.delete(url);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error ?? new Error("indexedDB delete failed"));
  });
}

function clearStore(db: IDBDatabase): Promise<void> {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite");
    tx.objectStore(STORE_NAME).clear();
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error ?? new Error("indexedDB clear failed"));
  });
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

function recordStat(hit: boolean): void {
  const s = loadStats();
  if (hit) s.hits++;
  else s.misses++;
  try {
    window.localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(s));
  } catch {
    // storage unavailable/full – counters still work this session
  }
}

/** Sets the shared cache size limit (MB); 0 disables caching entirely. */
export function setTileCacheLimitMb(mb: number): void {
  cacheLimitBytes = Math.max(0, Number(mb) || 0) * 1024 * 1024;
}

export function isTileCacheEnabled(): boolean {
  return cacheLimitBytes > 0 && hasIndexedDb();
}

export async function getTileCacheStats(): Promise<{
  tileCount: number;
  sizeMb: number;
  hits: number;
  misses: number;
}> {
  const s = loadStats();
  if (!hasIndexedDb()) return { tileCount: 0, sizeMb: 0, hits: s.hits, misses: s.misses };
  try {
    const records = await getAllRecords(await openDb());
    const sizeBytes = records.reduce((sum, r) => sum + r.size, 0);
    return {
      tileCount: records.length,
      sizeMb: Math.round((sizeBytes / (1024 * 1024)) * 10) / 10,
      hits: s.hits,
      misses: s.misses,
    };
  } catch {
    return { tileCount: 0, sizeMb: 0, hits: s.hits, misses: s.misses };
  }
}

export async function clearTileCache(): Promise<void> {
  stats = { hits: 0, misses: 0 };
  try {
    window.localStorage.removeItem(STATS_STORAGE_KEY);
  } catch {
    // ignore
  }
  if (!hasIndexedDb()) return;
  try {
    await clearStore(await openDb());
  } catch {
    // ignore
  }
}

function scheduleEviction(): void {
  if (evictTimer) return;
  evictTimer = setTimeout(() => {
    evictTimer = undefined;
    evictIfNeeded().catch(() => {
      // never let cache maintenance break tile loading
    });
  }, EVICT_DEBOUNCE_MS);
}

async function evictIfNeeded(): Promise<void> {
  if (cacheLimitBytes <= 0 || !hasIndexedDb()) return;
  const db = await openDb();
  const records = await getAllRecords(db);
  let total = records.reduce((sum, r) => sum + r.size, 0);
  if (total <= cacheLimitBytes) return;

  records.sort((a, b) => a.lastAccessed - b.lastAccessed);
  const toEvict: string[] = [];
  for (const r of records) {
    if (total <= cacheLimitBytes) break;
    toEvict.push(r.url);
    total -= r.size;
  }
  if (toEvict.length) await deleteRecords(db, toEvict);
}

/**
 * Loads a tile through the shared cache, returning a blob object URL.
 * Rejects if caching is disabled/unavailable/fails – the caller falls back
 * to the plain tile URL.
 */
export async function loadCachedTile(url: string): Promise<string> {
  if (!isTileCacheEnabled()) throw new Error("tile cache disabled");
  const db = await openDb();

  const existing = await getRecord(db, url);
  const hit = !!existing;
  let blob: Blob;
  if (existing) {
    blob = existing.blob;
  } else {
    // network I/O happens outside any IndexedDB transaction on purpose –
    // a transaction auto-closes if left idle while a fetch is in flight
    const response = await fetch(url);
    if (!response.ok) throw new Error(`tile fetch failed: ${response.status}`);
    blob = await response.blob();
  }

  await putRecord(db, { url, blob, size: blob.size, lastAccessed: Date.now() });
  recordStat(hit);
  scheduleEviction();
  return URL.createObjectURL(blob);
}

/** Tile layer that transparently routes tile loads through the shared cache. */
export class CachedTileLayer extends L.TileLayer {
  protected override createTile(coords: L.Coords, done: L.DoneCallback): HTMLElement {
    const tile = document.createElement("img");
    tile.alt = "";
    tile.setAttribute("role", "presentation");

    // Leaflet's private fade-in/retry wiring – no public API for async image tiles.
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
