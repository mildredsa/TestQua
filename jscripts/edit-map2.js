document.addEventListener('DOMContentLoaded', function () {
    var btnBack = document.getElementById('btn-back');
    var btnEdit = document.getElementById('btn-edit');
    var nameElement = document.getElementById('nameElement'); // Use the updated ID
    var editableName = document.getElementById('editableName');
    var saveButton = document.getElementById('btn-save');

    // Click event listener for btn-sms
    btnBack.addEventListener('click', function () {
        window.location.href = 'geofence.html';
    });

    btnEdit.addEventListener('click', function () {
        window.location.href = 'edit-map-boundaries.html';
    });

    // Add a click event listener to the "Change" link for name
    nameElement.addEventListener('click', function () {
        editableName.value = nameElement.textContent.trim();
        nameElement.classList.add('hidden');
        editableName.classList.remove('hidden');
    });

    // Add a click event listener to the "Save" button
    saveButton.addEventListener('click', function () {
        nameElement.textContent = editableName.value;
        nameElement.classList.remove('hidden');
        editableName.classList.add('hidden');
    });
});
