// Top German nouns and verbs list
const words = [
    // Nouns
    {german: "der Mann", english: "the man"},
    {german: "die Frau", english: "the woman"},
    {german: "das Kind", english: "the child"},
    {german: "der Tag", english: "the day"},
    {german: "die Zeit", english: "the time"},
    {german: "das Jahr", english: "the year"},
    {german: "der Weg", english: "the way"},
    {german: "die Welt", english: "the world"},
    {german: "das Leben", english: "the life"},
    {german: "der Mensch", english: "the human"},
    {german: "die Stadt", english: "the city"},
    {german: "das Haus", english: "the house"},
    {german: "der Freund", english: "the friend "},
    {german: "die Freundin", english: "the friend"},
    {german: "das Auto", english: "the car"},
    {german: "der Hund", english: "the dog"},
    {german: "die Katze", english: "the cat"},
    {german: "das Buch", english: "the book"},
    {german: "der Tisch", english: "the table"},
    {german: "die Tür", english: "the door"},
    {german: "das Fenster", english: "the window"},
    {german: "der Baum", english: "the tree"},
    {german: "die Blume", english: "the flower"},
    {german: "das Wasser", english: "the water"},
    {german: "der Himmel", english: "the sky"},
    {german: "die Sonne", english: "the sun"},
    {german: "das Licht", english: "the light"},
    {german: "der Vater", english: "the father"},
    {german: "die Mutter", english: "the mother"},
    {german: "der Bruder", english: "the brother"},
    {german: "die Schwester", english: "the sister"},
    {german: "das Essen", english: "the food"},
    {german: "der Apfel", english: "the apple"},
    {german: "die Banane", english: "the banana"},
    {german: "das Brot", english: "the bread"},
    {german: "der Wein", english: "the wine"},
    {german: "die Milch", english: "the milk"},
    {german: "das Bier", english: "the beer"},
    {german: "die Arbeit", english: "the work"},
    {german: "das Geld", english: "the money"},
    {german: "der Lehrer", english: "the teacher"},
    {german: "die Lehrerin", english: "the teacher"},
    {german: "das Krankenhaus", english: "the hospital"},
    {german: "der Arzt", english: "the doctor"},
    {german: "die Ärztin", english: "the doctor"},
    {german: "das Problem", english: "the problem"},
    {german: "der Computer", english: "the computer"},
    {german: "die Sprache", english: "the language"},
    {german: "das Bild", english: "the picture"},
    {german: "der Garten", english: "the garden"},
    {german: "die Straße", english: "the street"},
    {german: "das Herz", english: "the heart"},
    {german: "der Schuh", english: "the shoe"},
    {german: "die Jacke", english: "the jacket"},
    {german: "das Kleid", english: "the dress"},
    {german: "der Kopf", english: "the head"},
    {german: "die Hand", english: "the hand"},
    {german: "das Gesicht", english: "the face"},
    {german: "der Zug", english: "the train"},
    {german: "die Reise", english: "the trip"},
    {german: "das Flugzeug", english: "the airplane"},
    {german: "der Brief", english: "the letter"},
    {german: "die Zeitung", english: "the newspaper"},
    {german: "das Handy", english: "the mobile phone"},
    {german: "der Markt", english: "the market"},
    {german: "die Schule", english: "the school"},
    {german: "das Hotel", english: "the hotel"},
    {german: "der Film", english: "the movie"},
    {german: "die Musik", english: "the music"},
    {german: "das Theater", english: "the theater"},
    {german: "der Berg", english: "the mountain"},
    {german: "die Insel", english: "the island"},
    {german: "das Meer", english: "the sea"},
    {german: "der Park", english: "the park"},
    {german: "die Bank", english: "the bank"},
    {german: "das Kino", english: "the cinema"},
    {german: "der Kuchen", english: "the cake"},
    {german: "die Suppe", english: "the soup"},
    {german: "das Restaurant", english: "the restaurant"},
    {german: "die Küche", english: "the kitchen"},
    {german: "das Schlafzimmer", english: "the bedroom"},
    {german: "der Stuhl", english: "the chair"},
    {german: "die Lampe", english: "the lamp"},
    {german: "das Sofa", english: "the sofa"},
    {german: "der Fernseher", english: "the television"},
    {german: "die Uhr", english: "the clock"},
    {german: "das Bett", english: "the bed"},
    {german: "der Teppich", english: "the carpet"},
    {german: "die Wand", english: "the wall"},
    {german: "das Badezimmer", english: "the bathroom"},
    {german: "der Spiegel", english: "the mirror"},
    {german: "die Dusche", english: "the shower"},
    {german: "das Waschbecken", english: "the sink"},
    {german: "der Schrank", english: "the cupboard"},
    {german: "die Waschmaschine", english: "the washing machine"},
    {german: "der Schlüssel", english: "the key"},
    {german: "die Tasche", english: "the bag"},
    {german: "das Fahrrad", english: "the bicycle"},
    {german: "der Bus", english: "the bus"},
    {german: "die Straßenbahn", english: "the tram"},
    {german: "das Motorrad", english: "the motorcycle"},

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