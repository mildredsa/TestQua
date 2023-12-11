document.addEventListener('DOMContentLoaded', function () {
    // This ensures that the DOM is fully loaded before the script runs
    var btnClose = document.getElementById('btn-close');

  
    // Add a click event handler to the "Sign Up" button
    btnClose.addEventListener('click', function () {
      // Redirect to parent-sign-up.html
      window.location.href = 'parent-print-reports.html';
    });
  

  
  });
  