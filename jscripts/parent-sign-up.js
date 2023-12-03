document.addEventListener('DOMContentLoaded', function () {
  // This ensures that the DOM is fully loaded before the script runs

  // Get a reference to the "caret-left" image
  var caretLeft = document.getElementById('caret-left');
  var lnkLog = document.getElementById('lnk-log');
  var btnSign = document.getElementById('btn-sign');
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var numInput = document.getElementById('num');
  var passInput = document.getElementById('pass');
  var cpassInput = document.getElementById('cpass');
  var empName = document.querySelector('.emp-name');
  var empEmail = document.querySelector('.emp-email');
  var empNum = document.querySelector('.emp-num');
  var empPass = document.querySelector('.emp-pass');
  var empCpass = document.querySelector('.emp-cpass');
  var notMatch = document.querySelector('.not-match');
  var fillError = document.querySelector('.fill');

  var userData = window.userData || [];

  // Add a click event handler to the "caret-left" image
  caretLeft.addEventListener('click', function () {
    // Redirect to sign-up-log-in.html
    window.location.href = 'sign-up-log-in.html';
  });

  lnkLog.addEventListener('click', function () {
      // Redirect to sign-up-log-in.html
      window.location.href = 'user-selection.html';
  });

  btnSign.addEventListener('click', function () {
    // Check if the name field is empty
    if (nameInput.value.trim() === '') {
      empName.style.display = 'block';
    } else {
      empName.style.display = 'none';
    }

    // Check if the email field is empty
    if (emailInput.value.trim() === '') {
      empEmail.style.display = 'block';
    } else {
      empEmail.style.display = 'none';
    }

    // Check if the phone number field is empty
    if (numInput.value.trim() === '') {
      empNum.style.display = 'block';
    } else {
      empNum.style.display = 'none';
    }

    // Check if the password field is empty
    if (passInput.value.trim() === '') {
      empPass.style.display = 'block';
    } else {
      empPass.style.display = 'none';
    }

    // Check if the confirm password field is empty
    if (cpassInput.value.trim() === '') {
      empCpass.style.display = 'block';
    } else {
      empCpass.style.display = 'none';
    }

    // Check if passwords match
    if (passInput.value.trim() !== cpassInput.value.trim()) {
      notMatch.style.display = 'block';
    } else {
      notMatch.style.display = 'none';

      // Check if all input fields are filled
      if (
        nameInput.value.trim() !== '' &&
        emailInput.value.trim() !== '' &&
        numInput.value.trim() !== '' &&
        passInput.value.trim() !== '' &&
        cpassInput.value.trim() !== ''
      ) {
        fillError.style.display = 'none';

        // Store input values in the array
        userData.push({
          name: nameInput.value.trim(),
          email: emailInput.value.trim(),
          num: numInput.value.trim(),
          pass: passInput.value.trim(),
          cpass: cpassInput.value.trim(),
        });

        // Redirect to successful-sign-up.html
        window.location.href = 'successful-sign-up.html';
      } else {
        fillError.style.display = 'block';
      }
    }
  });

  // Add event listeners for input fields to hide the "fill" error when they have values
  nameInput.addEventListener('input', function () {
    if (nameInput.value.trim() !== '') {
      fillError.style.display = 'none';
    }
  });

  emailInput.addEventListener('input', function () {
    if (emailInput.value.trim() !== '') {
      fillError.style.display = 'none';
    }
  });

  numInput.addEventListener('input', function () {
    if (numInput.value.trim() !== '') {
      fillError.style.display = 'none';
    }
  });

  passInput.addEventListener('input', function () {
    if (passInput.value.trim() !== '') {
      fillError.style.display = 'none';
    }
  });

  cpassInput.addEventListener('input', function () {
    if (cpassInput.value.trim() !== '') {
      fillError.style.display = 'none';
    }
  });
  // You can add more event handlers for different events
  // ...

});
