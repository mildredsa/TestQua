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
        window.location.href = 'admin-menu.html';
    });

    btnNotif.addEventListener('click', function () {
        window.location.href = 'admin-notifications.html';
    });



});
