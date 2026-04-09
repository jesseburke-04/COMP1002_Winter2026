// ==============================
// SELECTING ELEMENTS
// ==============================

// Buttons
let anonBtn = document.querySelector("#anonBtn"); 
let namedBtn = document.querySelector("#namedBtn"); 

// Hover box
let hoverBox = document.querySelector("#hoverBox");

// Input elements
let textInput = document.querySelector("#textInput"); 
let outputText = document.querySelector("#outputText"); 

// Form elements
let demoForm = document.querySelector("#demoForm"); 
let nameInput = document.querySelector("#nameInput"); 
let formOutput = document.querySelector("#formOutput");



// ==============================
// 1. ANONYMOUS FUNCTION EXAMPLE
// ==============================

// This function has NO name and is written directly inside addEventListener

anonBtn.addEventListener("click", function() {
    alert("Anonymous function button clicked!"); 
}); 

// ==============================
// 2. NAMED FUNCTION EXAMPLE
// ==============================

// This function is defined separately and given a name

function handleButtonClick() {
    alert("Named function button clicked!"); 
}

namedBtn.addEventListener("click", handleButtonClick); 


// ==============================
// 3. MULTIPLE EVENTS ON ONE ELEMENT
// ==============================

// Mouse enters the box
hoverBox.addEventListener("mouseover", function() {
    hoverBox.style.backgroundColor = "lightblue"; 
    hoverBox.textContent = "Mouse is over me!"; 
}); 

// Mouse leaves the box

hoverBox.addEventListener("mouseout", function() {
    hoverBox.style.backgroundColor = "#BADA55"; 
    hoverBox.textContent = "Hover OUT!!"; 
}); 


// ==============================
// 4. INPUT EVENT (LIVE UPDATES)
// ==============================

// The "input" event fires every time the user types
textInput.addEventListener("input", function() {
    outputText.textContent = textInput.value; 
}); 


// ==============================
// 5. FORM + EVENT OBJECT
// ==============================

demoForm.addEventListener("submit", function(event) {
    //prevents the default form behaviour - page refresh
    event.preventDefault(); 
    //get the value from the input filed 
    let userName = nameInput.value; 
    //update the page with a custom message 
    formOutput.textContent = "Welcome, " + userName + "!"; 

}); 



