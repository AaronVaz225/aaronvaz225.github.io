// Cart array
var cart = [];

// Prices for each option
var prices = {
    Color: 100,
    Strings: 20,
    Nut: 5,
    Tuners: 15,
    Pickups: 30
};

// save the cart data to localStorage
function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// load the cart data from localStorage
function loadCartFromStorage() {
    var storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    } else {
        // If no cart data is found, make sure the cart is empty
        cart = [];
    }
    updateCartDisplay();
}

// Call this function when the page loads
window.onload = function () {
    loadCartFromStorage();
};

// Add selected options to the cart
function addToCart() {
    console.log('Adding to Cart...');

    // Check if any option is not selected
    var selectedOptions = document.querySelectorAll('select');
    for (var i = 0; i < selectedOptions.length; i++) {
        if (selectedOptions[i].value === "") {
            alert("Please choose an option for all selections.");
            return; // Stop further execution
        }
    }

    // Reset the cart before adding new items
    cart = [];

    var color = document.getElementById('colorSelect').value;
    var strings = document.getElementById('stringsSelect').value;
    var nut = document.getElementById('nutSelect').value;
    var tuners = document.getElementById('tunerSelect').value;
    var pickups = document.getElementById('pickupSelect').value;

    cart.push({ type: 'Color', value: color, price: prices.Color });
    cart.push({ type: 'Strings', value: strings, price: prices.Strings });
    cart.push({ type: 'Nut', value: nut, price: prices.Nut });
    cart.push({ type: 'Tuners', value: tuners, price: prices.Tuners });
    cart.push({ type: 'Pickups', value: pickups, price: prices.Pickups });

    console.log('Cart after adding:', cart);
    alert('Added to Cart!');
    
    // Call function to update cart items on the cart page
    updateCartDisplay();
    saveCartToStorage(); // Save the cart to localStorage
}

// Function to update cart items on the cart page
function updateCartDisplay() {
    var cartList = document.getElementById('cart-list');
    var totalPriceElement = document.getElementById('total-price');
    var totalPrice = 0;

    // Clear existing content
    cartList.innerHTML = '';

    // Loop through each item in the cart
    cart.forEach(function (item) {
        var listItem = document.createElement('li');
        listItem.textContent = `${item.type}: ${item.value} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);

        // Calculate total price
        totalPrice += item.price;
    });

    // Display total price
    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;

    saveCartToStorage();
}




// for buy now button

// "Buy Now" button click
function handleBuyNowClick() {
    // Clear the cart and update the cart display
    cart = [];
    updateCartDisplay();

    // pop-up message
    alert('Thank you for your purchase!');
}

// Add an event listener to the "Buy Now" button
var buyNowButton = document.getElementById('buy-now-button');
if (buyNowButton) {
    buyNowButton.addEventListener('click', handleBuyNowClick);
}