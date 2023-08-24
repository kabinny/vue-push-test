importScripts("https://cdn.pushalert.co/sw-60727.js");

self.addEventListener('push', function (event) {
    console.log('push event', event)
})

self.addEventListener('notificationclick', function (event) {
    console.log('notificationclick event', event)
})