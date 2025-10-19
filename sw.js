const CACHE_NAME = 'lottery-ledger-cache-v1';
const URLS_TO_CACHE = [
  '/',
  'index.html',
  // अगर आपकी कोई CSS या icon फाइलें हैं तो उन्हें भी यहाँ जोड़ें
  'icon-192x192.png',
  'icon-512x512.png'
];

// Install event: Cache the core files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(URLS_TO_CACHE);
      })
  );
});

// Fetch event: Serve from cache first
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});