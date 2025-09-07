// ------------------ LOGIN VALIDATION ------------------
function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example credentials check
    const validUsername = "spartans";
    const validPassword = "Spartans@123";

    if (username === validUsername && password === validPassword) {
        window.location.href = "dashboard.html";
        return false; // Prevent form submission
    } else {
        alert("Invalid username or password");
        return false; // Prevent form submission
    }
}

// ------------------ THEME TOGGLE ------------------
let btn = document.querySelector("#themeButton");
let ctn = document.querySelector(".container");
let headings = document.querySelectorAll(".form-intro h1, .form-intro p");

btn.addEventListener("click", () => {
    ctn.classList.toggle("dark-container");
    document.body.classList.toggle("dark-mode");

    if (ctn.classList.contains("dark-container")) {
        btn.textContent = "Light";
        headings.forEach(el => el.style.color = "#fff"); // White in dark mode
    } else {
        btn.textContent = "Dark";
        headings.forEach(el => el.style.color = "#000"); // Black in light mode
    }

    console.log("Theme toggled");
});
