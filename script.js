const animeCharacters = [
    "Naruto", "Sasuke", "Goku", "Luffy", "Eren", "Ichigo", "Gon", "Killua", "Saitama", "Zoro"
];

const games = {
    N: 'games/game1.html',
    A: 'games/game2.html',
    R: 'games/game3.html',
    U: 'games/game4.html',
    T: 'games/game5.html',
    O: 'games/game6.html'

const games = {
    S: 'games/game1.html',
};

const displayWord = document.getElementById('displayWord');
const switchButton = document.getElementById('switchButton');
const lettersContainer = document.getElementById('lettersContainer');
const gameContainer = document.getElementById('gameContainer');
const gameFrame = document.getElementById('gameFrame');
const backButton = document.getElementById('backButton');
const mainContainer = document.getElementById('mainContainer');

function clearLetters() {
    lettersContainer.innerHTML = '';
}

function displayLetters(word) {
    clearLetters();
    for (let letter of word) {
        const letterButton = document.createElement('button');
        letterButton.innerText = letter;
        letterButton.onclick = () => openGame(letter);
        lettersContainer.appendChild(letterButton);
    }
}

function openGame(letter) {
    if (games[letter]) {
        gameFrame.src = games[letter];
        gameContainer.classList.remove('hidden');
        mainContainer.classList.add('hidden');
    }
}

function closeGame() {
    gameFrame.src = '';
    gameContainer.classList.add('hidden');
    mainContainer.classList.remove('hidden');
}

switchButton.onclick = () => {
    const randomCharacter = animeCharacters[Math.floor(Math.random() * animeCharacters.length)];
    displayWord.innerText = randomCharacter;
    displayLetters(randomCharacter);
};

backButton.onclick = () => {
    closeGame();
};
