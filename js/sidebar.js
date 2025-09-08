// Helper function to clear active states from all filter elements
function clearAllActiveStates(filterButtons, vegetarianIcon) {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    if (vegetarianIcon) vegetarianIcon.classList.remove('active');
}

// Helper function to handle category filtering
function handleCategoryFilter(element, filterButtons, vegetarianIcon) {
    clearAllActiveStates(filterButtons, vegetarianIcon);
    element.classList.add('active');
    
    const category = element.getAttribute('data-category');
    renderDishes(category);
}

// Function to add CSS animations
function addCSSAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .card {
            animation: fadeIn 0.5s ease-in;
        }
    `;
    document.head.appendChild(style);
}

// Filtering functionality
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const vegetarianIcon = document.querySelector('.vegetarian-icon');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            handleCategoryFilter(this, filterButtons, vegetarianIcon);
        });
    });

    vegetarianIcon.addEventListener('click', function () {
        handleCategoryFilter(this, filterButtons, vegetarianIcon);
    });
});

// Add CSS animation for smooth transitions
addCSSAnimations();