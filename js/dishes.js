const dishes = [
    {
        categories: ["juices"],
        image: "img/juices/detox.png",
        name: "Monday Detox",
        description: "One <b>cucumber</b>, one <b>green apple</b>, two <b>celery</b> stalks, a handful of <b>spinach</b>, half a <b>lemon</b>, and a small piece of <b>ginger</b>."
    },
    {
        categories: ["juices"],
        image: "img/juices/ace.png",
        name: "Vitamin Boost",
        description: "ACE juice made with two <b>oranges</b>, two <b>carrots</b>, and one <b>lemon</b>."
    },
    {
        categories: ["brunch", "vegetarian"],
        image: "img/brunches/omelette.png",
        name: "Omelette",
        description: "French-style omelette with <b>eggs</b> cooked just right. Add optional <b>ham</b> and <b>melty mozzarella</b>."
    },
    {
        categories: ["brunch"],
        image: "img/brunches/morning-rush.png",
        name: "Morning Rush",
        description: "A hearty blend of <b>scrambled eggs</b> and <b>ham</b>, perfect for a quick and satisfying start to your day. A quick dish to prepare and ready to go in no time."
    },
    {
        categories: ["brunch", "vegetarian"],
        image: "img/brunches/morning-love.png",
        name: "Morning Love",
        description: "A delightful brunch dish of <b>toasted bread</b> layered with <b>Frischkäss</b> (fresh cheese), topped with <b>scrambled eggs</b> and <b>sliced avocado</b>."
    },
    {
        categories: ["brunch"],
        image: "img/brunches/ragnar.png",
        name: "Ragnar",
        description: "Viking-inspired feast of <b>toasted bread</b>, topped with <b>Frischkäss</b> (fresh cheese), <b>scrambled eggs</b>, <b>crispy bacon</b>, <b>rucola</b>, <b>cherry tomatoes</b>, and <b>sliced avocado</b> on the side."
    },
    {
        categories: ["brunch"],
        image: "img/brunches/white-lagertha.png",
        name: "White Lagertha",
        description: "A fresh and light brunch featuring <b>toasted bread</b> topped with <b>scrambled eggs</b>, fresh <b>rucola</b>, sliced <b>cherry tomatoes</b>, <b>ham</b>, and creamy <b>burrata cheese</b> to finish."
    },
    {
        categories: ["starters", "vegetarian"],
        image: "img/starters/pao-de-queijo.png",
        name: "Pão de Queijo",
        description: "A Brazilian cheese bread made with <b>tapioca flour</b>, <b>cheese</b>, and <b>egg</b>."
    },
    {
        categories: ["main", "vegetarian"],
        image: "img/main-dishes/cannelloni.png",
        name: "Cannelloni",
        description: "Cannelloni baked in the oven filled with <b>ricotta</b> and <b>spinach</b>, topped with a layer of <b>tomato sauce</b> and <b>besciamella</b>.",
        chefFavorite: true
    },
    {
        categories: ["main"],
        image: "img/main-dishes/pasta-anchovies.png",
        name: "Pasta with Anchovies",
        description: "<b>Anchovies</b> cooked in <b>olive oil</b> with <b>garlic</b>, then pasta is stirred with cooking water and the anchovy sauce, served with fresh <b>parsley</b>. <b>Breadcrumbs</b> are toasted and then added on top."
    },
    {
        categories: ["main", "vegetarian"],
        image: "img/main-dishes/pasta-capers.png",
        name: "Pasta with Capers",
        description: "A creamy sauce made from <b>capers</b> and <b>garlic</b> is prepared, then lightly fried in a pan with oil. <b>Tomato sauce</b> is added and simmered, before being tossed with pasta until well combined."
    },
    {
        categories: ["main"],
        image: "img/main-dishes/pasta-mushrooms-bacon.png",
        name: "Pasta with Mushrooms and Bacon",
        description: "The <b>bacon</b> is cooked until crispy, <b>mushrooms</b> are sautéed in the remaining bacon fat with a touch of <b>black pepper</b>. Everything is then stirred together in the pan, incorporating a bit of the <b>pasta's boiling water</b> to create a rich and savory sauce."
    },
    {
        categories: ["main", "vegetarian"],
        image: "img/main-dishes/pasta-broccoli.png",
        name: "Pasta with Broccoli",
        description: "The <b>broccoli</b> are first boiled until soft, then sautéed in a pan with <b>garlic</b>. The <b>pasta</b> is cooked in the same water used for the broccoli, then combined and fried together with the broccoli and garlic at the end for extra flavor."
    },
    {
        categories: ["main"],
        image: "img/main-dishes/rice-bacon-peas.png",
        name: "Risotto with Bacon and Peas",
        description: "Rice toasted with butter, then deglazed with white wine. The rice is then slowly cooked using <b>vegetable stock</b>, then complemented by crispy <b>bacon</b> and <b>green peas</b>."
    },
    {
        categories: ["main"],
        image: "img/main-dishes/rice-shrimps-lemon.png",
        name: "Risotto with Shrimps and Lemon",
        description: "Rice toasted with onions, then deglazed with white wine. As the rice slowly absorbs flavorful <b>vegetable stock</b>, <b>shrimps</b> and bright <b>lemon zest</b> are folded in."
    },
    {
        categories: ["main", "vegetarian"],
        image: "img/main-dishes/rice-tomato-burrata.png",
        name: "Risotto with Tomato Sauce and Burrata",
        description: "Rice toasted with onions, then deglazed with white wine. The rice is slowly cooked with <b>tomato sauce</b> and <b>vegetable stock</b>, then topped with cold fresh <b>burrata</b> and a touch of <b>pesto</b>."
    },
    {
        categories: ["main"],
        image: "img/main-dishes/rice-beef.png",
        name: "Rice with Beef",
        description: "Tender <b>beef strips</b> cooked in a rich sauce made with <b>tomato paste</b>, <b>mustard</b>, <b>soy sauce</b>, and <b>cream</b>, with sautéed <b>mushrooms</b> added at the end, served alongside white <b>rice</b>."
    },
    {
        categories: ["main"],
        image: "img/main-dishes/couscous.png",
        name: "Couscous",
        description: "Steamed <b>couscous</b>, served with a flavorful stew of <b>cherry tomatoes</b>, and fried <b>pork sausage</b>.",
        chefFavorite: true
    },
    {
        categories: ["second"],
        image: "img/second-dishes/ossobuco.png",
        name: "Ossobuco with Smashed Potatoes",
        description: "<b>Ossobuco</b> is first fried until golden on each side, then slowly cooked with <b>onions</b>, <b>carrots</b>, <b>celery</b> and <b>beef stock</b> until tender. Served with <b>smashed potatoes</b>."
    },
    {
        categories: ["second"],
        image: "img/second-dishes/tapioca-carne-seca.png",
        name: "Tapioca with Carne Seca",
        description: "<b>Tapioca crepe</b> filled with shredded <b>carne seca</b> (dried beef), <b>cheese</b>, and <b>cream cheese</b>."
    },
    {
        categories: ["second"],
        image: "img/second-dishes/salmon-broccoli.png",
        name: "Salmon with Broccoli",
        description: "Grilled <b>Salmon</b> fillet, served with a side of sautéed <b>broccoli</b>."
    },
    {
        categories: ["second"],
        image: "img/second-dishes/meatballs.png",
        name: "Meatballs",
        description: "Beef <b>meatballs</b> simmered in a rich <b>tomato sauce</b>, served with a side of <b>smashed potatoes</b>."
    },
    {
        categories: ["dessert", "vegetarian"],
        image: "img/desserts/banana-bread.png",
        name: "Banana Bread",
        description: "Cake made with <b>bananas</b>, <b>eggs</b>, <b>flour</b>, <b>cinnamon</b>, <b>milk</b>, <b>nuts</b>, <b>vanilla</b>, and <b>butter</b>.",
        chefFavorite: true
    }
];

function createCard(dish) {
    const isVegeterian = dish.categories.includes('vegetarian');
    const vegeterianIcon = isVegeterian ? `
        <div class="vegetarian-icon">
            🌱
            <div class="vegetarian-tooltip">Vegetarian</div>
        </div>
    ` : '';

    const chefFavoriteLabel = dish.chefFavorite ? `
        <div class="chef-favorite-label">★ Chef Favorite</div>
    ` : '';

    return `
        <div class="card" data-categories="${dish.categories.join(',')}">
            <div class="card-image-container">
                <img src="${dish.image}" alt="${dish.name}">
                ${chefFavoriteLabel}
            </div>
            ${vegeterianIcon}
            <div class="card-content">
                <h2>${dish.name}</h2>
                <p>${dish.description}</p>
            </div>
        </div>
    `;
}
