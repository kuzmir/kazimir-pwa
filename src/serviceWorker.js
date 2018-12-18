const DEFAULT_CACHE = 'cache-kazimir-v1';
const baseCacheList = [
  '.',
  'index.html'
];

self.addEventListener('install', event => {
  console.log('installed', event)
  // add assets to cache

  event.waitUntil(
    caches.open(DEFAULT_CACHE)
      .then(cache => cache.addAll(baseCacheList))
  );
});

self.addEventListener('activate', event => {
  console.log('activated', event)
  // invalidate cache
});

const fetchAndCache = resourceURL =>
  fetch(resourceURL)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      }

      return caches
        .open(DEFAULT_CACHE)
        .then(cache => cache.put(resourceURL, response.clone()) && response)
    })
    .catch(console.error);

self.addEventListener('fetch', event => {
  event.respondWith(
    caches
      .match(event.request)
      .then(response => response || fetchAndCache(event.request))
      .catch(console.error)
  );
});
