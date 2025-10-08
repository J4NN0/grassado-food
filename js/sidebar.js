let currentCategory = 'all';
let currentSearchTerm = '';

function filterDishes(category = 'all', searchTerm = '') {
    let filteredDishes = dishes;
    
    if (category !== 'all') {
        filteredDishes = filteredDishes.filter(dish => dish.categories.includes(category));
    }
    
    if (searchTerm.trim() !== '') {
        const searchLower = searchTerm.toLowerCase();
        filteredDishes = filteredDishes.filter(dish => {
            const nameMatch = dish.name.toLowerCase().includes(searchLower);
            const descriptionMatch = dish.description.toLowerCase().includes(searchLower);
            return nameMatch || descriptionMatch;
        });
    }
    
    return filteredDishes;
}

function renderDishes(category = 'all', searchTerm = '') {
    const container = document.getElementById('brunch-container');
    const filteredDishes = filterDishes(category, searchTerm);
    
    container.innerHTML = filteredDishes.map(dish => createCard(dish)).join('');
    
    if (filteredDishes.length === 0) {
        container.innerHTML = '<div class="no-results">No dishes found.</div>';
    }
}

function updateResults() {
    const searchInput = document.getElementById('search-input');
    renderDishes(currentCategory, searchInput.value);
}

function clearAllActiveStates(filterButtons, vegetarianIcon) {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    if (vegetarianIcon) vegetarianIcon.classList.remove('active');
}

function handleCategoryFilter(element, filterButtons, vegetarianIcon) {
    clearAllActiveStates(filterButtons, vegetarianIcon);
    element.classList.add('active');
    
    currentCategory = element.getAttribute('data-category');
    updateResults();
}

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

function initializeFiltering() {
    addCSSAnimations();
    renderDishes('all');
    
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            updateResults();
        });
    }
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    const vegetarianIcon = document.querySelector('.vegetarian-icon[data-category]');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            handleCategoryFilter(this, filterButtons, vegetarianIcon);
        });
    });
    
    if (vegetarianIcon) {
        vegetarianIcon.addEventListener('click', function() {
            handleCategoryFilter(this, filterButtons, vegetarianIcon);
        });
    }
}

document.addEventListener('DOMContentLoaded', initializeFiltering);
