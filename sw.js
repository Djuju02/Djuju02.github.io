// Stratégie "network first" : toujours la dernière version en ligne, cache en secours hors-ligne.
const VERSION = 'v3.1.0';
const CACHE = 'js-portfolio-' + VERSION;
const ASSETS = ['./', './index.html', './styles.css', './script.js', './i18n.js', './favicon.svg', './assets/julien-saleh.webp'];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(
    fetch(req).then(res => {
      if (res.ok) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
      }
      return res;
    }).catch(() => caches.match(req))
  );
});
