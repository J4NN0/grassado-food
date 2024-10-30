// Top 100 German nouns and verbs list
const words = [
    // Nouns
    { german: "Haus", english: "house" },
    { german: "Baum", english: "tree" },
    { german: "Buch", english: "book" },
    { german: "Auto", english: "car" },
    { german: "Tisch", english: "table" },
    { german: "Katze", english: "cat" },
    { german: "Hund", english: "dog" },
    { german: "Freund", english: "friend" },
    { german: "Mutter", english: "mother" },
    { german: "Vater", english: "father" },
    { german: "Kind", english: "child" },
    { german: "Schule", english: "school" },
    { german: "Lehrer", english: "teacher" },
    { german: "Stadt", english: "city" },
    { german: "Land", english: "country" },
    { german: "Arbeit", english: "work" },
    { german: "Wasser", english: "water" },
    { german: "Brot", english: "bread" },
    { german: "Tag", english: "day" },
    { german: "Woche", english: "week" },
    { german: "Jahr", english: "year" },
    { german: "Zeit", english: "time" },
    { german: "Mann", english: "man" },
    { german: "Frau", english: "woman" },
    { german: "Bett", english: "bed" },
    { german: "Stuhl", english: "chair" },
    { german: "Tür", english: "door" },
    { german: "Fenster", english: "window" },
    { german: "Straße", english: "street" },
    { german: "Auto", english: "car" },
    { german: "Zug", english: "train" },
    { german: "Bus", english: "bus" },
    { german: "Flugzeug", english: "airplane" },
    { german: "Essen", english: "food" },
    { german: "Frühstück", english: "breakfast" },
    { german: "Mittagessen", english: "lunch" },
    { german: "Abendessen", english: "dinner" },
    { german: "Apfel", english: "apple" },
    { german: "Banane", english: "banana" },
    { german: "Zitrone", english: "lemon" },
    { german: "Obst", english: "fruit" },
    { german: "Gemüse", english: "vegetable" },
    { german: "Salat", english: "salad" },
    { german: "Fisch", english: "fish" },
    { german: "Fleisch", english: "meat" },
    { german: "Milch", english: "milk" },
    { german: "Saft", english: "juice" },
    { german: "Kaffee", english: "coffee" },
    { german: "Tee", english: "tea" },
    { german: "Wein", english: "wine" },
    { german: "Bier", english: "beer" },
    { german: "Hemd", english: "shirt" },
    { german: "Hose", english: "pants" },
    { german: "Schuhe", english: "shoes" },
    { german: "Jacke", english: "jacket" },
    { german: "Handschuhe", english: "gloves" },
    { german: "Computer", english: "computer" },
    { german: "Telefon", english: "phone" },
    { german: "Lampe", english: "lamp" },
    { german: "Stift", english: "pen" },
    { german: "Papier", english: "paper" },
    { german: "Zeitung", english: "newspaper" },
    { german: "Geld", english: "money" },
    { german: "Schlüssel", english: "key" },
    { german: "Tasche", english: "bag" },

    // Verbs
    { german: "sein", english: "to be" },
    { german: "haben", english: "to have" },
    { german: "machen", english: "to do" },
    { german: "sagen", english: "to say" },
    { german: "geben", english: "to give" },
    { german: "kommen", english: "to come" },
    { german: "gehen", english: "to go" },
    { german: "sehen", english: "to see" },
    { german: "wissen", english: "to know" },
    { german: "wollen", english: "to want" },
    { german: "nehmen", english: "to take" },
    { german: "finden", english: "to find" },
    { german: "denken", english: "to think" },
    { german: "glauben", english: "to believe" },
    { german: "sprechen", english: "to speak" },
    { german: "bringen", english: "to bring" },
    { german: "arbeiten", english: "to work" },
    { german: "leben", english: "to live" },
    { german: "schreiben", english: "to write" },
    { german: "lesen", english: "to read" },
    { german: "trinken", english: "to drink" },
    { german: "essen", english: "to eat" },
    { german: "fahren", english: "to drive" },
    { german: "kaufen", english: "to buy" },
    { german: "verkaufen", english: "to sell" },
    { german: "lernen", english: "to learn" },
    { german: "schlafen", english: "to sleep" },
    { german: "helfen", english: "to help" },
    { german: "spielen", english: "to play" },
    { german: "laufen", english: "to run" },
    { german: "fragen", english: "to ask" },
    { german: "antworten", english: "to answer" },
    { german: "suchen", english: "to search" },
    { german: "beginnen", english: "to begin" },
    { german: "verstehen", english: "to understand" },
    { german: "erklären", english: "to explain" },
    { german: "öffnen", english: "to open" },
    { german: "schließen", english: "to close" },
    { german: "fahren", english: "to travel" },
    { german: "bleiben", english: "to stay" },
    { german: "vergessen", english: "to forget" },
    { german: "erinnern", english: "to remember" },
    { german: "ziehen", english: "to pull" },
    { german: "schieben", english: "to push" },
    { german: "werden", english: "to become" },
    { german: "mögen", english: "to like" },
    { german: "dürfen", english: "to be allowed" },
    { german: "müssen", english: "to have to" },
    { german: "sollen", english: "should" },
    { german: "können", english: "can" },
    { german: "liegen", english: "to lie (down)" },
    { german: "sitzen", english: "to sit" },
    { german: "stehen", english: "to stand" },
    { german: "rufen", english: "to call" },
    { german: "bleiben", english: "to stay" }
];

let currentWord = null;
let score = 0;

function startLearnDeutsch() {
    hideAllGames();

    document.getElementById('learnDeutschGame').style.display = 'block'; // Show Learn Deutsch section
    score = 0;
    document.getElementById('learnDeutschGameScore').innerText = `Score: ${score}`;
    document.getElementById('learnDeutschGameMessage').innerText = '';

    getNextRandomWord();
}

function hideAllGames() {
    document.getElementById('flappyCanvas').style.display = 'none';
    document.getElementById('learnDeutschGame').style.display = 'none';
    document.getElementById('playWithGGGame').style.display = 'none';
}

function getNextRandomWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    document.getElementById('germanWord').innerText = currentWord.german;
    document.getElementById('userInput').value = '';
}

// Event listener to handle Enter key in the input field
document.getElementById('userInput').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        submitAnswer();
    }
});

function submitAnswer() {
    const userAnswer = document.getElementById('userInput').value.toLowerCase();
    const messageField = document.getElementById('learnDeutschGameMessage');
    const scoreField = document.getElementById('learnDeutschGameScore');
    const gameContainer = document.getElementById('learnDeutschGame');

    if (userAnswer.toLowerCase() === 'exit') {
        gameContainer.style.display = 'none';
        alert(`Game over! Your final score: ${score}`);
        return;
    }

    if (userAnswer.trim().toLowerCase() === currentWord.english.toLowerCase()) {
        score++;
        messageField.innerText = 'Correct! 🎉';
    } else {
        messageField.innerText = `Wrong! The correct answer is "${currentWord.english}".`;
    }

    scoreField.innerText = `Score: ${score}`;
    getNextRandomWord();
}