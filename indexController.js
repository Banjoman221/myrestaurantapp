
RegisterServiceWorker = function () {
    if(!navigator.serviceWorker) return;

    navigator.serviceWorker.register('sw.js').then(function (reg) {
        if(!navigator.serviceWorker.controller) {
            return;
        }
        if (reg.waiting) {
            document.getElementsByClassName('notification').classList.add('show')
        }
    })
}

RegisterServiceWorker();
