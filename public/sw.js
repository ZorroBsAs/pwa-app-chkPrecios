/*self.addEventListener("fetch", e => {
  e.respondWith(
    caches.open("precios").then(cache =>
      cache.match(e.request).then(r => r || fetch(e.request))
    )
  )
});*/


const CACHE_NAME = 'chkprice-cache-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon.png',
  '/icon192.png',
  '/sw.js',
];

// Instalación: cachear assets estáticos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

// Activación: limpiar caches viejas
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => key !== CACHE_NAME ? caches.delete(key) : null))
    )
  );
  self.clients.claim();
});

// Fetch: responder con cache o red fallback
self.addEventListener('fetch', event => {
  const req = event.request;

  event.respondWith(
    caches.match(req).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(req).then(networkResponse => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(req, networkResponse.clone());
          return networkResponse;
        });
      });
    }).catch(() => {
      if (req.destination === 'document') {
        return caches.match('/index.html');
      }
    })
  );
});

