document.addEventListener('DOMContentLoaded', function () {
    // This ensures that the DOM is fully loaded before the script runs
  
    // Get references to the "Sign Up," "Login," and "Admin" link
    var caretLeft = document.getElementById('caret-left');
    var btnParent = document.getElementById('btn-par');
    var btnChild = document.getElementById('btn-chl');
  
    // Add a click event handler to the "Sign Up" button
    caretLeft.addEventListener('click', function () {
      // Redirect to parent-sign-up.html
      window.location.href = 'sign-up-log-in.html';
    });
  
    // Add a click event handler to the "Login" button
    btnParent.addEventListener('click', function () {
      // Redirect to user.selection.html
      window.location.href = 'parent-login.html';
    });
  
    // Add a click event handler to the "Admin" link
    btnChild.addEventListener('click', function () {
      // Redirect to admin-login.html
      window.location.href = 'child-login.html';
    });
  
    // You can add more event handlers for different events
    // ...
  
  });
  