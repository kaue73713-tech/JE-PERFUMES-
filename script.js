// Número do WhatsApp com código do Brasil
const WHATSAPP_NUMBER = "5545999299109";



// Lista de perfumes
const products = [
    {
        id: 1,
        name: "Pisa",
        category: "masculino",
        price: 0.00,
        description: "Perfume masculino marcante e sofisticado.",
        image: "IMAGENS/PISA LATTAFA.webp"
    },
    {
        id: 2,
        name: "Asad Elixir",
        category: "masculino",
        price: 0.00,
        description: "Fragrância intensa, elegante e envolvente.",
        image: "IMAGENS/ASAD ELIXIR.webp"
    },
    {
        id: 3,
        name: "Sabah Al Ward",
        category: "feminino",
        price: 0.00,
        description: "Perfume feminino floral, doce e elegante.",
        image: "IMAGENS/Sabah Al Ward.webp"
    },
    {
        id: 4,
        name: "Fakhar Rose",
        category: "feminino",
        price: 0.00,
        description: "Fragrância feminina delicada e sofisticada.",
        image: "IMAGENS/Fakhar Rose.webp"
    },
    {
        id: 5,
        name: "Khamrah",
        category: "unissex",
        price: 0.00,
        description: "Perfume doce, quente e marcante.",
        image: "IMAGENS/Khamrah.jpg"
    },
    {
        id: 6,
        name: "Club de Nuit",
        category: "masculino",
        price: 0.00,
        description: "Elegante, marcante e com excelente projeção.",
        image: "IMAGENS/club de nuit.jpg"
    },
    {
        id: 7,
        name: "Musaman White",
        category: "feminino",
        price: 0.00,
        description: "Floral sofisticado, leve e muito refinado.",
        image: "IMAGENS/musaman.jpg"
    },
    {
        id: 8,
        name: "Afeef",
        category: "unissex",
        price: 0.00,
        description: "Fragrância equilibrada, moderna e versátil para qualquer ocasião.",
        image: "IMAGENS/afeef unisex.jpg"
    },
    {
        id: 9,
        name: "Khanjar",
        category: "masculino",
        price: 0.00,
        description: "Amadeirado intenso com personalidade marcante.",
        image: "IMAGENS/khanjar.jpg"
    },
    {
        id: 10,
        name: "Marina Bourbon",
        category: "feminino",
        price: 0.00,
        description: "Doce, elegante e perfeito para ocasiões especiais.",
        image: "IMAGENS/marina bourbon.webp"
    },
    {
        id: 11,
        name: "Asad Yara Rose",
        category: "feminino",
        price: 0.00,
        description: "Floral frutado delicado, romântico e envolvente.",
        image: "IMAGENS/YARA ROSE.webp"
    },
    {
        id: 12,
        name: "Asad Yara",
        category: "feminino",
        price: 0.00,
        description: "Doce cremoso com toque floral e ótima fixação.",
        image: "IMAGENS/lattafa yara normal.webp"
    },
    {
        id: 13,
        name: "Asad Yara Branco",
        category: "feminino",
        price: 0.00,
        description: "Aroma suave, elegante e extremamente feminino.",
        image: "IMAGENS/ASAD BRANCO.jpg"
    },
    {
        id: 14,
        name: "Asad Bourbon",
        category: "unissex",
        price: 0.00,
        description: "Amadeirado sofisticado com excelente desempenho.",
        image: "IMAGENS/ASAD MARROM.jpg"
    },
    {
        id: 15,
        name: "Asad Tradicional",
        category: "masculino",
        price: 0.00,
        description: "Especiado marcante com ótima projeção e fixação.",
        image: "IMAGENS/ASAD TRADICIONAL.webp"
    },
    {
        id: 16,
        name: "Rose Origami",
        category: "unissex",
        price: 0.00,
        description: "Rosa sofisticada com toque moderno e refinado.",
        image: "IMAGENS/ROSE ORIGAMI.jpg"
    },
     {
        id: 17,
        name: "Al Noble Wazzer",
        category: "unissex",
        price: 0.00,
        description: "Fragrância intensa, elegante e cheia de personalidade.",
        image: "IMAGENS/al noble.webp"
    },
     {
        id: 18,
        name: "Al Noble Safeer",
        category: "unissex",
        price: 0.00,
        description: "Aroma fresco e sofisticado para qualquer momento.",
        image: "IMAGENS/Al noble Safeer.webp"
    },
     {
        id: 19,
        name: "Al Noble Ameer",
        category: "masculino",
        price: 0.00,
        description: "Amadeirado marcante com elegância e potência.",
        image: "IMAGENS/Al noble Ameer.jpg"
    },
     {
        id: 20,
        name: "Asdaaf Ameerat",
        category: "feminino",
        price: 0.00,
        description: "Floral oriental delicado e muito sofisticado.",
        image: "IMAGENS/Ameerat.webp"
    },
     {
        id: 21,
        name: "Silver Scent",
        category: "masculino",
        price: 0.00,
        description: "Clássico masculino elegante e envolvente.",
        image: "IMAGENS/silver scent.jpg"
    },
     {
        id: 22,
        name: "Atheeri",
        category: "feminino",
        price: 0.00,
        description: "Floral moderno com aroma delicado e marcante.",
        image: "IMAGENS/Atherri.webp"
    },
     {
        id: 23,
        name: "Calvin Klein",
        category: "masculino",
        price: 0.00,
        description: "Fresco, elegante e ideal para o uso diário.",
        image: "IMAGENS/Calvin Klein.webp"
    },
     {
        id: 24,
        name: "Britney Spears",
        category: "feminino",
        price: 0.00,
        description: "Doce, divertido e irresistivelmente feminino.",
        image: "IMAGENS/Fantasy Britney.webp"
    },
     {
        id: 25,
        name: "1 Million",
        category: "masculino",
        price: 0.00,
        description: "Amadeirado adocicado, luxuoso e marcante.",
        image: "IMAGENS/1 million.webp"
    },
     {
        id: 26,
        name: "Lady Million",
        category: "feminino",
        price: 0.00,
        description: "Floral sofisticado com toque adocicado elegante.",
        image: "IMAGENS/Lady million.webp"
    },
     {
        id: 27,
        name: "Ferrari Red",
        category: "masculino",
        price: 0.00,
        description: "Refrescante, vibrante e cheio de personalidade.",
        image: "IMAGENS/Ferrari red.webp"
    },
     {
        id: 28,
        name: "Club N1",
        category: "masculino",
        price: 0.00,
        description: "Masculino moderno com excelente presença.",
        image: "IMAGENS/Club N1.jpg"
    },
     {
        id: 29,
        name: "Tharwah Gold",
        category: "feminino",
        price: 0.00,
        description: "Doce sofisticado com toque oriental envolvente.",
        image: "IMAGENS/Tharwah Gold.jpg"
    },
     {
        id: 30,
        name: "Vulcan Avenue",
        category: "unissex",
        price: 0.00,
        description: "Amadeirado moderno, intenso e versátil.",
        image: "IMAGENS/Frech avenue.webp"
    },
    {
        id: 31,
        name: "Dalal",
        category: "feminino",
        price: 0.00,
        description: "Doce oriental delicado e muito elegante.",
        image: "IMAGENS/Latafa Dalal.webp"
    },
    {
        id: 32,
        name: "Invictus",
        category: "masculino",
        price: 0.00,
        description: "Fresco aquático com excelente desempenho.",
        image: "IMAGENS/Invctus perfum.webp"
    },
    {
        id: 33,
        name: "Sauvage Dior",
        category: "masculino",
        price: 0.00,
        description: "Amadeirado aromático, intenso e sofisticado.",
        image: "IMAGENS/Sauvage Dior.avif"
    },
    {
        id: 34,
        name: "Afnan 9pm",
        category: "masculino",
        price: 0.00,
        description: "Doce especiado com ótima projeção e fixação.",
        image: "IMAGENS/Afnan 9pm.webp"
    },
    {
        id: 35,
        name: "212 Vip Black",
        category: "masculino",
        price: 0.00,
        description: "Intenso, moderno e perfeito para a noite.",
        image: "IMAGENS/212 Vip Black.jpg"
    },
     {
        id: 36,
        name: "Phantom",
        category: "masculino",
        price: 0.00,
        description: "Aromático moderno com toque amadeirado elegante.",
        image: "IMAGENS/Phantom.webp"
    },
    {
        id: 37,
        name: "Emper Legend",
        category: "masculino",
        price: 0.00,
        description: "As notas de topo são: Flor de Laranjeira, Toranja, Limão e Alecrim.",
        image: "IMAGENS/Emper Legend.webp"
    },
    {
        id: 38,
        name: "Lattafa Hala",
        category: "masculino",
        price: 0.00,
        description: "As notas de topo são: Pimenta e Noz-moscada.",
        image: "IMAGENS/Lattafa Hala.webp"
    },
     {
        id: 39,
        name: "Fakhar Black Kit",
        category: "masculino",
        price: 0.00,
        description: "As notas de topo são: Maçã, Bergamota e Gengibre, Lavanda, Sálvia, Bagas de Zimbro e Gerânio",
        image: "IMAGENS/Fakhar black Kit.webp"
    },
     {
        id: 40,
        name: "Fakhar Gold",
        category: "unissex",
        price: 0.00,
        description: "As notas de topo são: Toranja, cardamomo, pimenta-rosa, tuberosa e sal. Âmbar,",
        image: "IMAGENS/Fakhar Gold.webp"
    },
       {
        id: 41,
        name: "Fakhar Platin",
        category: "masculino",
        price: 0.00,
        description: "As notas de topo são: topo de bergamota, pimenta rosa e cardamomo, um coração exótico de goiaba, lavanda e gengibre,",
        image: "IMAGENS/Fakhar Platin.webp"
    },
       {
        id: 42,
        name: "Ferrari Black",
        category: "masculino",
        price: 0.00,
        description: "As notas de topo são: amadeirado e cítrico com toque doce e especiado, combinando notas de maçã vermelha, baunilha e canela.",
        image: "IMAGENS/Ferrari Black.webp"
    },
    {
        id: 43,
        name: "Asad Zanzibar",
        category: "masculino",
        price: 0.00,
        description: "As notas de topo são: Lavanda e pimenta preta Água de coco, íris e sal, Baunilha e incenso",
        image: "IMAGENS/ASAD ZANZIBAR.webp"
    },
      {
        id: 44,
        name: "Bleu de Chanel",
        category: "masculino",
        price: 0.00,
        description: "As notas de topo são: fragrância amadeirada aromática com foco em notas cítricas, frescas e terrosas.",
        image: "IMAGENS/Bleu de Chanel.webp"
    },
{
        id: 45,
        name: "Animale For Man",
        category: "masculino",
        price: 0.00,
        description: "As notas de topo são: abertura fresca de limão e frésia com um coração de lavanda e gerânio, apoiado por uma base forte de couro, musgo de carvalho e vetiver.",
        image: "IMAGENS/Animale perfum.webp"
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
function renderProducts(productList) {
    const grid = document.getElementById("productsGrid");

    grid.innerHTML = productList.map(product => `
        <article class="product-card">
            <img
                src="${product.image}"
                alt="${product.name}"
                class="product-image"
            >

            <h3>${product.name}</h3>

            <p>${product.description}</p>

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
