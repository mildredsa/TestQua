import { inputValues } from './data.js';

document.addEventListener("DOMContentLoaded", function () {
    var caretLeft = document.getElementById("caret-left");
    var btnLog = document.getElementById("btn-log");

    caretLeft.addEventListener("click", function () {
        window.location.href = "user-selection.html";
    });

    function checkLogin() {
        var emailInput = document.getElementById("email").value.trim();
        var passInput = document.getElementById("pass").value.trim();
        var emailError = document.querySelector(".email-error .inc-email");
        var passError = document.querySelector(".pass-error .inc-pass");

        // Check if there is a match in the inputValues array
        var isValid = inputValues.some(function (value) {
        return value.email === emailInput && value.password === passInput;
        });

        if (isValid) {
        // Redirect to parent-home.html on successful login
        window.location.href = "parent-home.html";
        } else {
        // Display invalid login error messages
        emailError.style.display = "block";
        passError.style.display = "block";
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

    
    btnLog.addEventListener("click", function () {
        checkEmptyInputs();
        checkLogin();
    });
});
