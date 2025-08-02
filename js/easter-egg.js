// Food Raining Easter Egg
let clickCount = 0;
let clickTimer = null;
let lastClickX = 0;
let lastClickY = 0;
let isRaining = false;
let rainInterval = null;
const foodEmojis = ['🍕', '🍔', '🍟', '🌭', '🌮', '🍜', '🍣', '🍱', '🥘', '🍖', '🍗', '🥩', '🥓', '🍳', '🥚', '🧀', '🥖', '🥨', '🥯', '🥞', '🧇', '🥓', '🍖', '🍗', '🥩', '🥓', '🍳', '🥚', '🧀', '🥖', '🥨', '🥯', '🥞', '🧇', '🍕', '🍔', '🍟', '🌭', '🌮', '🍜', '🍣', '🍱', '🥘'];

function createFoodItem(clickX, clickY) {
    const food = document.createElement('div');
    food.textContent = foodEmojis[Math.floor(Math.random() * foodEmojis.length)];
    food.style.position = 'fixed';
    
    // Start from click position with some random spread
    const spreadX = (Math.random() - 0.5) * 200; // ±100px spread
    const spreadY = (Math.random() - 0.5) * 100; // ±50px spread
    food.style.left = (clickX + spreadX) + 'px';
    food.style.top = (clickY + spreadY) + 'px';
    
    food.style.fontSize = Math.random() * 30 + 20 + 'px';
    food.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
    food.style.transition = 'all 3s ease-in';
    food.style.pointerEvents = 'none';
    food.style.userSelect = 'none';
    food.style.zIndex = '9999';
    
    document.body.appendChild(food);

    // Animate the food falling
    setTimeout(() => {
        food.style.top = '100vh';
        food.style.transform = 'rotate(' + (Math.random() * 720) + 'deg)';
    }, 100);

    // Remove food after animation
    setTimeout(() => {
        if (food.parentNode) {
            food.parentNode.removeChild(food);
        }
    }, 4000);
}

function startFoodRain(clickX, clickY) {
    if (!isRaining) {
        isRaining = true;
        // Create food items continuously while raining
        rainInterval = setInterval(() => {
            createFoodItem(clickX, clickY);
        }, 70); // Create a new food item every 70ms
    }
}

function stopFoodRain() {
    if (isRaining) {
        isRaining = false;
        if (rainInterval) {
            clearInterval(rainInterval);
            rainInterval = null;
        }
    }
}

function handleTitleClick(event) {
    clickCount++;
    
    // Store the click position
    lastClickX = event.clientX;
    lastClickY = event.clientY;
    
    // Clear previous timer
    if (clickTimer) {
        clearTimeout(clickTimer);
    }
    
    // Set timer to reset click count
    clickTimer = setTimeout(() => {
        clickCount = 0;
    }, 2000);
    
    // Trigger easter egg after 5 clicks
    if (clickCount >= 5) {
        startFoodRain(lastClickX, lastClickY);
        clickCount = 0;
        
        // Add a fun message
        const message = document.createElement('div');
        message.style.position = 'fixed';
        message.style.top = '50%';
        message.style.left = '50%';
        message.style.transform = 'translate(-50%, -50%)';
        message.style.fontSize = '2em';
        message.style.fontWeight = 'bold';
        message.style.color = '#e67e22';
        message.style.textShadow = '0 0 10px rgba(230, 126, 34, 0.5)';
        message.style.zIndex = '10000';
        message.style.pointerEvents = 'none';
        message.style.userSelect = 'none';
        document.body.appendChild(message);
        
        // Remove message after 2 seconds
        setTimeout(() => {
            if (message.parentNode) {
                message.parentNode.removeChild(message);
            }
        }, 2000);
    }
}

function handleTitleMouseDown(event) {
    if (clickCount >= 5) {
        startFoodRain(event.clientX, event.clientY);
    }
}

function handleTitleMouseUp() {
    stopFoodRain();
}

function handleTitleMouseLeave() {
    stopFoodRain();
}

// Initialize easter egg when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('.header h1');
    if (title) {
        title.style.cursor = 'pointer';
        title.addEventListener('click', handleTitleClick);
        title.addEventListener('mousedown', handleTitleMouseDown);
        title.addEventListener('mouseup', handleTitleMouseUp);
        title.addEventListener('mouseleave', handleTitleMouseLeave);
    }
}); 