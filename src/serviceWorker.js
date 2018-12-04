
const CACHE_KEY = 'kazimir-offline';

const preload = () => {
  console.log('Install Event processing');

  return caches.open(CACHE_KEY).then(cache => {
    console.log('Cached index and offline page during Install');
    return cache.addAll(['/offline.html', '/index.html']);
  });
}

self.addEventListener('fetch', event => {
  console.log('The service worker is serving the asset.');

  event.respondWith(checkResponse(event.request).catch(() => returnFromCache(event.request)));
  event.waitUntil(addToCache(event.request));
});

const checkResponse = request => {
  return new Promise((resolve, reject) => {
    fetch(request).then((response) => {
      if(response.status !== 404) {
        resolve(response);
      } else {
        reject();
      }
    }, reject);
  });
};

const addToCache = request => {
  return caches.open(CACHE_KEY).then(cache => {
    return fetch(request).then(response => {
      console.log('add page to offline'+response.url)
      return cache.put(request, response);
    });
  });
};

const returnFromCache = request => {
  return caches.open(CACHE_KEY).then(cache => {
    return cache.match(request).then(matching => {
     if(!matching || matching.status == 404) {
       return cache.match('offline.html')
     } else {
       return matching
     }
    });
  });
};


self.addEventListener('install', event => event.waitUntil(preload()));
