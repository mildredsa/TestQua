document.addEventListener('DOMContentLoaded', function () {
    var btnBack = document.getElementById('btn-back');
    var btnAdd = document.getElementById('btn-add');
    var btnMenu = document.getElementById('btn-menu');
    var dropdownMenu = document.getElementById('dropdown-menu');
    var deleteOption = document.getElementById('delete-option');
    var logoutOption = document.getElementById('logout-option');
    var editOption = document.getElementById('edit-option');
  
    btnBack.addEventListener('click', function () {
      window.location.href = 'parent-menu.html';
    });
  
    btnAdd.addEventListener('click', function () {
      window.location.href = 'add-child.html';
    });
  
    btnMenu.addEventListener('click', function () {
      // Toggle the visibility of the dropdown menu
      dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
    });
  
    // Handle actions for the dropdown options
    deleteOption.addEventListener('click', function () {
      var notifToHide = document.getElementById('child1');
      notifToHide.style.display = 'none';
    });
  
    logoutOption.addEventListener('click', function () {
      // Add your logout logic here
      alert('Logout option clicked');
    });
  
    editOption.addEventListener('click', function () {
        window.location.href = 'child-details-2.html';
    });
  
    // Close the dropdown menu if the user clicks outside of it
    document.addEventListener('click', function (event) {
      if (!event.target.matches('#btn-menu')) {
        dropdownMenu.style.display = 'none';
      }
    });
  });
  