importScripts("https://cdn.pushalert.co/sw-60727.js");

self.addEventListener('push', function (event) {
    console.log('push event', event)
})

self.addEventListener('notificationclick', function (event) {
    console.log('notificationclick event', event)
})

setTimeout(() => {
    console.log('콘솔 로그 10초 뒤')
}, 10000)