const CACHE_NAME = 'bloom-valley-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/pic/logo.png',
    '/pic/Client1_AloePlant.png',
    '/pic/Client1_MapleTree.png',
    '/pic/Client1_BirdHouse.png',
    '/pic/Client1_BirchTree.png',
    '/pic/Client1_AppleTree.png',
    '/pic/Client1_PottingSoil.png',
    '/pic/Client1_SpiderPlant.png',
    '/pic/Client1_StringofPearls.png',
    '/pic/Client1_WateringCan.png',
    '/script.js',
    '/free-trial.html'
];

// Install the service worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Activate the service worker
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch the cached assets when offline or during normal browsing
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});
