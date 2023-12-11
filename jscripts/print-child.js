document.addEventListener('DOMContentLoaded', function () {
  var btnDownload = document.getElementById('btn-dl');
  var btnPrint = document.getElementById('btn-print');
  var btnClose = document.getElementById('btn-close');

  // Add a click event handler to the "Download" button
  btnDownload.addEventListener('click', function () {
    // Redirect to download-message.html
    window.location.href = 'view-child-dl.html';
  });

  // Add a click event handler to the "Print" button
  btnPrint.addEventListener('click', function () {
    // Redirect to printing.html immediately
    window.location.href = 'view-child-printing.html';

    // Set a timeout to redirect back to parent-menu.html after 3 seconds (adjust as needed)
    setTimeout(function () {
      window.location.href = 'admin-menu.html';
    }, 3000);
  });

  // Add a click event handler to the "Close" button
  btnClose.addEventListener('click', function () {
    // Redirect to admin-menu.html
    window.location.href = 'admin-menu.html';
  });
});
