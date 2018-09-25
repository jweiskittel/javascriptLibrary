// Parameters - variables can be used as parameters
let dog = 'cat'
function pet(animal) {
    console.log(`I have a ${animal} as a pet.`)
}

pet(dog)

/*
function pet(animal) {

}

pet(cat)

is the same as 'let animal = cat'
*/

function fullName(first, last) {
    console.log(`Hello, my name is ${first} ${last}.`)
}

fullName('Justin', 'Weiskittel')