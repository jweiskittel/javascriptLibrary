console.log(scissors)
var scissors = 'pink scissors'

console.log(cats)
let cats = 'the best'

/*
Let and const do not get hoisted - you can only use them after you declare them. This is a good thing for intentional programming
*/

hiTom()

function hiTom(){
    console.log('hi tom')
}
tom()
// function expression
let tom = function hi(){
    console.log('hiii tom')
}

// Functions are hoisted, function expressions are not