// Dishes Data
const dishes = [
    {
        category: "juices",
        image: "img/juices/detox.png",
        name: "Monday Detox",
        description: "One <b>cucumber</b>, one <b>green apple</b>, two <b>celery</b> stalks, a handful of <b>spinach</b>, half a <b>lemon</b>, and a small piece of <b>ginger</b>."
    },
    {
        category: "juices",
        image: "img/juices/ace.png",
        name: "Vitamin Boost",
        description: "ACE juice made with two <b>oranges</b>, two <b>carrots</b>, and one <b>lemon</b>."
    },
    {
        category: "brunch",
        image: "img/brunches/omelette.png",
        name: "Omelette",
        description: "French-style omelette with <b>eggs</b> cooked just right. Add optional <b>ham</b> and <b>melty mozzarella</b>. Mix it up however you like - it's always a tasty brunch pick!"
    },
    {
        category: "brunch",
        image: "img/brunches/morning-rush.png",
        name: "Morning Rush",
        description: "A hearty blend of <b>scrambled eggs</b> and <b>ham</b>, perfect for a quick and satisfying start to your day. A quick dish to prepare and ready to go in no time."
    },
    {
        category: "brunch",
        image: "img/brunches/morning-love.png",
        name: "Morning Love",
        description: "A delightful brunch dish of <b>toasted bread</b> layered with <b>Frischkäss</b> (fresh cheese), topped with <b>scrambled eggs</b> and <b>sliced avocado</b>."
    },
    {
        category: "brunch",
        image: "img/brunches/ragnar.png",
        name: "Ragnar",
        description: "Viking-inspired feast of <b>toasted bread</b>, topped with <b>Frischkäss</b> (fresh cheese), <b>scrambled eggs</b>, <b>crispy bacon</b>, <b>rucola</b>, <b>cherry tomatoes</b>, and <b>sliced avocado</b> on the side."
    },
    {
        category: "brunch",
        image: "img/brunches/white-lagertha.png",
        name: "White Lagertha",
        description: "A fresh and light brunch featuring <b>toasted bread</b> topped with <b>scrambled eggs</b>, fresh <b>rucola</b>, sliced <b>cherry tomatoes</b>, and creamy <b>burrata cheese</b> to finish."
    },
    {
        category: "starters",
        image: "img/starters/pao-de-queijo.png",
        name: "Pão de Queijo",
        description: "A Brazilian cheese bread made with <b>tapioca flour</b>, <b>cheese</b>, and <b>egg</b>."
    },
    {
        category: "main",
        image: "img/main-dishes/cannelloni.png",
        name: "Cannelloni",
        description: "Cannelloni baked in the oven filled with <b>ricotta</b> and <b>spinach</b>, topped with a layer of <b>tomato sauce</b> and <b>besciamella</b>."
    },
    {
        category: "main",
        image: "img/main-dishes/pasta-anchovies.png",
        name: "Pasta with Anchovies",
        description: "<b>Anchovies</b> cooked in <b>olive oil</b> with <b>garlic</b>, then pasta is stirred with cooking water and the anchovy sauce, served with fresh <b>parsley</b>. <b>Breadcrumbs</b> are toasted and then added on top."
    },
    {
        category: "main",
        image: "img/main-dishes/pasta-capers.png",
        name: "Pasta with Capers",
        description: "A creamy sauce made from <b>capers</b> and <b>garlic</b> is prepared, then lightly fried in a pan with oil. <b>Tomato sauce</b> is added and simmered, before being tossed with pasta until well combined."
    },
    {
        category: "main",
        image: "img/main-dishes/pasta-mushrooms-bacon.png",
        name: "Pasta with Mushrooms and Bacon",
        description: "The <b>bacon</b> is cooked until crispy, <b>mushrooms</b> are sautéed in the remaining bacon fat with a touch of <b>black pepper</b>. Everything is then stirred together in the pan, incorporating a bit of the <b>pasta's boiling water</b> to create a rich and savory sauce."
    },
    {
        category: "main",
        image: "img/main-dishes/pasta-broccoli.png",
        name: "Pasta with Broccoli",
        description: "The <b>broccoli</b> are first boiled until soft, then sautéed in a pan with <b>garlic</b>. The <b>pasta</b> is cooked in the same water used for the broccoli, then combined and fried together with the broccoli and garlic at the end for extra flavor."
    },
    {
        category: "main",
        image: "img/main-dishes/rice-bacon-peas.png",
        name: "Risotto with Bacon and Peas",
        description: "Rice toasted with butter, then deglazed with white wine. The rice is then slowly cooked using <b>vegetable stock</b>, then complemented by crispy <b>bacon</b> and <b>green peas</b>."
    },
    {
        category: "main",
        image: "img/main-dishes/rice-shrimps-lemon.png",
        name: "Risotto with Shrimps and Lemon",
        description: "Rice toasted with onions, then deglazed with white wine. As the rice slowly absorbs flavorful <b>vegetable stock</b>, <b>shrimps</b> and bright <b>lemon zest</b> are folded in."
    },
    {
        category: "main",
        image: "img/main-dishes/rice-tomato-burrata.png",
        name: "Risotto with Tomato Sauce and Burrata",
        description: "Rice toasted with onions, then deglazed with white wine. The rice is slowly cooked with <b>tomato sauce</b> and <b>vegetable stock</b>, then topped with cold fresh <b>burrata</b> and a touch of <b>pesto</b>."
    },
    {
        category: "main",
        image: "img/main-dishes/rice-beef.png",
        name: "Rice with Beef",
        description: "Tender <b>beef strips</b> cooked in a rich sauce made with <b>tomato paste</b>, <b>mustard</b>, <b>soy sauce</b>, and <b>cream</b>, with sautéed <b>mushrooms</b> added at the end, served alongside white <b>rice</b>."
    },
    {
        category: "second",
        image: "img/second-dishes/ossobuco.png",
        name: "Ossobuco with Smashed Potatoes",
        description: "<b>Ossobuco</b> is first fried until golden on each side, then slowly cooked with <b>onions</b>, <b>carrots</b>, <b>celery</b> and <b>beef stock</b> until tender. Served with <b>smashed potatoes</b>."
    },
    {
        category: "dessert",
        image: "img/desserts/banana-bread.png",
        name: "Banana Bread",
        description: "Cake made with <b>bananas</b>, <b>eggs</b>, <b>flour</b>, <b>cinnamon</b>, <b>milk</b>, <b>nuts</b>, <b>vanilla</b>, and <b>butter</b>."
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
