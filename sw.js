//install service worker
self.addEventListener('install', (event) => {
    console.log('Service Worker is installed');
    
})

const staticAssets = ['/.index.html', './app.js']
const staticCache = ""
const DynamicCache = ""
const dynamicCacheName = ""

// Install service worker 2
self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.open('staticCache').then (function (cache) {
            return cache.addAll(staticAssets)
        })
    ) 
})

// Fetch event
