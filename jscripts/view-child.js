document.addEventListener('DOMContentLoaded', function () {
    // This ensures that the DOM is fully loaded before the script runs
    var caretLeft = document.getElementById('caret-left');

  
    // Add a click event handler to the "Sign Up" button
    caretLeft.addEventListener('click', function () {
      // Redirect to parent-sign-up.html
      window.location.href = 'admin-dashboard.html';
    });
  

  
  });
  