// Your JavaScript code goes here
// Product data (you can load this data dynamically from a backend)
const products = [
  {
    id: 1,
    name: "Product 1",
    image: "product1.jpg",
    price: 29.99,
  },
  {
    id: 2,
    name: "Product 2",
    image: "product2.jpg",
    price: 19.99,
  },
  // Add more products as needed
];

// Function to render products on the page
function renderProducts() {
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = "";

  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product";

    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="price">$${product.price.toFixed(2)}</p>
      <button class="buy-btn" onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productsContainer.appendChild(productElement);
  });
}

// Function to add a product to the cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);

  if (product) {
    cart.push(product);
    updateCart();
  }
}

// Function to update the cart
function updateCart() {
  const cartContainer = document.getElementById("cart");
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.style.display = "none";
  } else {
    cartContainer.style.display = "block";
    cart.forEach((product) => {
      const cartItem = document.createElement("div");
      cartItem.className = "product";

      cartItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h4>${product.name}</h4>
        <p class="price">$${product.price.toFixed(2)}</p>
      `;

      cartItems.appendChild(cartItem);
    });
  }
}

// Function to show the checkout form
function showCheckout() {
  const checkoutSection = document.getElementById("checkout");
  checkoutSection.style.display = "block";
}

// Function to hide the checkout form and clear the cart
function hideCheckout() {
  const checkoutSection = document.getElementById("checkout");
  checkoutSection.style.display = "none";
  cart = [];
  updateCart();
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
});

const checkoutForm = document.getElementById("checkout-form");
checkoutForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Handle form submission (you can send the order details to the backend here)
  hideCheckout();
});

// Sample cart data (you can save this data to the backend when the user places an order)
let cart = [];
