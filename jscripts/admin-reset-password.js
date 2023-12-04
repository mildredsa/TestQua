document.addEventListener('DOMContentLoaded', function () {
    var caretLeft = document.getElementById('caret-left');
    var btnSave = document.getElementById('btn-save');
    var passInput = document.getElementById('pass');
    var emptyPassMessage = document.querySelector('.empty-pass');

    function checkPassword() {
        // Check if the password input is empty
        if (passInput.value.trim() === '') {
            // Display the empty password message
            emptyPassMessage.style.display = 'block';
        } else {
            // Password is not empty, proceed to parent-login.html
            emptyPassMessage.style.display = 'none';
            window.location.href = 'admin-login.html';
        }
    }

    caretLeft.addEventListener('click', function () {
        // Redirect to parent-sign-up.html
        window.location.href = 'admin-forgot-password.html';
    });

    btnSave.addEventListener('click', function () {
        // Check password and proceed to parent-login.html
        checkPassword();
    });

    // You can add more event handlers for different events
    // ...
});
