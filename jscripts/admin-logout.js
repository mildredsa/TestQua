document.addEventListener('DOMContentLoaded', function () {
    var btnLogout = document.getElementById('btn-log');
    var btnCancel = document.getElementById('btn-cancel');

    // Click event listener for btn-sms
    btnLogout.addEventListener('click', function () {
        window.location.href = 'parent-login.html';
    });

    btnCancel.addEventListener('click', function () {
        window.location.href = 'parent-home.html';
    });


});
