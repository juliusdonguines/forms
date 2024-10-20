let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    displayCart();
}

function displayCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '<h2>Your Cart</h2>';
    
    if (cart.length === 0) {
        cartDiv.innerHTML += '<p>Your cart is empty.</p>';
        return;
    }

    let total = 0;
    cart.forEach(item => {
        cartDiv.innerHTML += `<pdocument.getElementById>${item.product} - $${item.price}</pdocument.getElementById('shop-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const shopName = document.getElementById('shop-name').value;
    const pickupAddress = document.getElementById('pickup-address').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const confirmationDiv = document.getElementById('confirmation');
    confirmationDiv.classList.remove('hidden');
    confirmationDiv.innerHTML = `
        <h2>Confirmation</h2>
        <p>Shop Name: ${shopName}</p>
        <p>Pickup Address: ${pickupAddress}</p>
        <p>Email: ${email}</p>
        <p>Phone Number: ${phone}</p>
    `;

    // Reset form fields
    document.getElementById('shop-form').reset();
});
`;

        total += item.price;
    });
    
    cartDiv.innerHTML += <p>Total: $${total.toFixed(2)}</p>;
}
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const identityProof = document.getElementById('identity-proof').files[0];
    const businessLicense = document.getElementById('business-license').files[0];
    const salesTaxRegistration = document.getElementById('sales-tax-registration').files[0];

    const confirmationDiv = document.getElementById('confirmation');
    confirmationDiv.classList.remove('hidden');
    confirmationDiv.innerHTML = `
        <h2>Confirmation</h2>
        <p>Identity Proof: ${identityProof.name}</p>
        <p>Business License/Permit: ${businessLicense.name}</p>
        <p>Sales Tax Registration: ${salesTaxRegistration.name}</p>
    `;

    // Reset form fields
    document.getElementById('registration-form').reset();
});
et total = 0;

function addToCart(name, price) {
    const cart = document.getElementById('cart');
    const totalElement = document.getElementById('total');

    const item = document.createElement('li');
    item.textContent = ${name} - $${price};
    cart.appendChild(item);

    total += price;
    totalElement.textContent = total;
}document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const productTitle = document.getElementById('product-title').value;
    const productDescription = document.getElementById('product-description').value;
    const price = document.getElementById('price').value;
    const productImage = document.getElementById('product-image').files[0];

    const confirmationDiv = document.getElementById('confirmation');
    confirmationDiv.classList.remove('hidden');
    confirmationDiv.innerHTML = `
        <h2>Confirmation</h2>
        <p>Product Title: ${productTitle}</p>
        <p>Product Description: ${productDescription}</p>
        <p>Price: $${parseFloat(price).toFixed(2)}</p>
        <p>Product Image: ${productImage.name}</p>
    `;

    // Reset form fields
    document.getElementById('product-form').reset();
});
