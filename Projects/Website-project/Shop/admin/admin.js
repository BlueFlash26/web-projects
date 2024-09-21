const emailElem = document.getElementById('emailInput');
const passwordElem = document.getElementById('passwordInput');
const imageInputElem = document.querySelector('.js-product-image-input');
const priceInputElem = document.querySelector('.js-product-price-input');
const nameInputElem = document.querySelector('.js-product-name-input');
const starsInputElem = document.querySelector('.js-product-stars-input');
const countsInputElem = document.querySelector('.js-product-counts-input');
let productList = JSON.parse(localStorage.getItem('productList')) || [];
let checkLogin = JSON.parse(sessionStorage.getItem('isLogin')) || false;
let shopItem;
renderProducts();
let accounts = [
    {
        email: 'amazon@email.com',
        password: 'password'
    }
]


function isLoggedIn() {
    if (checkLogin === true) {
        document.getElementById('authentication').style.display = 'none';
        document.getElementById('adminInterface').style.display = 'flex';
    } else if (checkLogin === false) {
        document.getElementById('authentication').style.display = 'flex';
        document.getElementById('adminInterface').style.display = 'none';         
    }
}


function LogOut() {
    checkLogin = sessionStorage.removeItem('isLogin')
    isLoggedIn();
    location.reload();
}
document.querySelector('.js-logout-btn').addEventListener('click', LogOut);
isLoggedIn();


function confirmAcc() {
    email = emailElem.value;
    password = passwordElem.value;
    for (let i = 0; i < accounts.length; i++) {
        const account = accounts[i];
        if (email === account.email && password === account.password) {
            checkLogin = sessionStorage.setItem('isLogin', 'true');
        } else {
            alert('incorrect Password');
        }
    }
    location.reload();
    isLoggedIn();
}
document.querySelector('.js-login-btn').addEventListener('click', confirmAcc);


function extractFilename(path) {
    if (path.substr(0, 12) == "C:\\fakepath\\")
        return path.substr(12);
    return path;
}

function addNewProduct() {
    if (priceInputElem.value && nameInputElem.value) {
        product = {
            image: extractFilename(imageInputElem.value),
            name: nameInputElem.value,
            rating: {
                counts: countsInputElem.value,
                stars: starsInputElem.value
            },
            price: priceInputElem.value,
            quantity: 0
        }
        productList.push(product);
        localStorage.setItem('productList', JSON.stringify(productList));
        imageInputElem.value = '';
        nameInputElem.value = '';
        priceInputElem.value = '';
        starsInputElem.value = '';
        countsInputElem.value = '';
        renderProducts();
    } else {
        alert('fill all the required fields first.');
    }
}
document.querySelector('.js-add-new-product-btn').addEventListener('click', addNewProduct);


function deleteProduct(productIndex) {
    productList.splice(productIndex, 1);
    localStorage.setItem('productList', JSON.stringify(productList));
    renderProducts();
}


function renderProducts() {
    let productsHTML = '';

    for (let i = 0; i < productList.length; i++) {
        shopItem = productList[i];
        productsHTML += `
        <div class="product-div">
            <div class="product-image-container">
                <img src="../images/${shopItem.image}">
            </div>
            <h2>${shopItem.name}</h2>
            <h3>Price: $${(shopItem.price / 100).toFixed(2)}</h3>
            <h3>Stars: ${shopItem.rating.stars}</h3>
            <h3>Counts: ${shopItem.rating.counts}</h3>
            <button class="delete-product-btn" onclick="deleteProduct(${i})">Delete product</button>
        </div>
        `
    }
    document.getElementById('products').innerHTML = productsHTML;
}