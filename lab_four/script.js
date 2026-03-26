document.getElementById("welcomeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("nameInput").value;
    document.getElementById("welcomeMessage").textContent = "Welcome, " + name + "!";
});