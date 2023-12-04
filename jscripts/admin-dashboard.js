document.addEventListener('DOMContentLoaded', function () {
    var btnApproval = document.getElementById('approval');
    var btnParent = document.getElementById('parent');
    var btnChild = document.getElementById('child');
    var btnMenu = document.getElementById('menu');
    var btnNotif = document.getElementById('notif');

    btnApproval.addEventListener('click', function () {
        window.location.href = 'admin-for-approval.html';
    });

    btnParent.addEventListener('click', function () {
        window.location.href = 'view-parent.html';
    });

    btnChild.addEventListener('click', function () {
        window.location.href = 'view-child.html';
    });

    btnMenu.addEventListener('click', function () {
        // Handle menu button click
    });

    btnNotif.addEventListener('click', function () {
        // Create and append the notification popup
        var notificationPopup = document.createElement('iframe');
        notificationPopup.src = 'admin-notifications.html';
        notificationPopup.style.position = 'absolute';
        notificationPopup.style.top = '0';
        notificationPopup.style.left = '50%';
        notificationPopup.style.transform = 'translateX(-50%)';
        notificationPopup.style.width = '100%'; // Adjust the width to fit the parent
        notificationPopup.style.height = '100%'; // Adjust the height to fit the parent
        notificationPopup.style.border = 'none';

        document.querySelector('.admin-dash-form').appendChild(notificationPopup);

        // Add an event listener to handle messages from the notification popup
        window.addEventListener('message', function (event) {
            if (event.data && event.data.type === 'notificationClosed') {
                // Handle the notification closed event
                console.log('Notification closed');
            }
        });
    });
});