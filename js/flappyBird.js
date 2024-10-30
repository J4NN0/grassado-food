function startFlappyBird() {
    hideAllGames();
    
    const canvas = document.getElementById('flappyCanvas');
    const context = canvas.getContext('2d');

    // Game-specific variables and logic for Flappy Bird
    let bird = { x: 50, y: 150, width: 20, height: 20 };
    let gravity = 1;
    let velocity = 0;

    function drawBird() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "blue";
        context.fillRect(bird.x, bird.y, bird.width, bird.height);
        bird.y += velocity;
        velocity += gravity;
    }

    function updateGame() {
        drawBird();
        requestAnimationFrame(updateGame);
    }

    canvas.style.display = 'block'; // Show Flappy Bird canvas
    updateGame();
}

function hideAllGames() {
    document.getElementById('flappyCanvas').style.display = 'none';
    document.getElementById('learnDeutschGame').style.display = 'none';
    document.getElementById('playWithGGGame').style.display = 'none';
}