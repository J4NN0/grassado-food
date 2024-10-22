// Array of German words and their English translations
const words = [
    { german: "Hund", english: "dog" },
    { german: "Katze", english: "cat" },
    { german: "Apfel", english: "apple" },
    { german: "Haus", english: "house" },
    { german: "Brot", english: "bread" },
    { german: "Baum", english: "tree" },
    { german: "Auto", english: "car" },
    { german: "Tisch", english: "table" },
    { german: "Buch", english: "book" },
];

let currentWord = null;
let score = 0;

function startLearnDeutsch() {
    document.getElementById('flappyCanvas').style.display = 'none'; // Hide Flappy Bird canvas
    document.getElementById('learnDeutschGame').style.display = 'block'; // Show Learn Deutsch section
    score = 0;
    document.getElementById('score').innerText = `Score: ${score}`;
    getNextWord();
}

function getNextWord() {
    // Select a random word from the list
    currentWord = words[Math.floor(Math.random() * words.length)];
    document.getElementById('germanWord').innerText = currentWord.german;
    document.getElementById('userInput').value = '';
    document.getElementById('message').innerText = '';
}

function submitAnswer() {
    const userAnswer = document.getElementById('userInput').value.toLowerCase();

    if (userAnswer.toLowerCase() === 'exit') {
        document.getElementById('learnDeutschGame').style.display = 'none';
        alert(`Game over! Your final score: ${score}`);
        return;
    }

    if (userAnswer.toLowerCase() === currentWord.english.toLowerCase()) {
        score++;
        document.getElementById('message').innerText = 'Correct! 🎉';
    } else {
        document.getElementById('message').innerText = `Wrong! The correct answer is "${currentWord.english}".`;
    }

    document.getElementById('score').innerText = `Score: ${score}`;
    getNextWord(); // Get the next word
}