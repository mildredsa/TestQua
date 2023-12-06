document.addEventListener('DOMContentLoaded', function () {
    var btnClose = document.getElementById('btn-close');

    btnClose.addEventListener('click', function () {
        // Send a message to the parent window indicating that the notifications are closed
        window.parent.postMessage({ type: 'notificationClosed' }, '*');
    });
});
