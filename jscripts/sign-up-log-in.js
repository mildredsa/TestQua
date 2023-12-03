document.addEventListener('DOMContentLoaded', function () {
    // This ensures that the DOM is fully loaded before the script runs
  
    // Get references to the "Sign Up," "Login," and "Admin" link
    var btnSignUp = document.getElementById('btn-sign');
    var btnLogIn = document.getElementById('btn-log');
    var lnkAdmin = document.getElementById('lnk-ad');
  
    // Add a click event handler to the "Sign Up" button
    btnSignUp.addEventListener('click', function () {
      // Redirect to parent-sign-up.html
      window.location.href = 'parent-sign-up.html';
    });
  
    // Add a click event handler to the "Login" button
    btnLogIn.addEventListener('click', function () {
      // Redirect to user.selection.html
      window.location.href = 'user-selection.html';
    });
  
    // Add a click event handler to the "Admin" link
    lnkAdmin.addEventListener('click', function () {
      // Redirect to admin-login.html
      window.location.href = 'admin-login.html';
    });
  
    // You can add more event handlers for different events
    // ...
  
  });
  