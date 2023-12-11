document.addEventListener('DOMContentLoaded', function () {
    var btnBack = document.getElementById('btn-back');
    var btnGeofence = document.getElementById('btn-geofence');
    var btnScreen = document.getElementById('btn-screen');
    var btnOnline = document.getElementById('btn-online');
    var btnSocial = document.getElementById('btn-social');

    // Click event listener for btn-sms
    btnBack.addEventListener('click', function () {
        window.location.href = 'parent-menu.html';
    });

    // Click event listener for btn-content
    btnGeofence.addEventListener('click', function () {
        window.location.href = 'geofence.html';
    });

    // Click event listener for btn-home
    btnScreen.addEventListener('click', function () {
        window.location.href = 'screen-time.html';
    });

    btnOnline.addEventListener('click', function () {
        window.location.href = 'online-activities.html';
    });

    // Click event listener for btn-locator
    btnSocial.addEventListener('click', function () {
        window.location.href = 'social-media-activities.html';
    });

    


});
