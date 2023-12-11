document.addEventListener('DOMContentLoaded', function () {
    var btnBack = document.getElementById('btn-back');
    var btnEdit1 = document.getElementById('btn-edit-1');
    var btnDel1 = document.getElementById('btn-del-1');
    var btnEdit2 = document.getElementById('btn-edit-2');
    var btnDel2 = document.getElementById('btn-del-2');
    var btnAdd = document.getElementById('btn-add');

    // Click event listener for btn-sms
    btnBack.addEventListener('click', function () {
        window.location.href = 'parent-controls.html';
    });

    btnEdit1.addEventListener('click', function () {
        window.location.href = 'edit-map1.html';
    });

    btnDel1.addEventListener('click', function () {
        var mapToHide = document.getElementById('map1');
        var details = document.getElementById('map1-details');

        mapToHide.style.display = 'none';
        details.style.display = 'none';
    });

    btnEdit2.addEventListener('click', function () {
        window.location.href = 'edit-map2.html';
    });

    btnDel2.addEventListener('click', function () {
        var mapToHide = document.getElementById('map2');
        var details = document.getElementById('map2-details');

        mapToHide.style.display = 'none';
        details.style.display = 'none';
    });

    btnAdd.addEventListener('click', function () {
        window.location.href = '.html';
    });


});
