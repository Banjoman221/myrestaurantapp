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
                'data/restaurants.json',
                '/restaurant.html',
                '/img/1.jpg',
                '/img/2.jpg',
                '/img/3.jpg',
                '/img/4.jpg',
                '/img/5.jpg',
                '/img/6.jpg',
                '/img/7.jpg',
                '/img/8.jpg',
                '/img/9.jpg',
                '/img/10.jpg',
                '/img/images/1.jpg',
                '/img/images/2.jpg',
                '/img/images/3.jpg',
                '/img/images/4.jpg',
                '/img/images/5.jpg',
                '/img/images/6.jpg',
                '/img/images/7.jpg',
                '/img/images/8.jpg',
                '/img/images/9.jpg',
                '/img/images/10.jpg',
            ]);
        })
    );
});
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request, {ignoreSearch: true}).then(function(response) {
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
