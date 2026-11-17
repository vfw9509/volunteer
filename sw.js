// Minimal service worker so phones offer "Install / Add to Home screen".
// It does not cache anything: the volunteer page always loads fresh.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* pass through to the network */ });
