document.addEventListener('DOMContentLoaded', function () {
    var btnConfirm = document.getElementById('btn-conf');
    var lnkLater = document.getElementById('lnk-later');
    var txtPntEmail = document.getElementById('email');
    var emptyEmailMessage = document.querySelector('.empty-email');

    btnConfirm.addEventListener('click', function () {
        // Check if the email input is empty
        if (email.value.trim() === '') {
            // Display the empty email message
            emptyEmailMessage.style.display = 'block';
        } else {
            // Redirect to add-child.html if the email is not empty
            window.location.href = 'add-child.html';
        }
    });

    lnkLater.addEventListener('click', function () {
        // Redirect to add-child.html
        window.location.href = 'add-child.html';
    });
});
