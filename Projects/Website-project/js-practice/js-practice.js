let product = {
    name: 'shirt',
    price: '$30'
}

const jsonString = JSON.stringify(product);
console.log(jsonString);

const backToObject = JSON.parse(jsonString);
console.log(backToObject);


const object1 = {
    message: 'Good!',
    price: 199
};
//destruction object -easier way to take property out of an object.
const { message, price } = object1
console.log(message.toUpperCase());
console.log(price);
//short hand property. 
const object2 = {
    message,
    method() {
        console.log('shorthand method.');
    }
};
console.log(object2);
/*
short hand method 
const object2 = {
    method: function function1() {
        console.log('shorthand method.');
    }
}
*/
object2.method();