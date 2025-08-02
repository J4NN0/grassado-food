// Dishes Data
const dishes = [
    {
        id: 1,
        category: "brunch",
        image: "assets/imgs/brunches/omelette.png",
        name: "Omelette",
        description: "French-style omelette with <b>eggs</b> cooked just right. Add optional <b>ham</b> and <b>melty mozzarella</b>. Mix it up however you like - it's always a tasty brunch pick!"
    },
    {
        id: 2,
        category: "brunch",
        image: "assets/imgs/brunches/morning-rush.png",
        name: "Morning Rush",
        description: "A hearty blend of <b>scrambled eggs</b> and <b>ham</b>, perfect for a quick and satisfying start to your day. A quick dish to prepare and ready to go in no time."
    },
    {
        id: 3,
        category: "brunch",
        image: "assets/imgs/brunches/morning-love.png",
        name: "Morning Love",
        description: "A delightful brunch dish of <b>toasted bread</b> layered with <b>Frischkäss</b> (fresh cheese), topped with <b>scrambled eggs</b> and <b>sliced avocado</b>."
    },
    {
        id: 4,
        category: "brunch",
        image: "assets/imgs/brunches/ragnar.png",
        name: "Ragnar",
        description: "Viking-inspired feast of <b>toasted bread</b>, topped with <b>Frischkäss</b> (fresh cheese), <b>scrambled eggs</b>, <b>crispy bacon</b>, <b>rucola</b>, <b>cherry tomatoes</b>, and <b>sliced avocado</b> on the side."
    },
    {
        id: 5,
        category: "brunch",
        image: "assets/imgs/brunches/white-lagertha.png",
        name: "White Lagertha",
        description: "A fresh and light brunch featuring <b>toasted bread</b> topped with <b>scrambled eggs</b>, fresh <b>rucola</b>, sliced <b>cherry tomatoes</b>, and creamy <b>burrata cheese</b> to finish."
    },
    {
        id: 6,
        category: "starters",
        image: "assets/imgs/starters/pao-de-queijo.png",
        name: "Pão de Queijo",
        description: "A Brazilian cheese bread made with <b>tapioca flour</b>, <b>cheese</b>, and <b>egg</b>."
    },
    {
        id: 7,
        category: "main",
        image: "assets/imgs/main-dishes/cannelloni.png",
        name: "Cannelloni",
        description: "Cannelloni filled with <b>ricotta</b> and <b>spinach</b>, topped with a layer of <b>tomato sauce</b> and <b>besciamella</b>, then baked in the oven."
    },
    {
        id: 8,
        category: "main",
        image: "assets/imgs/main-dishes/pasta-anchovies.png",
        name: "Pasta with Anchovies",
        description: "<b>Anchovies</b> cooked in <b>olive oil</b> with <b>garlic</b>, then pasta is stirred with cooking water and the anchovy sauce, served with fresh <b>parsley</b>. <b>Breadcrum</b> is toasted and then added on top."
    },
    {
        id: 9,
        category: "main",
        image: "assets/imgs/main-dishes/pasta-capers.png",
        name: "Pasta with Capers",
        description: "A creamy sauce made from <b>capers</b> and <b>garlic</b> is prepared, then lightly fried in a pan with oil. <b>Tomato sauce</b> is added and simmered, before being tossed with pasta until well combined."
    },
    {
        id: 10,
        category: "main",
        image: "assets/imgs/main-dishes/pasta-mushrooms-bacon.png",
        name: "Pasta with Mushrooms and Bacon",
        description: "This dish is prepared by first cooking the <b>bacon</b> until crispy. Using the remaining bacon fat, <b>mushrooms</b> are sautéed with a touch of <b>black pepper</b>. Everything is then stirred together in the pan, incorporating a bit of the <b>pasta's boiling water</b> to create a rich and savory sauce."
    },
    {
        id: 11,
        category: "main",
        image: "assets/imgs/main-dishes/rice-bacon-peas.png",
        name: "Risotto with Bacon and Peas",
        description: "Rice toasted with butter, then deglazed with white wine. The rice is then slowly cooked using <b>vegetable stock</b>, then complemented by crispy <b>bacon</b> and <b>green peas</b>."
    },
    {
        id: 12,
        category: "main",
        image: "assets/imgs/main-dishes/rice-shrimps-lemon.png",
        name: "Risotto with Shrimps and Lemon",
        description: "Rice toasted with onions, then deglazed with white wine. As the rice slowly absorbs flavorful <b>vegetable stock</b>, <b>shrimps</b> and bright <b>lemon zest</b> are folded in."
    },
    {
        id: 13,
        category: "main",
        image: "assets/imgs/main-dishes/rice-tomato-burrata.png",
        name: "Risotto with Tomato Sauce and Burrata",
        description: "Rice toasted with onions, then deglazed with white wine. The rice is slowly cooked with <b>tomato sauce</b> and <b>vegetable stock</b>, then topped with cold fresh <b>burrata</b> and a touch of <b>pesto</b>."
    },
    {
        id: 14,
        category: "main",
        image: "assets/imgs/main-dishes/rice-beef.png",
        name: "Rice with Beef",
        description: "Tender <b>beef strips</b> cooked in a rich sauce made with <b>tomato paste</b>, <b>mustard</b>, <b>soy sauce</b>, and <b>cream</b>, with sautéed <b>mushrooms</b> added at the end, served alongside white <b>rice</b>."
    },
    {
        id: 15,
        category: "second",
        image: "assets/imgs/second-dishes/ossobuco.png",
        name: "Ossobuco with Smashed Potatoes",
        description: "<b>Ossobuco</b> is first fried until golden on each side, then slowly cooked with <b>onions</b>, <b>carrots</b>, <b>celery</b> and <b>beef stock</b> until tender. Served with <b>smashed potatoes</b>."
    }
];

// Function to create a card element
function createCard(dish) {
    return `
        <div class="card" data-category="${dish.category}">
            <img src="${dish.image}" alt="${dish.name}">
            <div class="card-content">
                <h2>${dish.name}</h2>
                <p>${dish.description}</p>
            </div>
        </div>
    `;
}

// Function to render dishes
function renderDishes(category = 'all') {
    const container = document.getElementById('brunch-container');
    const filteredDishes = category === 'all' ? dishes : dishes.filter(dish => dish.category === category);
    
    container.innerHTML = filteredDishes.map(dish => createCard(dish)).join('');
}

// Initialize dishes when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    renderDishes('all');
});
