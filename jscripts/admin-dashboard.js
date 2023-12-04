document.addEventListener('DOMContentLoaded', function () {
    var btnApproval = document.getElementById('approval');
    var btnParent = document.getElementById('parent');
    var btnChild = document.getElementById('child');
    var btnMenu = document.getElementById('menu');
    var btnNotif = document.getElementById('notif');
    var adminDashForm = document.querySelector('.admin-dash-form');

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
        // Create and append the menu popup
        var menuPopup = document.createElement('iframe');
        menuPopup.src = 'admin-menu.html';
        menuPopup.style.position = 'absolute';
        menuPopup.style.top = '0';
        menuPopup.style.left = '0';
        menuPopup.style.width = '100%';
        menuPopup.style.height = '100%';
        menuPopup.style.border = 'none';

        adminDashForm.appendChild(menuPopup);

        // Add an event listener to handle messages from the menu popup
        window.addEventListener('message', function (event) {
            if (event.data && event.data.type === 'menuClosed') {
                // Handle the menu closed event
                adminDashForm.removeChild(menuPopup);
            }
        });
    });

    btnNotif.addEventListener('click', function () {
        // Create and append the notification popup
        var notificationPopup = document.createElement('iframe');
        notificationPopup.src = 'admin-notifications.html';
        notificationPopup.style.position = 'absolute';
        notificationPopup.style.top = '0';
        notificationPopup.style.left = '0';
        notificationPopup.style.width = '100%';
        notificationPopup.style.height = '100%';
        notificationPopup.style.border = 'none';

        adminDashForm.appendChild(notificationPopup);

        // Add an event listener to handle messages from the notification popup
        window.addEventListener('message', function (event) {
            if (event.data && event.data.type === 'notificationClosed') {
                // Handle the notification closed event
                adminDashForm.removeChild(notificationPopup);
            }
        });
    });

    // You can add more event handlers for different events
    // ...
});
