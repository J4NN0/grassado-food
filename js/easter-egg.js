// Food Raining Easter Egg
let clickCount = 0;
let clickTimer = null;
let inactivityTimer = null;
let lastClickX = 0;
let lastClickY = 0;
let isEasterEggActivated = false;
const foodEmojis = ['🍕', '🍔', '🍟', '🌭', '🌮', '🍜', '🍣', '🍱', '🥘', '🍖', '🍗', '🥩', '🥓', '🍳', '🥚', '🧀', '🥖', '🥨', '🥯', '🥞', '🧇'];

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

function deactivateEasterEgg() {
    if (isEasterEggActivated) {
        isEasterEggActivated = false;
        clickCount = 0;
    }
}

function resetInactivityTimer() {
    // Clear existing inactivity timer
    if (inactivityTimer) {
        clearTimeout(inactivityTimer);
    }
    
    // Only set inactivity timer if easter egg is activated
    if (isEasterEggActivated) {
        // Deactivate after 2 second of inactivity
        inactivityTimer = setTimeout(() => {
            deactivateEasterEgg();
        }, 2000);
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
    
    // Set timer to reset click count after 3 seconds of no clicks
    clickTimer = setTimeout(() => {
        clickCount = 0;
    }, 3000);
    
    // Activate easter egg after 7 clicks
    if (clickCount >= 7 && !isEasterEggActivated) {
        isEasterEggActivated = true;
        clickCount = 0; // Reset click count
        resetInactivityTimer(); // Start inactivity timer
        return;
    }
    
    // If easter egg is activated, create one food item per click
    if (isEasterEggActivated) {
        createFoodItem(lastClickX, lastClickY);
        resetInactivityTimer(); // Reset inactivity timer on each click
    }
}

// Initialize easter egg when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('.header h1');
    if (title) {
        title.style.cursor = 'pointer';
        title.addEventListener('click', handleTitleClick);
    }
});
