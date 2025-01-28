const newArrivalsContent = document.querySelector(".new-arrivals-bottom");

const product = {
    name: "Camiseta Oversized",
    brand: "Gucci",
    image: {
        src: "https://trueshop.co/cdn/shop/files/Medellin-Oversized-T-Shirt---Cream-1_1800x1800.jpg?v=1730466532",
        alt: "Medellin Oversized T-Shirt - Cream"
    },
    price: {
        original: 95.50,
        discount: 50
    },
    colors: [
        [222, 284, 135],
        [33, 111, 204],
        [45, 87, 44]
    ]
};

const colorButton = (color) => {
    const button = document.createElement("button");
    button.classList.add("product-color");
    button.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;

    return button;
};

const createProductCard = (product) => {
    const productCard = document.createElement("article"); productCard.classList.add("product-card");
    productCard.innerHTML = `
<a href="#">
    <img class="product-card_image" src="${product.image.src}" alt="${product.image.alt}">
</a>
<a href="#" style="text-decoration: none;">
    <h3 class="product-card_title">${product.name}</h3>
</a>
<span class="product-card_brand">${product.brand}</span>
<div class="product-card_prices">
    <!-- Discount price -->
    <span class="product-card_discount-price">${product.price.discount === 0
            ? product.price.original
            : product.price.discount}</span>
    <!-- Original price -->
    <span class="product-card_original-price">${product.price.original}</span>
</div>
<div class="product-card_colors"></div>
<button class="product-card_buy">Comprar</button>`;

    const productColorBox = productCard.querySelector(".product-card_colors");
    product.colors.forEach((color) => {
        productColorBox.appendChild(colorButton(color));
    });

    newArrivalsContent.appendChild(productCard);
};

newArrivalsContent.innerHTML = "";

const getProducts = async () => {
    return fetch("https://fakestoreapi.com/products").then((response) => response.json());
};

const mountProducts = async () => {
    const products = await getProducts();

    products.forEach((product) => {
        const tempProduct = {
            name: product.title,
            brand: product.category,
            image: {
                src: product.image,
                alt: product.title
            },
            price: {
                original: product.price,
                discount: product.price * 0
            },
            colors: [
                [222, 284, 135],
                [33, 111, 204],
                [45, 87, 44]
            ]
        }
        createProductCard(tempProduct);
    });
};

mountProducts();

// createProductCard(product);
// createProductCard(product);
// createProductCard(product);
// createProductCard(product);
// createProductCard(product);
// createProductCard(product);
// createProductCard(product);
// createProductCard(product);