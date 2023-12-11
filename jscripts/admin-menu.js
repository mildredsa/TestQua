document.addEventListener('DOMContentLoaded', function () {
  var btnBack = document.getElementById('btn-back');
  var btnParent = document.getElementById('btn-parent');
  var btnChild = document.getElementById('btn-child');
  var btnLog = document.getElementById('btn-log');

  btnBack.addEventListener('click', function () {
      window.location.href = 'admin-dashboard.html';
  });

  btnParent.addEventListener('click', function () {
      window.location.href = 'print-parent.html';
  });

  // Event listener for Profile button
  btnChild.addEventListener('click', function () {
      window.location.href = 'print-child.html';
  });

  // Event listener for Children button
  btnLog.addEventListener('click', function () {
      window.location.href = 'admin-logout.html';
  });

});
