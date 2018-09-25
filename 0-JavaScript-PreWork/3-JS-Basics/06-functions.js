function hello() {
    console.log("Hello World!");
}

hello();
hello();
hello();

function pacersWon(){
    console.log("Pacers won!");
}
pacersWon();

function numberEntered(x) {
    console.log("The number you entered was: " + x);
}
numberEntered(7);

function addAnyTwoNumbers(x, y) {
    console.log(x + y);
}
addAnyTwoNumbers(7, 12);

function subtractTwoNumbers(firstNum, secondNum) {
    console.log(secondNum - firstNum);
}
subtractTwoNumbers(5, 7);

function getMyTaxReturnAndDoMyTaxesAndStuff(a, x, y, z) {
    let myInc = a * x;
    let myTaxes = myInc - y;
    let total = myTaxes + z;
    console.log(total);
}
getMyTaxReturnAndDoMyTaxesAndStuff(10000, 7, 50000, 100);

function add(x, y) {
    let sum = x + y;
    console.log(sum);
    return sum;
}

add(3, 4)

function name(firstName, lastName) {
    let wholeName = firstName + " " + lastName;
    console.log(wholeName);
    return wholeName;
}

name("Justin", "Weiskittel");

function pet(name, breed) {
    let cat = name + " is a " + breed;
    console.log(cat);
    return cat;
}

pet("Pepper", "Maine Coon");

function quickMath(q, p) {
    let tax = 0.07;
    let aftertax = p + (p * tax);
    let totalPrice = aftertax * q;
    console.log(totalPrice);
}

quickMath(5, 2)