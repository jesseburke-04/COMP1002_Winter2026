// ==============================
// SELECT ELEMENTS
// ==============================

let eventBtn = document.querySelector("#eventBtn"); 
let eventType = document.querySelector("#eventType"); 
let eventTarget = document.querySelector("#eventTarget"); 

let menuLink = document.querySelector("#menuLink"); 
let dropdownMenu = document.querySelector("#dropdownMenu"); 

// ==============================
// 1. WORKING WITH THE EVENT OBJECT
// ==============================


eventBtn.addEventListener("click", function(event) {
    //event.type tells us what kind of event happened 
    eventType.textContent = event.type; 

    //event.target tells us which element triggered the event 
    //textContent will show the text inside the clicked element 
    eventTarget.textContent = event.target.textContent; 

    console.log(event); 
    console.log("Event type", event.type); 
    console.log("Event target", event.target); 

}); 

// ==============================
// 2. USING preventDefault()
// ==============================

menuLink.addEventListener("click", function(event) {
    //prevent the default behaviour 
    event.preventDefault(); 
    //show or hide the dropdown menu instead of leaving the page 
    dropdownMenu.classList.toggle("hidden"); 
}); 