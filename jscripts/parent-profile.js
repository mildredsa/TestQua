document.addEventListener('DOMContentLoaded', function () {
    var btnClose = document.getElementById('close');
    var changeEmailLink = document.querySelector('.change-phone-PeD');
    var displayEmail = document.querySelector('.email-GpV');
    var editableEmail = document.getElementById('editableEmail');
    var changePhoneLink = document.querySelector('.change-phone-X89');
    var displayPhone = document.querySelector('.phone-aTo');
    var editablePhone = document.getElementById('editablePhone');
    var nameElement = document.querySelector('.name-jTB');
    var editableName = document.getElementById('editableName');
    var changeDOBDiv = document.querySelector('.change-dob');
    var displayDOBDiv = document.querySelector('.display-dob');
    var editableDOBInput = document.getElementById('editableDOB');
    var saveButton = document.querySelector('.btn-signup-NHs');

    btnClose.addEventListener('click', function () {
        window.location.href = 'parent-menu.html';
    }); 

    // Function to toggle the visibility of elements
    function toggleVisibility(displayElement, editableElement, changeLink) {
        displayElement.style.display = 'none';
        editableElement.style.display = 'inline-block';
        changeLink.style.display = 'none';
    }

    // Add a click event listener to the "Change" link for email
    changeEmailLink.addEventListener('click', function () {
        toggleVisibility(displayEmail, editableEmail, changeEmailLink);
        editableEmail.value = displayEmail.textContent.trim();
    });

    // Add a click event listener to the "Change" link for phone
    changePhoneLink.addEventListener('click', function () {
        toggleVisibility(displayPhone, editablePhone, changePhoneLink);
        editablePhone.value = displayPhone.textContent.trim();
    });

    // Add a click event listener to the "Change" link for name
    nameElement.addEventListener('click', function () {
        toggleVisibility(nameElement, editableName, nameElement);
        editableName.value = nameElement.textContent.trim();
    });

    // Add a click event listener to the "Change" link for DOB
    changeDOBDiv.addEventListener('click', function () {
        toggleVisibility(displayDOBDiv, editableDOBInput, changeDOBDiv);
        editableDOBInput.valueAsDate = new Date(displayDOBDiv.dataset.date);
    });

    // Add a click event listener to the "Save" button
    saveButton.addEventListener('click', function () {
        // Apply the changes and toggle the visibility
        displayEmail.textContent = editableEmail.value;
        toggleVisibility(editableEmail, displayEmail, changeEmailLink);

        displayPhone.textContent = editablePhone.value;
        toggleVisibility(editablePhone, displayPhone, changePhoneLink);

        nameElement.textContent = editableName.value;
        toggleVisibility(editableName, nameElement);

        displayDOBDiv.textContent = formatDate(editableDOBInput.valueAsDate);
        toggleVisibility(editableDOBInput, displayDOBDiv, changeDOBDiv);
    });

    // Function to format date as "Month day, Year"
    function formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }
});
