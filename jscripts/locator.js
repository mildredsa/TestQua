document.addEventListener('DOMContentLoaded', function () {
    var btnSms = document.getElementById('btn-sms');
    var btnContent = document.getElementById('btn-content');
    var btnHome = document.getElementById('btn-home');
    var btnLocator = document.getElementById('btn-locator');
    var btnSched = document.getElementById('btn-sched');
    var btnCall = document.getElementById('btn-call');
    var btnVCall = document.getElementById('btn-vcall');
    var btnChat = document.getElementById('btn-chat');
    var childActivity = document.getElementById("child-activity");

    // Click event listener for btn-sms
    btnSms.addEventListener('click', function () {
        window.location.href = 'social-media.html';
    });

    // Click event listener for btn-content
    btnContent.addEventListener('click', function () {
        window.location.href = 'content.html';
    });

    // Click event listener for btn-home
    btnHome.addEventListener('click', function () {
        window.location.href = 'parent-home.html';
    });

    // Click event listener for btn-locator
    btnLocator.addEventListener('click', function () {
        window.location.href = 'locator.html';
    });

    // Click event listener for btn-sched
    btnSched.addEventListener('click', function () {
        window.location.href = 'schedule.html';
    });

    btnCall.addEventListener('click', function () {
        window.location.href = 'calling-child.html';
    });

    btnVCall.addEventListener('click', function () {
        window.location.href = 'video-calling.html';
    });

    btnChat.addEventListener('click', function () {
        window.location.href = 'chat-child.html';
    });

    // Click event listener for child-activity
    childActivity.addEventListener("click", function () {
        window.location.href = "child-activity.html";
    });

});


function toggleTopSlider() {
    var divToToggle = document.getElementById('top');
    var overlay = document.getElementById('overlay');

    // Check the current state of the top slider
    var isHidden = divToToggle.style.top === '-499px';

    if (isHidden) {
        // Show the top slider
        divToToggle.style.position = 'absolute';
        divToToggle.style.top = '0';

        // Make the overlay semi-transparent (adjust alpha value as needed)
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
        // Hide the top slider
        divToToggle.style.position = 'absolute';
        divToToggle.style.top = '-499px';

        // Make the overlay transparent
        overlay.style.display = 'none';
    }
}

function toggleBottomSlider() {
    var divToToggle = document.getElementById('bottom');

    // Check the current state of the bottom slider
    var isHidden = divToToggle.style.top === '-88px';

    if (isHidden) {
        // Show the bottom slider
        divToToggle.style.position = 'absolute';
        divToToggle.style.top = '0';
    } else {
        // Hide the bottom slider
        divToToggle.style.position = 'absolute';
        divToToggle.style.top = '-88px';
    }
}


