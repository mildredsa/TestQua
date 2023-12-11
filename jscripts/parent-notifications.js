document.addEventListener('DOMContentLoaded', function () {
    var btnClose = document.getElementById('btn-close');
    var btnBlock = document.getElementById('btn-block');
    var btnView = document.getElementById('btn-view');
    var btnDel1 = document.getElementById('btn-del1');
    var btnDel2 = document.getElementById('btn-del2');
    var btnDel3 = document.getElementById('btn-del3');

    btnClose.addEventListener('click', function () {
        window.location.href = 'parent-home.html';
    });

    btnBlock.addEventListener('click', function () {
        
    });

    btnView.addEventListener('click', function () {
        window.location.href = 'facebook-post.html';
    });

    btnDel1.addEventListener('click', function () {
    var notifToHide = document.getElementById('notif1');
        notifToHide.style.display = 'none';
    });

    btnDel2.addEventListener('click', function () {
    var notifToHide = document.getElementById('notif2');
        notifToHide.style.display = 'none';
    });

    btnDel3.addEventListener('click', function () {
    var notifToHide = document.getElementById('notif3');
        notifToHide.style.display = 'none';
    });
});
