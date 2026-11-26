const CACHE = '8760-hours-v1.3.1-pwa-recovery';
const SHELL = [
  './index.html',
  './styles-v131-clean.css',
  './app-v131-clean.js',
  './hours-db-v130.js',
  './question-set-v1.js',
  './manifest.webmanifest',
  './offline.html',
  './icons/icon-192-v2.png',
  './icons/icon-512-v2.png'
];
const IMMUTABLE = new Set([
  './styles-v131-clean.css',
  './app-v131-clean.js',
  './hours-db-v130.js',
  './question-set-v1.js',
  './icons/icon-192-v2.png',
  './icons/icon-512-v2.png'
]);
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('8760-hours-') && k !== CACHE).map(k => caches.delete(k)))));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request, {cache:'no-store'}).then(response => {
      if (response && response.ok) {
        const copy = response.clone();
        caches.open(CACHE).then(cache => cache.put('./index.html', copy));
      }
      return response;
    }).catch(() => caches.match('./index.html').then(r => r || caches.match('./offline.html'))));
    return;
  }
  const relative = url.origin === self.location.origin ? './' + url.pathname.split('/').filter(Boolean).slice(-1)[0] : '';
  const iconRelative = url.pathname.includes('/icons/') ? './icons/' + url.pathname.split('/').pop() : relative;
  const key = url.pathname.includes('/icons/') ? iconRelative : relative;
  if (IMMUTABLE.has(key)) {
    event.respondWith(caches.match(event.request).then(r => r || fetch(event.request)));
  }
});
