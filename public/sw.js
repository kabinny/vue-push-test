importScripts("https://cdn.pushalert.co/sw-60727.js");

// console.log 를 비동기로 처리하기 위한 함수
function asyncConsoleLog(message) {
    return new Promise((resolve, reject) => {
        console.log(message);
        resolve();
    });
}

self.addEventListener('push', function (event) {
    asyncConsoleLog('push event')
    // console.log('push event', event)
})

self.addEventListener('notificationclick', function (event) {
    asyncConsoleLog('notificationclick event')
    // console.log('notificationclick event', event)
})

self.addEventListener('activate', () => {
    asyncConsoleLog('activate event')
    // console.log('activate event')
})