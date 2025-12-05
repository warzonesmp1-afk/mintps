// Show Login Form
function showLogin() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("signupForm").style.display = "none";
}

// Show Signup Form
function showSignup() {
    document.getElementById("signupForm").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
}

// Generate a random code
function generateCode() {
    const code = Math.random().toString(36).substr(2, 8).toUpperCase();
    document.getElementById("generatedCode").value = code;
}

// Copy code
function copyCode() {
    const codeField = document.getElementById("generatedCode");
    if (!codeField.value) {
        alert("No code to copy!");
        return;
    }
    navigator.clipboard.writeText(codeField.value);
    alert("Code copied!");
}

// Signup function
function signup() {
    const name = document.getElementById("signupName").value.trim();
    const code = document.getElementById("generatedCode").value;
    if (!name) {
        alert("Enter your name!");
        return;
    }
    if (!code) {
        alert("Generate a code first!");
        return;
    }

    // Save user info in localStorage as array
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const date = new Date().toLocaleDateString();
    users.push({name, code, date});
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! Your code is saved.");
    document.getElementById("signupName").value = "";
    document.getElementById("generatedCode").value = "";
}

// Login function
function login() {
    const loginName = prompt("Enter your name:");
    const loginCode = document.getElementById("loginCode").value;
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (loginName === "admin15" && loginCode === "admin15") {
        alert("Admin login successful!");
        window.location.href = "admin.html";
        return;
    }

    const user = users.find(u => u.name === loginName && u.code === loginCode);
    if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        alert("Login successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid name or code!");
    }
}