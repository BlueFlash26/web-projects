//cannot be a reserved keyword
//should be a meaningful batmanName/label
//cannot be started with number
//cannot contain a space or hyphen(-)
let batmanName = "batman";
batmanName = "Batman";

// log message on the console
console.log(batmanName);

//constant variable cannot be reassigned
const supermanName = "Superman";
console.log(supermanName);

//objects let/const
let batman = {
    name: "Batman",
    age: 35,
    isSuperHero: true
};

//array
let selectedColors = ["Black", "Blue"]
//adding in 3rd index
selectedColors[2] = "Red"
console.log(selectedColors)

//to check the type of an element
typeof selectedColors

//functions
function greet() {
    console.log("hello world");
}

//function with parameters
//performing a task
function superHero(name, age) {
    console.log("Hello! " + name + "\nAge: " + age);
}

//calculating
function square(number) {
    return number * number;
}

//calling function with multiple different arguments
superHero("Batman", 35);
superHero("Superman", 40);

//calling function calculating square
console.log("Square of 4 is ", square(4));

//change styles on window scroll function
window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.documentElement.scrollTop > 50) {
        document.getElementById("backToTopBtn").style.display = "flex";
    } else {
        document.getElementById("backToTopBtn").style.display = "none";
    }

}

/*
let degree = 0;
let i = 1;
while (i < 38) {
    document.getElementById("body").style.rotate = "2 0 0 " + degree + "deg";
    const pfp = document.getElementById("profile");
    pfp.getElementsByClassName("pfp-image")[0].style.rotate = degree + "deg";
   pfp.getElementsByClassName("pfp-image")[1].style.rotate = degree + "deg";
   degree += 10;
    i++;
}
*/