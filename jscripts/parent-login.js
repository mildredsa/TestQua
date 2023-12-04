document.addEventListener("DOMContentLoaded", function () {
    var caretLeft = document.getElementById("caret-left");
    var lnkForgot = document.getElementById("lnk-forgot");
    var btnLog = document.getElementById("btn-log");

    function checkLogin() {
        var emailInput = document.getElementById("email").value.trim();
        var passInput = document.getElementById("pass").value.trim();
        var emailError = document.querySelector(".email-error .inc-email");
        var passError = document.querySelector(".pass-error .inc-pass");

        // Check if the email input has a value
        if (emailInput !== "") {
            // Check if there is a unique match for the email in the userData array
            var matchingUsers = userData.filter(function (value) {
                return value.email === emailInput;
            });

            if (matchingUsers.length !== 1) {
                // Display invalid email error message
                emailError.style.display = "block";
            } else {
                emailError.style.display = "none";
            }
        }

        // Check if the password input has a value
        if (passInput !== "") {
            // Check if there is a unique match for the password in the userData array
            var matchingUsers = userData.filter(function (value) {
                return value.pass === passInput;
            });

            if (matchingUsers.length !== 1) {
                // Display invalid password error message
                passError.style.display = "block";
            } else {
                passError.style.display = "none";
            }
        }

        // Redirect to parent-home.html on successful login (if both email and password are valid)
        if (emailInput !== "" && passInput !== "" && emailError.style.display === "none" && passError.style.display === "none") {
            window.location.href = "add-co-parent.html";
        }
    }

    function checkEmptyInputs() {
        var emailInput = document.getElementById("email");
        var passInput = document.getElementById("pass");
        var emailError = document.querySelector(".email-error .emp-email");
        var passError = document.querySelector(".pass-error .emp-pass");

        // Check if email input is empty
        if (emailInput.value.trim() === "") {
            emailError.style.display = "block";
        } else {
            emailError.style.display = "none";
        }

        // Check if password input is empty
        if (passInput.value.trim() === "") {
            passError.style.display = "block";
        } else {
            passError.style.display = "none";
        }
    }

    var userData = window.userData || [];

    caretLeft.addEventListener("click", function () {
        window.location.href = "user-selection.html";
    });

    lnkForgot.addEventListener("click", function () {
        window.location.href = "parent-forgot-password.html";
    });

    btnLog.addEventListener("click", function () {
        checkEmptyInputs();
        checkLogin();
    });
});
