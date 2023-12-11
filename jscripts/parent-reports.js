document.addEventListener('DOMContentLoaded', function () {
    var btnBack = document.getElementById('btn-back');
    var btnApp = document.getElementById('btn-app');
    var btnSocial = document.getElementById('btn-soc');
    var btnLocation = document.getElementById('btn-loc');
    var btnPrint = document.getElementById('btn-print');

    // Click event listener for btn-sms
    btnBack.addEventListener('click', function () {
        window.location.href = 'parent-menu.html';
    });

    // Click event listener for btn-content
    btnApp.addEventListener('click', function () {
        window.location.href = 'app-and-website-report.html';
    });

    // Click event listener for btn-locator
    btnSocial.addEventListener('click', function () {
        window.location.href = 'social-media-report.html';
    });

    btnLocation.addEventListener('click', function () {
        window.location.href = 'location-report.html';
    });

    btnPrint.addEventListener('click', function () {
        window.location.href = 'parent-print-reports.html';
    });


});