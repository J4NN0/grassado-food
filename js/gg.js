function startPlayWithGG() {
    hideAllGames();
    document.getElementById('playWithGGGame').style.display = 'block';
}

function hideAllGames() {
    document.getElementById('flappyCanvas').style.display = 'none';
    document.getElementById('learnDeutschGame').style.display = 'none';
    document.getElementById('playWithGGGame').style.display = 'none';
}

function moveNoButton() {
    // Generate random positions for the No button within a certain range
    const container = document.querySelector('#playWithGGGame .button-container');
    const noButton = document.getElementById('noButton');

    // Define the range within the container where the button can move
    const maxX = container.offsetWidth - noButton.offsetWidth;
    const maxY = container.offsetHeight - noButton.offsetHeight;

    // Set new random positions within the container
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

function showPopup() {
    document.getElementById('customPopup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('customPopup').style.display = 'none';
}