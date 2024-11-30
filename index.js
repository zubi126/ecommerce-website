let cart1 = [];

function addToCart(productName, price, imageUrl) {
    const productIndex = cart1.findIndex(item => item.name === productName);

    if (productIndex !== -1) {
        cart1[productIndex].quantity += 1;
    } else {
        cart1.push({ name: productName, price: price, imageUrl: imageUrl, quantity: 1 });
    }

    updateCart();
    saveCart();
}



function updateCart() {
    // Optionally, update UI if needed
}

function saveCart() {
    localStorage.setItem('cart1', JSON.stringify(cart1));
}





function loadCart() {
    const storedCart = localStorage.getItem('cart1');
    if (storedCart) {
        cart1 = JSON.parse(storedCart);
        updateCart();
    }
}

window.onload = loadCart;
