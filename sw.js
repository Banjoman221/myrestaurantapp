var staticCacheName = 'restaurant-app-v1'

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(staticCacheName).then(function (cache) {
            return cache.addAll([
                '/',
                'js/dbhelper.js',
                'js/main.js',
                'js/restaurant_info.js',
                'css/styles.css',
                'data/restaurants.json'
            ]);
        })
    );
});
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                return response;
            }
            var requestedFetch = event.request.clone();

            return fetch(requestedFetch).then(
                function (response) {
                    if(!response || response.status != 200 || response.type != 'basic') {
                        return response
                    }
                    var responseToCache = response.clone();

                    caches.open(staticCacheName).then(function (cache) {
                        cache.put(event.request, responseToCache);
                    })
                    return response;
                }
            )
        })
    );
});
