document.addEventListener('DOMContentLoaded', function () {
    var btnSms = document.getElementById('btn-sms');
    var btnContent = document.getElementById('btn-content');
    var btnHome = document.getElementById('btn-home');
    var btnLocator = document.getElementById('btn-locator');
    var btnSched = document.getElementById('btn-sched');
    var btnMenu = document.getElementById('btn-menu');
    var btnNotif = document.getElementById('btn-notif');
    var parentHomeContainer = document.querySelector('.dashboard-E61');

    function createPopup(src, eventType, position, size) {
        // Create and append the popup
        var popup = document.createElement('iframe');
        popup.src = src;
        popup.style.position = 'fixed';
        popup.style.border = 'none';

        if (position === 'left') {
            popup.style.top = '0';
            popup.style.left = '0';
            popup.style.height = '100%';
            popup.style.width = size.width || '50%'; // Default to 50% if width is not provided
        } else if (position === 'top-center') {
            popup.style.top = '0';
            popup.style.left = '50%';
            popup.style.transform = 'translateX(-50%)';
            popup.style.width = size.width || '70%'; // Default to 70% if width is not provided
            popup.style.height = size.height || '70%'; // Default to 70% if height is not provided
        }

        parentHomeContainer.appendChild(popup);

        // Add an event listener to handle messages from the popup
        window.addEventListener('message', function (event) {
            if (event.data && event.data.type === eventType) {
                // Handle the popup closed event
                parentHomeContainer.removeChild(popup);
            }
        });

        // Add a global click event listener to close the popup when clicking outside
        document.addEventListener('click', function (event) {
            if (!popup.contains(event.target) && event.target !== btnMenu && event.target !== btnNotif) {
                // Clicked outside of the popup, close it
                parentHomeContainer.removeChild(popup);
            }
        });
    }

    // Click event listener for btn-sms
    btnSms.addEventListener('click', function () {
        window.location.href = 'social-media.html';
    });

    // Click event listener for btn-content
    btnContent.addEventListener('click', function () {
        window.location.href = 'content.html';
    });

    // Click event listener for btn-home
    btnHome.addEventListener('click', function () {
        window.location.href = 'parent-home.html';
    });

    // Click event listener for btn-locator
    btnLocator.addEventListener('click', function () {
        window.location.href = 'locator.html';
    });

    // Click event listener for btn-sched
    btnSched.addEventListener('click', function () {
        window.location.href = 'schedule.html';
    });

    btnMenu.addEventListener('click', function () {
        // Create and append the menu popup to the left
        createPopup('parent-menu.html', 'menuClosed', 'left', { width: '50%' });
    });

    btnNotif.addEventListener('click', function () {
        // Create and append the notification popup at the top center with adjusted size
        createPopup('parent-notifications.html', 'notificationClosed', 'top-center', { width: '70%', height: '70%' });
    });

    // You can add more event handlers for different events
    // ...
});
