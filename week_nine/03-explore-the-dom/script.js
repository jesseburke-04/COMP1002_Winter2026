//1. JavaScript finds the HTML elements - JavaScript searches the DOM tree for the element with id title.
let changeButton = document.getElementById("changeBtn");
let heading = document.getElementById("title"); 

//2. JavaScript listens for an event - When the button is clicked, run this code.

changeButton.addEventListener("click", function() {
    /* 3. JavaScript changes the DOM - JavaScript didn’t edit the HTML file.
    It changed the DOM representation in the browser.*/
    heading.textContent = "JavaScript changed the page!"; 
}); 

//CHALLENGE  - 
// 1.) create a variable to store your name 

let name = "Jessica" 
let spanName = document.querySelector('span'); 
let greetingButton = document.getElementById('greetingBtn');

// 2.) Change the span text to say your name instead of World when the personalize greeting button is clicked 

greetingBtn.addEventListener("click", function() {
    spanName.textContent = name; 
}); 
