document.addEventListener("DOMContentLoaded", function () {
    checkLogin();
});

function showRegister() {
    document.getElementById("login-box").style.display = "none";
    document.getElementById("register-box").style.display = "block";
}

function showLogin() {
    document.getElementById("register-box").style.display = "none";
    document.getElementById("login-box").style.display = "block";
}

function register() {
    let username = document.getElementById("register-username").value;
    let password = document.getElementById("register-password").value;

    if (username && password) {
        localStorage.setItem(username, password);
        alert("Registration successful! Please login.");
        showLogin();
    } else {
        alert("Please enter a valid username and password.");
    }
}

function login() {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    if (localStorage.getItem(username) === password) {
        localStorage.setItem("loggedInUser", username);
        checkLogin();
    } else {
        alert("Invalid login credentials.");
    }
}

function checkLogin() {
    let loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
        document.getElementById("login-box").style.display = "none";
        document.getElementById("register-box").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
        document.getElementById("user-name").innerText = loggedInUser;
    }
}

function logout() {
    localStorage.removeItem("loggedInUser");
    location.reload();
} 