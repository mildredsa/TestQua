document.addEventListener('DOMContentLoaded', function () {
    // Add an event listener to the caret-left button
    var caretLeft = document.querySelector('.admin-menu .caret-left');
    var btnParent = document.getElementById('btn-par');
    var btnChild = document.getElementById('btn-chl');
    var btnLogout = document.getElementById('btn-log');

    if (caretLeft) {
        caretLeft.addEventListener('click', function () {
            // Post a message to the parent window indicating that the menu is closed
            window.parent.postMessage({ type: 'menuClosed' }, '*');
        });
    }

    btnParent.addEventListener('click', function () {
        window.location.href = 'print-parent-list.html';
    });

    btnChild.addEventListener('click', function () {
        window.location.href = 'print-child-list.html';
    });

    btnLogout.addEventListener('click', function () {
        window.location.replace('admin-login.html'); // Replace the current page with the admin login page
    });

});
