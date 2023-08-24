importScripts("https://cdn.pushalert.co/sw-60727.js");

self.addEventListener('push', function (event) {
    alert(event)
    console.log('push event', event)
})

self.addEventListener('notificationclick', function (event) {
    alert(event)
    console.log('notificationclick event', event)
})

