
RegisterServiceWorker = function () {
    if(!navigator.serviceWorker) return;

    navigator.serviceWorker.register('sw.js').then(function (reg) {
        if ('serviceWorker' in navigator) {
            // Do a one-off check to see if a service worker's in control.
            if (navigator.serviceWorker.controller) {
                console.log('This page is currently controlled by:',
                navigator.serviceWorker.controller);
            } else {
                console.log('This page is not currently controlled ' +
                'by a service worker.');
            }
        } else {
            console.log('Service workers are not supported.');
        }
        if(!navigator.serviceWorker.controller) {
            return;
        }
        if (reg.waiting) {
            document.getElementsByClassName('notification').classList.add('show')
        }
    })
}

RegisterServiceWorker();
