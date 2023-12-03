document.addEventListener('DOMContentLoaded', function () {
    // This ensures that the DOM is fully loaded before the script runs
  
    // Get references to the "Sign Up," "Login," and "Admin" link
    var btnNext = document.getElementById('btn-next');
  
    // Add a click event handler to the "Sign Up" button
    btnNext.addEventListener('click', function () {
      // Redirect to parent-sign-up.html
      window.location.href = 'parent-login.html';
    });
  
  
    // You can add more event handlers for different events
    // ...
  
  });