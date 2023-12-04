document.addEventListener('DOMContentLoaded', function () {
    var caretLeft = document.querySelector('.caret-left'); // corrected the selector
    var btnDone = document.querySelector('.btn-done'); // corrected the selector
    var txtName = document.getElementById('cname');
    var txtBday = document.getElementById('bday');
    var emptyNameMessage = document.querySelector('.empty-name');
    var emptyBdayMessage = document.querySelector('.empty-bday');

    caretLeft.addEventListener('click', function () {
        window.location.href = 'child-list.html';
    });

    btnDone.addEventListener('click', function () {
        // Check if the name input is empty
        if (txtName.value.trim() === '') {
            // Display the empty name message
            emptyNameMessage.style.display = 'block';
        } else {
            // Hide the empty name message if it was previously shown
            emptyNameMessage.style.display = 'none';
        }

        // Check if the birthday input is empty
        if (txtBday.value.trim() === '') {
            // Display the empty birthday message
            emptyBdayMessage.style.display = 'block';
        } else {
            // Hide the empty birthday message if it was previously shown
            emptyBdayMessage.style.display = 'none';
        }

        // Redirect to add-child.html only if both inputs are not empty
        if (txtName.value.trim() !== '' && txtBday.value.trim() !== '') {
            window.location.href = 'child-list.html'; //add success message
        }
    });
});
