document.addEventListener("DOMContentLoaded", function () {
    var caretLeft = document.querySelector(".caret-left");
    var lnkForgot = document.querySelector(".lnk-forgot");
    var btnLog = document.querySelector(".btn-log");

    function checkLogin() {
        var emailInput = document.getElementById("email").value.trim();
        var passInput = document.getElementById("password").value.trim();
        var emailError = document.querySelector(".empty-email");
        var passError = document.querySelector(".empty-pass");
        var incEmailError = document.querySelector(".inc-email");
        var incPassError = document.querySelector(".inc-pass");

        // Check if the email input has a value
        if (emailInput !== "") {
            // Check if there is a unique match for the email in the adminData array
            var matchingUsers = adminData.filter(function (value) {
                return value.email === emailInput;
            });

            if (matchingUsers.length !== 1) {
                // Display invalid email error message
                emailError.style.display = "none";
                incEmailError.style.display = "block"; // Show incorrect email message
            } else {
                emailError.style.display = "none";
                incEmailError.style.display = "none"; // Hide incorrect email message
            }
        } else {
            emailError.style.display = "block"; // Show empty email error message
            incEmailError.style.display = "none"; // Hide incorrect email message
        }

        // Check if the password input has a value
        if (passInput !== "") {
            // Check if there is a unique match for the password in the adminData array
            var matchingUsers = adminData.filter(function (value) {
                return value.pass === passInput;
            });

            if (matchingUsers.length !== 1) {
                // Display invalid password error message
                passError.style.display = "none";
                incPassError.style.display = "block"; // Show incorrect password message
            } else {
                passError.style.display = "none";
                incPassError.style.display = "none"; // Hide incorrect password message
            }
        } else {
            passError.style.display = "block"; // Show empty password error message
            incPassError.style.display = "none"; // Hide incorrect password message
        }

        // Redirect to admin-dashboard.html on successful login
        if (emailInput !== "" && passInput !== "" && incEmailError.style.display === "none" && incPassError.style.display === "none") {
            window.location.href = "admin-dashboard.html";
        }
    }

    function checkEmptyInputs() {
        var emailInput = document.getElementById("email");
        var passInput = document.getElementById("password");
        var emailError = document.querySelector(".empty-email");
        var passError = document.querySelector(".empty-pass");

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

    caretLeft.addEventListener("click", function () {
        window.location.href = "user-selection.html";
    });

    lnkForgot.addEventListener("click", function () {
        window.location.href = "admin-forgot-password.html";
    });

    btnLog.addEventListener("click", function () {
        checkEmptyInputs();
        checkLogin();
    });
});
