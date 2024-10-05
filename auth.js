// Check if user is logged in when loading index.html
window.onload = function() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    
    if (!loggedInUser) {
        // Redirect to login if user is not logged in
        if (window.location.pathname !== '/login.html' && window.location.pathname !== '/signup.html') {
            window.location.href = 'login.html';
        }
    } else {
        // User is logged in, show the PAIN puzzle
        if (window.location.pathname === '/index.html') {
            document.getElementById('puzzle-container').style.display = 'block';
        }
    }
};

// Login function
function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Hardcoded for now, replace with actual validation
    const correctEmail = "test@example.com";
    const correctPassword = "password123";

    if (email === correctEmail && password === correctPassword) {
        localStorage.setItem('loggedInUser', email);
        alert("Login successful!");
        window.location.href = 'index.html';  // Redirect to PAIN page after login
    } else {
        alert("Invalid email or password");
    }
}

// Signup function
function signup() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (email && password) {
        alert("Signup successful! You can now log in.");
        window.location.href = 'login.html';  // Redirect to login page after signup
    } else {
        alert("Please fill in both fields.");
    }
}
