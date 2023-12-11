document.addEventListener('DOMContentLoaded', function () {
    var btnBack = document.getElementById('btn-back');
    var btnDel1 = document.getElementById('btn-del-1');
    var btnDel2 = document.getElementById('btn-del-2');

    // Click event listener for btn-sms
    btnBack.addEventListener('click', function () {
        window.location.href = 'parent-controls.html';
    });

    btnDel1.addEventListener('click', function () {
        var mapToHide = document.getElementById('map1');
        mapToHide.style.display = 'none';
    });

    btnDel2.addEventListener('click', function () {
        var mapToHide = document.getElementById('map2');
        mapToHide.style.display = 'none';
    });

    btnAdd.addEventListener('click', function () {
        window.location.href = '.html';
    });


});