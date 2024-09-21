const cartList = JSON.parse(localStorage.getItem('cartList'));
renderCart();

function renderCart() {
    let cartHtml = '';
    for (let productIndex = 0; productIndex < cartList.length; productIndex++) {
        const product = cartList[productIndex];
        cartHtml += `
        <div class="cart-product">
            <h2>${product.name}</h2>
            <h3>${((product.price * product.quantity) / 100).toFixed(2)}</h3>
            <h3>${product.quantity}</h3>
            <button class="add-to-cart-btn" onclick="addProduct(${productIndex})">Add</button>
            <button class="delete-product-btn" onclick="removeProduct(${productIndex})">remove</button>
        </div>
        `;
    }
    document.querySelector('.js-quantity').innerText = `Items in cart ${cartList.length}`;
    document.querySelector('.js-cost').innerText = `Total cost $${getTotalPrice().toFixed(2)}`;
    document.getElementById('cartItems').innerHTML = cartHtml;
    localStorage.setItem('cartList', JSON.stringify(cartList));
}


function getTotalPrice() {
    let totalPrice = 0;
    cartList.forEach(product => {
        totalPrice += (Number(product.price * product.quantity) / 100);
    });
    return totalPrice;
}

function removeProduct(productIndex) {
/*
    if (productIndex.quantity > 1) {
        cartList[productIndex].quantity -= 1;
    } else {
        
    }*/
    cartList.forEach(cartItem => {
        if (cartItem.quantity > 0) {
            cartItem.quantity -= 1;
        } else {
            cartList.splice(productIndex, 1);
            cartItem.quantity = 0;
        }
    });
    renderCart();
} 
/*

function renderCart() {
    let cartItemsHTML = '';
    for (let i = 0; i < cartList.length; i++) {
        const cartItem = cartList[i];
        cartItemsHTML += `
        <div>
            <img src="${cartItem.productImage}">
            <h2>${cartItem.productName}</h2>
            <h3>Price: $${cartItem.productPrice}</h3>
            <button class="add-to-cart-btn" onclick="addToCart(${i})">Add</button>
            <button class="delete-product-btn" onclick="removeProduct(${i})">remove</button>
        </div>
        `
        }
    document.querySelector('.cart-items').innerHTML = cartItemsHTML;
}
renderCart();



function addToCart(product) {
    cartList.push(product);
    localStorage.setItem('cartList', JSON.stringify(cartList));
    renderCart();
}


function renderCart() {
    let cartItemsHTML = '';
    for (let i = 0; i < cartList.length; i++) {
        const cartItem = cartList[i];
        cartItemsHTML += `
        <div>
        <img src="${cartItem.productImage}">
        <h2>${cartItem.productName}</h2>
        <h3>Price: ${cartItem.productPrice}</h3>
        <button class="add-to-cart-btn" onclick="addToCart({i})">Add</button>
        <button class="delete-product-btn" onclick="deleteProduct({i})">remove</button>
        </div>
        `
    }
    document.querySelector('.js-cart-count').innerHTML = cartList.length;
    document.querySelector('.cart-items').innerHTML = cartItemsHTML;
}
*/


/*
let quantity = 0;
let totalPrice = 0;
let quantityElem = document.querySelector('.js-quantity');
let costElem = document.querySelector('.js-cost');
let statusElem = document.querySelector('.js-status');
function emptyCart() {
    quantityElem.innerHTML = 'Cart is empty.'; 
    costElem.innerHTML = '';
}
emptyCart();



function addItem(name, count, price) {
    document.createElement('div')
    if (quantity < 20) {
        quantity += count;
        totalPrice += price * count;
        statusElem.innerHTML = 'Item added succesfully.';
        quantityElem.innerHTML = `Cart: ${name} (${quantity}) `;
        costElem.innerHTML = 'Total price: $' + totalPrice; 
    } else {
        alert('Cart is full');
    }
}


function removeItem(name, count, price) {
    if (quantity >= 1) {
        quantity -= count;
        totalPrice -= price * count;
        statusElem.innerHTML = 'Item removed succesfully.';
        if (quantity != 0) {
            quantityElem.innerHTML = `Cart: ${name} (${quantity}) `;
            costElem.innerHTML = 'Total price: $' + totalPrice;
        } else {
            emptyCart();
        }
    } else {
        alert('Cart is already empty');
        emptyCart();
    }
}


function resetCart() {
    if (quantity > 0) {
        quantity = 0;
        totalPrice = 0;
        statusElem.innerHTML = 'Cart reset succesfully.';
        quantityElem.innerHTML = `Cart is empty`;
        costElem.innerHTML = 'Total price: $' + totalPrice;
    } else {
        alert('Cart is already empty');
        emptyCart();
    }
}

while (quantity = 0) {
    statusElem.innerHTML = 'Cart is empty'; 
}
*/