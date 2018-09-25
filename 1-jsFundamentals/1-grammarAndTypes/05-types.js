// Types

// Boolean is a true or false statement
var bool = true;
console.log(bool);

// Null
var empty = null;
console.log(empty);

// Undefined
var undef = undefined;
console.log(undef);

// Numbers
// Numbers cannot go past 15 characters
var degrees = 90;
console.log(degrees);

var x = 9999999999999999;
console.log(x)

// Strings
let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo)

let first = 1050 + 100;
console.log(first)


let second = '1050' + '100';
console.log(second)

console.log(typeof first)
console.log(typeof second)

var firstName = 'Justin';
var lastName = 'Weiskittel';
var houseNumber = 105;
var aptNumber = '5C';
var street = 'Balmoral Way';
var city = 'Indianapolis';
var state = 'IN';
var zipCode = 46143

console.log(firstName, lastName + ',', houseNumber, street, aptNumber + ',', city + ',', state, zipCode + '.')

// Objects are containers that can hold multiple data types, size is the key, large is the value, they are both a pair
let burritosNow = {
    size: 'large',
    quantity: 4,
    now: true
}

console.log(burritosNow.size)

// Arrays
let burritosLater = ['large', 4, true]
console.log(burritosLater[2])