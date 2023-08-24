importScripts("https://cdn.pushalert.co/sw-60727.js");

self.addEventListener('push', function (event) {
    alert(event)
    console.log('push event', event)
})

self.addEventListener('notificationclick', function (event) {
    alert(event)
    console.log('notificationclick event', event)
})

setInterval(() => {
    console.log('콘솔 로그 10초 마다', self)
}, 10000)