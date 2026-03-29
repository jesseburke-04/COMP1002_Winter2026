// Assignment Three - Buggy Starter Code
// Fix the bugs so all four features work correctly.

let helloBtn = document.querySelector("#helloBtn");
let greetingOutput = document.querySelector("#greetingOutput");

//Problem:1. The line is using the wrong variable name for the ID selector (themeBtn).
let themeBtn = document.querySelector("#themeBtn");

let messageInput = document.querySelector("#messageInput");
let liveOutput = document.querySelector("#liveOutput");

let welcomeForm = document.querySelector("#welcomeForm");
let nameInput = document.querySelector("#nameInput");
let formOutput = document.querySelector("#formOutput");

// 1. Greeting Button
helloBtn.addEventListener("click", function() {
    greetingOutput.textContent = "Hello, student!";
});

// 2. Theme Toggle
themeBtn.addEventListener("click", function() {
    //Problem: 2. This line is using the wrong class name provided by CSS (missing the hyphen).
    document.body.classList.toggle("dark-mode");
});

// 3. Live Input
//Problem: 3. This line is using the wrong event name(input).
messageInput.addEventListener("input", function() {
    //Problem: 3.5 This line had a miss spelling in the variable name (messageInput).
    liveOutput.textContent = messageInput.value;
});

// 4. Welcome Form
welcomeForm.addEventListener("submit", function(event) {
    //Problem: 4. This line does not declare the event parameter, which makes it the wbepage reload.
    event.preventDefault();
    formOutput.textContent = "Welcome, " + nameInput.value;
});