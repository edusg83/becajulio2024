let cartCount = 0;

function viewDetails(name, description, price, imgSrc) {
    document.getElementById('productModalLabel').innerText = name;
    document.getElementById('product-description').innerText = description;
    document.getElementById('product-price').innerText = price;
    document.getElementById('product-img').src = imgSrc;
    let modal = new bootstrap.Modal(document.getElementById('productModal'));
    modal.show();
}

function addToCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = `(${cartCount})`;
}
