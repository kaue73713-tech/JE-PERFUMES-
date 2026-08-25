// Número do WhatsApp com código do Brasil
const WHATSAPP_NUMBER = "5545999299109";



// Lista de perfumes
const products = [
    {
    id: 1,
    name: "Pisa",
    category: "masculino",
    occasion: "versatil",
    price: 0.00,
    description: "Cítrico • Amadeirado • Fresco",
    image: "IMAGENS/PISA LATTAFA.webp"
},
{
    id: 2,
    name: "Asad Elixir",
    category: "masculino",
    occasion: "noite",
    price: 0.00,
    description: "Especiado • Amadeirado • Intenso",
    image: "IMAGENS/ASAD ELIXIR.webp"
},
{
    id: 3,
    name: "Sabah Al Ward",
    category: "feminino",
    occasion: "noite",
    price: 0.00,
    description: "Floral • Doce • Baunilhado",
    image: "IMAGENS/Sabah Al Ward.webp"
},
{
    id: 4,
    name: "Fakhar Rose",
    category: "feminino",
    occasion: "versatil",
    price: 0.00,
    description: "Floral • Frutado • Elegante",
    image: "IMAGENS/Fakhar Rose.webp"
},
{
    id: 5,
    name: "Khamrah",
    category: "unissex",
    occasion: "noite",
    price: 0.00,
    description: "Doce • Especiado • Quente",
    image: "IMAGENS/Khamrah.jpg"
},
{
    id: 6,
    name: "Club de Nuit",
    category: "masculino",
    occasion: "versatil",
    price: 0.00,
    description: "Cítrico • Amadeirado • Marcante",
    image: "IMAGENS/club de nuit.jpg"
},
{
    id: 7,
    name: "Musaman White",
    category: "feminino",
    occasion: "versatil",
    price: 0.00,
    description: "Cremoso • Especiado • Amadeirado",
    image: "IMAGENS/musaman.jpg"
},
{
    id: 8,
    name: "Afeef",
    category: "unissex",
    occasion: "versatil",
    price: 0.00,
    description: "Frutado • Floral • Amadeirado",
    image: "IMAGENS/afeef unisex.jpg"
},
{
    id: 9,
    name: "Khanjar",
    category: "masculino",
    occasion: "noite",
    price: 0.00,
    description: "Especiado • Couro • Defumado",
    image: "IMAGENS/khanjar.jpg"
},
{
    id: 10,
    name: "Marina Bourbon",
    category: "feminino",
    occasion: "versatil",
    price: 0.00,
    description: "Floral • Frutado • Adocicado",
    image: "IMAGENS/marina bourbon.webp"
},
{
    id: 11,
    name: "Asad Yara Rose",
    category: "feminino",
    occasion: "dia",
    price: 0.00,
    description: "Floral • Frutado • Delicado",
    image: "IMAGENS/YARA ROSE.webp"
},
{
    id: 12,
    name: "Asad Yara",
    category: "feminino",
    occasion: "versatil",
    price: 0.00,
    description: "Doce • Cremoso • Floral",
    image: "IMAGENS/lattafa yara normal.webp"
},
{
    id: 13,
    name: "Asad Yara Branco",
    category: "feminino",
    occasion: "versatil",
    price: 0.00,
    description: "Floral • Cremoso • Elegante",
    image: "IMAGENS/ASAD BRANCO.jpg"
},
{
    id: 14,
    name: "Asad Bourbon",
    category: "unissex",
    occasion: "noite",
    price: 0.00,
    description: "Baunilhado • Especiado • Amadeirado",
    image: "IMAGENS/ASAD MARROM.jpg"
},
{
    id: 15,
    name: "Asad Tradicional",
    category: "masculino",
    occasion: "noite",
    price: 0.00,
    description: "Especiado • Ambarado • Amadeirado",
    image: "IMAGENS/ASAD TRADICIONAL.webp"
},
{
    id: 16,
    name: "Rose Origami",
    category: "unissex",
    occasion: "versatil",
    price: 0.00,
    description: "Floral • Rosado • Amadeirado",
    image: "IMAGENS/ROSE ORIGAMI.jpg"
},
{
    id: 17,
    name: "Al Noble Wazzer",
    category: "unissex",
    occasion: "noite",
    price: 0.00,
    description: "Amadeirado • Especiado • Intenso",
    image: "IMAGENS/al noble.webp"
},
{
    id: 18,
    name: "Al Noble Safeer",
    category: "unissex",
    occasion: "versatil",
    price: 0.00,
    description: "Cítrico • Amadeirado • Especiado",
    image: "IMAGENS/Al noble Safeer.webp"
},
{
    id: 19,
    name: "Al Noble Ameer",
    category: "masculino",
    occasion: "noite",
    price: 0.00,
    description: "Amadeirado • Especiado • Marcante",
    image: "IMAGENS/Al noble Ameer.jpg"
},
{
    id: 20,
    name: "Asdaaf Ameerat",
    category: "feminino",
    occasion: "versatil",
    price: 0.00,
    description: "Floral • Frutado • Adocicado",
    image: "IMAGENS/Ameerat.webp"
},
{
    id: 21,
    name: "Silver Scent",
    category: "masculino",
    occasion: "noite",
    price: 0.00,
    description: "Aromático • Frutado • Amadeirado",
    image: "IMAGENS/silver scent.jpg"
},
{
    id: 22,
    name: "Atheeri",
    category: "feminino",
    occasion: "dia",
    price: 0.00,
    description: "Floral • Cremoso • Delicado",
    image: "IMAGENS/Atherri.webp"
},
{
    id: 23,
    name: "Calvin Klein",
    category: "masculino",
    occasion: "dia",
    price: 0.00,
    description: "Fresco • Aromático • Limpo",
    image: "IMAGENS/Calvin Klein.webp"
},
{
    id: 24,
    name: "Britney Spears",
    category: "feminino",
    occasion: "versatil",
    price: 0.00,
    description: "Doce • Frutado • Gourmand",
    image: "IMAGENS/Fantasy Britney.webp"
},
{
    id: 25,
    name: "1 Million",
    category: "masculino",
    occasion: "noite",
    price: 0.00,
    description: "Doce • Especiado • Amadeirado",
    image: "IMAGENS/1 million.webp"
},
{
    id: 26,
    name: "Lady Million",
    category: "feminino",
    occasion: "versatil",
    price: 0.00,
    description: "Floral • Frutado • Adocicado",
    image: "IMAGENS/Lady million.webp"
},
{
    id: 27,
    name: "Ferrari Red",
    category: "masculino",
    occasion: "dia",
    price: 0.00,
    description: "Cítrico • Fresco • Aromático",
    image: "IMAGENS/Ferrari red.webp"
},
{
    id: 28,
    name: "Club N1",
    category: "masculino",
    occasion: "versatil",
    price: 0.00,
    description: "Aromático • Amadeirado • Moderno",
    image: "IMAGENS/Club N1.jpg"
},
{
    id: 29,
    name: "Tharwah Gold",
    category: "feminino",
    occasion: "versatil",
    price: 0.00,
    description: "Floral • Baunilhado • Elegante",
    image: "IMAGENS/Tharwah Gold.jpg"
},
{
    id: 30,
    name: "Vulcan Avenue",
    category: "unissex",
    occasion: "versatil",
    price: 0.00,
    description: "Frutado • Amadeirado • Moderno",
    image: "IMAGENS/Frech avenue.webp"
},
{
    id: 31,
    name: "Dalal",
    category: "feminino",
    occasion: "versatil",
    price: 0.00,
    description: "Doce • Floral • Ambarado",
    image: "IMAGENS/Latafa Dalal.webp"
},
{
    id: 32,
    name: "Invictus",
    category: "masculino",
    occasion: "dia",
    price: 0.00,
    description: "Aquático • Fresco • Aromático",
    image: "IMAGENS/Invctus perfum.webp"
},
{
    id: 33,
    name: "Sauvage Dior",
    category: "masculino",
    occasion: "versatil",
    price: 0.00,
    description: "Aromático • Fresco • Amadeirado",
    image: "IMAGENS/Sauvage Dior.avif"
},
{
    id: 34,
    name: "Afnan 9pm",
    category: "masculino",
    occasion: "noite",
    price: 0.00,
    description: "Doce • Baunilhado • Especiado",
    image: "IMAGENS/Afnan 9pm.webp"
},
{
    id: 35,
    name: "212 Vip Black",
    category: "masculino",
    occasion: "noite",
    price: 0.00,
    description: "Aromático • Doce • Especiado",
    image: "IMAGENS/212 Vip Black.jpg"
},
{
    id: 36,
    name: "Phantom",
    category: "masculino",
    occasion: "versatil",
    price: 0.00,
    description: "Aromático • Doce • Amadeirado",
    image: "IMAGENS/Phantom.webp"
},
{
    id: 37,
    name: "Emper Legend",
    category: "masculino",
    occasion: "dia",
    price: 0.00,
    description: "Cítrico • Aromático • Fresco",
    image: "IMAGENS/Emper Legend.webp"
},
{
    id: 38,
    name: "Lattafa Hala",
    category: "masculino",
    occasion: "noite",
    price: 0.00,
    description: "Especiado • Amadeirado • Quente",
    image: "IMAGENS/Lattafa Hala.webp"
},
{
    id: 39,
    name: "Fakhar Black Kit",
    category: "masculino",
    occasion: "versatil",
    price: 0.00,
    description: "Aromático • Frutado • Amadeirado",
    image: "IMAGENS/Fakhar black Kit.webp"
},
{
    id: 40,
    name: "Fakhar Gold",
    category: "unissex",
    occasion: "noite",
    price: 0.00,
    description: "Floral • Ambarado • Especiado",
    image: "IMAGENS/Fakhar Gold.webp"
},
{
    id: 41,
    name: "Fakhar Platin",
    category: "masculino",
    occasion: "versatil",
    price: 0.00,
    description: "Frutado • Especiado • Aromático",
    image: "IMAGENS/Fakhar Platin.webp"
},
{
    id: 42,
    name: "Ferrari Black",
    category: "masculino",
    occasion: "noite",
    price: 0.00,
    description: "Doce • Amadeirado • Especiado",
    image: "IMAGENS/Ferrari Black.webp"
},
{
    id: 43,
    name: "Asad Zanzibar",
    category: "masculino",
    occasion: "versatil",
    price: 0.00,
    description: "Cremoso • Especiado • Amadeirado",
    image: "IMAGENS/ASAD ZANZIBAR.webp"
},
{
    id: 44,
    name: "Bleu de Chanel",
    category: "masculino",
    occasion: "versatil",
    price: 0.00,
    description: "Cítrico • Aromático • Amadeirado",
    image: "IMAGENS/Bleu de Chanel.webp"
},
{
    id: 45,
    name: "Animale For Man",
    category: "masculino",
    occasion: "versatil",
    price: 0.00,
    description: "Aromático • Couro • Amadeirado",
    image: "IMAGENS/Animale perfum.webp"
},
{
    id: 46,
    name: "Liquid Brun",
    category: "masculino",
    occasion: "noite",
    price: 0.00,
    description: "Baunilhado • Especiado • Doce",
    image: "IMAGENS/Liquid Brun.jpg"
},

];

// Carrinho
let cart = [];

// Quando a página carregar
document.addEventListener("DOMContentLoaded", () => {
    renderProducts(products);
    loadCart();
});

// Mostrar os produtos
// Mostrar os produtos
function renderProducts(productList) {
    const grid = document.getElementById("productsGrid");

    const occasionInfo = {
        dia: "☀️ Dia",
        noite: "🌙 Noite",
        versatil: "✨ Versátil"
    };

    grid.innerHTML = productList.map(product => `
        <article class="product-card">

            <img
                src="${product.image}"
                alt="${product.name}"
                class="product-image"
            >

            <h3>${product.name}</h3>

            <p>${product.description}</p>

            ${product.occasion && occasionInfo[product.occasion]
                ? `<span class="occasion-badge">${occasionInfo[product.occasion]}</span>`
                : ""
            }

            <strong>
                Consulte o Valor
            </strong>

            <button onclick="addToCart(${product.id})">
                <i class="fas fa-shopping-cart"></i>
                Adicionar
            </button>

        </article>
    `).join("");
}

// Filtrar por categoria
function filterProducts(category) {
    if (category === "todos") {
        renderProducts(products);
        return;
    }

    const filteredProducts = products.filter(product => {
        return product.category === category;
    });

    renderProducts(filteredProducts);
}

// Adicionar ao carrinho
function addToCart(productId) {
    const product = products.find(product => product.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (!product) {
        return;
    }

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    updateCart();
}

// Atualizar o carrinho
function updateCart() {
    const cartCount = document.getElementById("cartCount");
    const cartItems = document.getElementById("cartItems");
    const totalPrice = document.getElementById("totalPrice");

    const quantity = cart.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    cartCount.textContent = quantity;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Seu carrinho está vazio.</p>";
        totalPrice.textContent = "R$ 0,00";
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div>
                <strong>${item.name}</strong>
                <p>${formatPrice(item.price)}</p>
            </div>

            <div class="quantity-buttons">
                <button onclick="changeQuantity(${item.id}, -1)">
                    −
                </button>

                <span>${item.quantity}</span>

                <button onclick="changeQuantity(${item.id}, 1)">
                    +
                </button>
            </div>

            <button onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join("");

    const total = cart.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);

    totalPrice.textContent = formatPrice(total);
}

// Aumentar ou diminuir quantidade
function changeQuantity(productId, amount) {
    const item = cart.find(item => item.id === productId);

    if (!item) {
        return;
    }

    item.quantity += amount;

    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    saveCart();
    updateCart();
}

// Remover produto
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);

    saveCart();
    updateCart();
}

// Abrir e fechar carrinho
function toggleCart() {
    document
        .getElementById("cartSidebar")
        .classList.toggle("active");

    document
        .getElementById("overlay")
        .classList.toggle("active");
}


// Enviar pedido para o WhatsApp
function sendToWhatsApp() {
    if (cart.length === 0) {
        alert("Seu carrinho está vazio.");
        return;
    }

    let message = "Olá! Vim pelo catálogo da JÉ Perfumes.\n\n";
    message += "Gostaria de pedir:\n\n";

    cart.forEach(item => {
        message += `${item.quantity}x ${item.name}\n`;
    });

    message += "\nGostaria de confirmar a disponibilidade, o valor e o prazo.";

    const whatsappURL =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
}

// Formatar os preços
function formatPrice(value) {
    return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

// Salvar carrinho no navegador
function saveCart() {
    localStorage.setItem("jePerfumesCart", JSON.stringify(cart));
}

// Carregar carrinho salvo
function loadCart() {
    const savedCart = localStorage.getItem("jePerfumesCart");

    if (savedCart) {
        cart = JSON.parse(savedCart);
    }

    updateCart();
}
