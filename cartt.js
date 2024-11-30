let cart1 = [];

function loadCartOnCartPage() {
    const storedCart = localStorage.getItem('cart1');
    if (storedCart) {
        cart1 = JSON.parse(storedCart);
        updateCartDisplay();
    }
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    let total = 0;
    cart1.forEach(item => {
        const cartItem = document.createElement('li');
        const itemImage = document.createElement('img');
        itemImage.src = item.imageUrl;
        itemImage.alt = item.name;
        itemImage.style.width = '100px'; // Adjust size as needed
        cartItem.style.color="A1EEBD";
        cartItem.style.fontSize="30px";
cartItemsContainer.style.backgroundColor="#F6D6D6"
cartItemsContainer.style.margin="30px 30px"

        cartItem.innerText = `${item.name}  - $${item.price}    x     ${item.quantity}`;
        cartItem.prepend(itemImage);
        cartItemsContainer.appendChild(cartItem);
        total += item.price * item.quantity;


        
    });

    document.getElementById('total-price').innerText = total;
}

function proceedToCheckout() {
    alert("Proceeding to checkout...");
}

window.onload = loadCartOnCartPage;
