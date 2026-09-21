const CACHE_NAME = "meu-meliponario-v14.5";
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./seed-data.js",
  "./db.js",
  "./app.js",
  "./pwa.js",
  "./data.json",
  "./manifest.webmanifest",
  "./icons/icon-32.png",
  "./icons/icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/maskable-512.png",
  "./assets/bee-flower.webp",
  "./assets/jatai.webp",
  "./assets/mandacaia.webp",
  "./assets/urucu.webp"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => Promise.all(APP_SHELL.map(async url => {
        try { await cache.add(url); }
        catch (err) { console.warn('[SW] Falha ao pré-carregar', url, err); }
      })))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME && key.startsWith("meu-meliponario-")).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (request.mode === "navigate") {
    event.respondWith(fetch(request).then(response => {
      const copy=response.clone(); caches.open(CACHE_NAME).then(cache => cache.put("./index.html",copy)); return response;
    }).catch(() => caches.match("./index.html")));
    return;
  }
  event.respondWith(caches.match(request).then(cached => {
    if (cached) {
      event.waitUntil(fetch(request).then(response => { if(response && response.ok) caches.open(CACHE_NAME).then(cache => cache.put(request,response.clone())); }).catch(()=>{}));
      return cached;
    }
    return fetch(request).then(response => { if(response && response.ok) caches.open(CACHE_NAME).then(cache => cache.put(request,response.clone())); return response; });
  }));
});

self.addEventListener("message", event => { if(event.data && event.data.type === "SKIP_WAITING") self.skipWaiting(); });
