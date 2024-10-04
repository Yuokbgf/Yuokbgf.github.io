// main.js

let currentLevel = 0;  // Tracks current level
let loggedIn = false;
const users = {};  // In-memory user storage (expand to a database)

// Puzzle objects for each letter
const puzzles = {
    "p": "Solve the puzzle for P (a visual logic puzzle or riddle).",
    "a": "Solve the puzzle for A (math-based challenge or pattern).",
    "i": "Solve the puzzle for I (programming puzzle).",
    "n": "Solve the puzzle for N (sequence and timing challenge)."
};

// Correct passwords for each letter
const correctPasswords = {
    "p": "P2023",
    "a": "A2023",
    "i": "I2023",
    "n": "N2023"
};

// User login function
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (users[email] && users[email] === password) {
        loggedIn = true;
        document.getElementById("message").innerText = "Login successful!";
        document.querySelector(".container").style.opacity = 1;
    } else {
        document.getElementById("message").innerText = "Invalid email or password!";
    }
}

// User signup function
function signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!users[email]) {
        users[email] = password;
        document.getElementById("message").innerText = "Signup successful! Please login.";
    } else {
        document.getElementById("message").innerText = "User already exists!";
    }
}

// Puzzle initiation logic
document.querySelectorAll('.letter').forEach(letter => {
    letter.addEventListener('click', (e) => {
        if (!loggedIn) {
            alert("Please log in to start the puzzles.");
            return;
        }

        const letterId = e.target.id.split('-')[1];
        if (currentLevel === "pain".indexOf(letterId)) {
            const puzzleMessage = puzzles[letterId];
            let userInput = prompt(`${puzzleMessage}\nEnter your solution:`);

            if (userInput === correctPasswords[letterId]) {
                alert(`Correct! You've solved the puzzle for ${letterId.toUpperCase()}.`);
                currentLevel++;
            } else {
                alert("Incorrect solution, try again!");
            }
        } else {
            alert("You need to complete previous puzzles before attempting this one!");
        }
    });
});

// Password input logic for unlocking levels
function checkPassword() {
    const input = document.getElementById('password-input').value;
    const currentLetter = "pain"[currentLevel];  // Get current letter for the level

    if (input === correctPasswords[currentLetter]) {
        alert('Correct password! You can proceed to the next puzzle.');
        currentLevel++;
        document.getElementById('password-input').value = '';  // Clear input field
    } else {
        alert('Incorrect password. Try again!');
    }
}
