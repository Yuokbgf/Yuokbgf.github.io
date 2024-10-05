// Simulated user data (replace with a real backend for deployment)
const users = {
    'test@example.com': 'password123'
};

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const rememberMe = document.getElementById('remember-me').checked;

    if (users[email] && users[email] === password) {
        document.getElementById('login-message').innerText = "Login successful!";
        if (rememberMe) {
            localStorage.setItem('user', email); // Store user for auto-login
        }
        setTimeout(() => {
            window.location.href = 'index.html';  // Redirect after login
        }, 1000);
    } else {
        document.getElementById('login-message').innerText = "Invalid email or password!";
    }
}

function signup() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (!users[email]) {
        users[email] = password;
        document.getElementById('signup-message').innerText = "Signup successful! Please log in.";
    } else {
        document.getElementById('signup-message').innerText = "User already exists!";
    }
}

// Auto-login if "Remember Me" is checked
window.onload = () => {
    const user = localStorage.getItem('user');
    if (user) {
        window.location.href = 'index.html';  // Redirect to home if already logged in
    }
};
