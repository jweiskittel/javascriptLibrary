// Arrow functions / Fat arrow functions / fat arrow functions are expressions

function coffee() {
    console.log('coffee is tasty')
}

// let function name = parameters => {}

let coffee = () => {
    console.log('coffee is really tasty')
}

coffee()

let cats = (kitten, puppy) => {console.log(`I have ${kitten} cat and ${puppy} dogs.`)}

cats(1, 3)

// Block body
let apples = (x) => {console.log(x, 'apples for dinner')}

// Concise body - only works with one parameter and/or one action.
let apples = x => console.log(`${x} apples for dinner.`)

//line breaks are bad

let func = () => console.log('good')

// let function = ()
//   => console.log('bad') Fat arrow functions must remain on one line