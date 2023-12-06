document.addEventListener('DOMContentLoaded', function () {
    var btnProf = document.getElementById('btn-prof');
    var btnChild = document.getElementById('btn-child');
    var btnControl = document.getElementById('btn-control');
    var btnReports = document.getElementById('btn-reports');
    var btnLogout = document.getElementById('btn-logout');

    // Event listener for Profile button
    btnProf.addEventListener('click', function () {
        window.location.href = 'parent-profile.html';
    });

    // Event listener for Children button
    btnChild.addEventListener('click', function () {
        window.location.href = 'child-list.html';
    });

    // Event listener for Parental Controls button
    btnControl.addEventListener('click', function () {
        window.location.href = 'parent-controls.html';
    });

    // Event listener for Reports button
    btnReports.addEventListener('click', function () {
        window.location.href = 'parent-print-activities.html';
    });

    // Event listener for Logout button
    btnLogout.addEventListener('click', function () {
        window.location.href = 'parent-logout.html';
    });

    // You can add more event listeners for different buttons
    // ...
});
