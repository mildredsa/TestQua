document.addEventListener('DOMContentLoaded', function () {
    // Add an event listener to the close button
    var btnClose = document.getElementById('btn-close');

    if (btnClose) {
        btnClose.addEventListener('click', function () {
            // Remove the notification popup when the close button is clicked
            window.parent.document.querySelector('.admin-dash-form iframe').remove();
        });
    }
});
