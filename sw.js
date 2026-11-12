// Service worker : met l'application en cache pour qu'elle fonctionne hors ligne.
// Changer VERSION à chaque mise à jour de index.html pour forcer le rafraîchissement du cache.
const VERSION = 'v5';
const CACHE = 'tableau-' + VERSION;
const FILES = ['./', 'index.html', 'manifest.webmanifest', 'icon.svg', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith('tableau-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  // Les ouvertures de fichiers arrivent comme une navigation vers « ./ » : on sert toujours la page en cache.
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(hit => hit ||
      (e.request.mode === 'navigate' ? caches.match('index.html') : null) ||
      fetch(e.request))
  );
});
