document.addEventListener('DOMContentLoaded', function () {
    // Add an event listener to the close button
    var btnClose = document.getElementById('btn-close');
    var btnDel1 = document.getElementById('btn-del1');
    var btnDel2 = document.getElementById('btn-del2');
  
    btnClose.addEventListener('click', function () {
      window.location.href = 'admin-dashboard.html';
    });
  
    btnDel1.addEventListener('click', function () {
      var notifToHide = document.getElementById('notif1');
      notifToHide.style.display = 'none';
    });
  
    btnDel2.addEventListener('click', function () {
      var notifToHide = document.getElementById('notif2');
      notifToHide.style.display = 'none';
    });
  });
  