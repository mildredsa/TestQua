document.addEventListener('DOMContentLoaded', function () {
    var caretLeft = document.getElementById('caret-left');
    var btnConfirm = document.getElementById('btn-code');
    var codeInput = document.getElementById('code');
    var emptyCodeMessage = document.querySelector('.empty-code');
    var incorrectCodeMessage = document.querySelector('.inc-code');

    function checkCode() {
        // Check if the code input is empty
        if (codeInput.value.trim() === '') {
            // Display the empty code message
            emptyCodeMessage.style.display = 'block';
            incorrectCodeMessage.style.display = 'none'; // Hide incorrect code message
        } else if (verCode.includes(codeInput.value.trim())) {
            // Code is correct, redirect to parent-login.html
            window.location.href = 'admin-reset-password.html';
            emptyCodeMessage.style.display = 'none'; // Hide empty code message
            incorrectCodeMessage.style.display = 'none'; // Hide incorrect code message
        } else {
            // Code is incorrect, display the incorrect code message
            incorrectCodeMessage.style.display = 'block';
            emptyCodeMessage.style.display = 'none'; // Hide empty code message
        }
    }

    caretLeft.addEventListener('click', function () {
        window.location.href = 'admin-login.html';
    });

    btnConfirm.addEventListener('click', function () {
        // Check verification code
        checkCode();
    });
});
