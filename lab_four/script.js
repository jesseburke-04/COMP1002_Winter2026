//Lab Four Challenge
//Submit Button: Find ID then wait until submit is triggered.
document.getElementById("welcomeForm").addEventListener("submit", function(event) {
    //make sure the page doesn't refresh
    event.preventDefault();
    //use a variable to store users input
    let name = document.getElementById("nameInput").value;
    //change the text and call the users input
    document.getElementById("welcomeMessage").textContent = "Welcome, " + name + "!";
  });

//Theme Button: Find ID then wait until click is triggered.
document.getElementById("themeButton").addEventListener("click", function() {
    //finds the dark-mode class and toggles it on or off
    document.body.classList.toggle("dark-mode");
    //using an if statement to change the appearence from the button
    if (document.body.classList.contains("dark-mode")) {
        this.textContent = "Toggle Light Mode";
    }else {
        this.textContent = "Toggle Dark Mode";
    }
});



