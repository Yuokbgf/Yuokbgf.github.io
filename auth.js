// Check if user is logged in
window.onload = function() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    
    // If user is not logged in, redirect to login page
    if (!loggedInUser) {
        window.location.href = 'login.html';
    } else {
        // Show puzzle if user is logged in
        document.getElementById('puzzle-container').style.display = 'block';
    }
};

// Login function
function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // For simplicity, using hardcoded email and password (replace with real validation)
    const correctEmail = "test@example.com";
    const correctPassword = "password123";

    if (email === correctEmail && password === correctPassword) {
        // Save login state
        localStorage.setItem('loggedInUser', email);
        alert("Login successful!");
        window.location.href = 'index.html';  // Redirect to main page after login
    } else {
        alert("Invalid email or password");
    }
}

// Signup function
function signup() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Basic validation to simulate signup process (add server-side validation here)
    if (email && password) {
        alert("Signup successful! You can now log in.");
        window.location.href = 'login.html';  // Redirect to login page after signup
    } else {
        alert("Please fill in both fields.");
    }
}
