let count = '';
const fieldElem = document.querySelector('.js-calc-field');
fieldElem.innerHTML = 0;

function calculation(number) {
    count += number;
    fieldElem.innerHTML = count;
}

function reset() {
    count = '';
    fieldElem.innerHTML = '0';
}

function result() {
    const finalCount = eval(count);
    fieldElem.innerHTML = finalCount;
}