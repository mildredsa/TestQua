document.addEventListener('DOMContentLoaded', function () {
    var btnProf = document.getElementById('btn-prof');
    var btnChild = document.getElementById('btn-child');
    var btnControl = document.getElementById('btn-control');
    var btnReports = document.getElementById('btn-reports');
    var btnLogout = document.getElementById('btn-logout');
    var btnBack = document.getElementById('btn-back');

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
        window.location.href = 'parent-reports.html';
    });

    // Event listener for Logout button
    btnLogout.addEventListener('click', function () {
        window.location.href = 'parent-logout.html';
    });

    btnBack.addEventListener('click', function () {
        window.location.href = 'parent-home.html';
    });

});
