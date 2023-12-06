document.addEventListener("DOMContentLoaded", function () {
    var btnSms = document.getElementById("btn-sms");
    var btnContent = document.getElementById("btn-content");
    var btnHome = document.getElementById("btn-home");
    var btnLocator = document.getElementById("btn-locator");
    var btnSched = document.getElementById("btn-sched");
    var btnCall = document.getElementById("btn-call");
    var btnVCall = document.getElementById("btn-vcall");
    var btnChat = document.getElementById("btn-chat");
    var childActivity = document.getElementById("child-activity");

    // Click event listener for btn-sms
    btnSms.addEventListener("click", function () {
        window.location.href = "social-media.html";
    });

    // Click event listener for btn-content
    btnContent.addEventListener("click", function () {
        window.location.href = "content.html";
    });

    // Click event listener for btn-home
    btnHome.addEventListener("click", function () {
        window.location.href = "parent-home.html";
    });

    // Click event listener for btn-locator
    btnLocator.addEventListener("click", function () {
        window.location.href = "locator.html";
    });

    // Click event listener for btn-sched
    btnSched.addEventListener("click", function () {
        window.location.href = "schedule.html";
    });

     // Click event listener for btn-call
     btnCall.addEventListener("click", function () {
        window.location.href = "calling-child.html";
    });

    // Click event listener for btn-vcall
    btnVCall.addEventListener("click", function () {
        window.location.href = "video-calling.html";
    });

    // Click event listener for btn-chat
    btnChat.addEventListener("click", function () {
        window.location.href = "chat-child.html";
    });

    // Click event listener for child-activity
    childActivity.addEventListener("click", function () {
        window.location.href = "child-activity.html";
    });
});