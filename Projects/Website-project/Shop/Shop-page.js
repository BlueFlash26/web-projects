const productsElem = document.getElementById('products');
let productList = JSON.parse(localStorage.getItem('productList')) || [];
let cartList = JSON.parse(localStorage.getItem('cartList')) || [];
let product = {};
let shopItem;
renderProducts();



function renderProducts() {
    let productsHTML = '';

    for (let i = 0; i < productList.length; i++) {
        shopItem = productList[i];
        productsHTML += `
        <div class="product-div">
            <div class="product-image-container">
                <img src="images/${shopItem.image}">
            </div>
            <h2>${shopItem.name}</h2>
            <h3>Price: $${(shopItem.price / 100).toFixed(2)}</h3>
            <button class="add-to-cart-btn" onclick="addToCart(${i})">Add to cart</button>
        </div>
        `
    }
    document.getElementById('products').innerHTML = productsHTML;
    document.querySelector('.js-cart-count').innerHTML = cartList.length;
}



function addToCart(product) {
    cartItem = productList[product];

    cartList.forEach(cartItem => {
        if (cartItem.quantity > 0) {
            cartItem.quantity += 1;
        } else {
            cartList.push(cartItem);
            cartItem.quantity = 1;
        }
    });
    localStorage.setItem('cartList', JSON.stringify(cartList));
    document.querySelector('.js-cart-count').innerHTML = cartList.length;
}


