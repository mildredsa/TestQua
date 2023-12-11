document.addEventListener('DOMContentLoaded', function() {
    var reportsElement = document.querySelector('.reports-shX');
    var subMenuElement = document.querySelector('.sub-menu');
  
    reportsElement.addEventListener('click', function() {
      subMenuElement.classList.toggle('visible');
    });
  });
  