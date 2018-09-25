let favoriteSuperheroes = [
    {name: "Wonder Woman", universe: "DC"},
    {name: "Loki", universe: "Marvel"},
    {name: "Aquaman", universe: "DC"},
    {name: "Black Widow", universe: "Marvel"},
    {name: "Thor", universe: "Marvel"},
    {name: "Hawkeye", universe: "Marvel"},
    {name: "Doctor Strange", universe: "Marvel"},
    {name: "The Flash", universe: "DC"},
    {name: "Scarlet Witch", universe: "Marvel"}
]

for (i = 0; i < favoriteSuperheroes.length; i++) {
    if (favoriteSuperheroes[i].universe === "Marvel") {
        let Marvel = []
        Marvel.push(favoriteSuperheroes[i].name)
        console.log(Marvel)
    }
}

// Arrow functions & Return

function hello(name) {
    console.log(`Hello there, ${name}`)
}
hello('Justin')

// store as a variable - remember this prevents it from being hoisted
// when there is one parameter you don't need parenthases
// the right side of the => is what is in {} normally
let hello = name => console.log(`Hello there, ${name}`)
hello('Justin')

function fullName(first, last) {
    return first + ' ' + last
}
console.log(fullName('Carolyn', 'Harris'))
// return is the last thing in a function - nothing under return runs
// get things outside of the scope of the function
// can access info outside of the function
// can only have one return per function


let fullName = (first, last) => `${first} ${last}`
console.log(fullName('Justin', 'Weiskittel'))
// if the arrow function is only one line, return does not need to be typed

// Loops are convenient for repetitive tasks - but ES6 introduced better ways of iterating over arrays


// Map
// allows us to perform the same action on every item in an array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let biggerNumbers = numbers.map(number => number * 4)
// make a new variable to store new array in
// oldArray.map(a name => what we want to do to each item)
console.log(numbers)
console.log(biggerNumbers)



let lowercase = ['justin', 'kylee', 'brandon', 'andrew']
let uppercase = lowercase.map(name => name.toUpperCase())
console.log(uppercase)

// Filter
// we can use this to go through an array and only return items that match our condition

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let oddsOnly = numbers.filter(number => number % 2 !== 0)
console.log(oddsOnly)

let names = ['Tom', 'Carolyn', 'Justin', 'Paul', 'Elizabeth']
let shortNames = names.filter(name => name.length <= 4)
console.log(shortNames)


let favoriteSuperheroes = [
    {name: "Wonder Woman", universe: "DC"},
    {name: "Loki", universe: "Marvel"},
    {name: "Aquaman", universe: "DC"},
    {name: "Black Widow", universe: "Marvel"},
    {name: "Thor", universe: "Marvel"},
    {name: "Hawkeye", universe: "Marvel"},
    {name: "Doctor Strange", universe: "Marvel"},
    {name: "The Flash", universe: "DC"},
    {name: "Scarlet Witch", universe: "Marvel"}
]

let Marvel = favoriteSuperheroes.filter(names => names.universe === 'Marvel')
console.log(Marvel)


let people = [
    {name: "Paul", title: "Instructor"},
    {name: "Carolyn", title: "Instructor"},
    {name: "Tyler", title: "Instructor"},
    {name: "David", title: "Instructor"},
    {name: "Kenn", title: "Instructor"},
    {name: "Tom", title: "Instructor"},
    {name: "Quentin", title: "Student"},
    {name: "Aurelia", title: "Student"},
    {name: "Hope", title: "Student"},
    {name: "Caleb", title: "Student"},
    {name: "Daniel", title: "Student"},
    {name: "Austin", title: "Student"},
    {name: "Robin", title: "Admin"},
    {name: "Alex", title: "Admin"},
    {name: "Bob", title: "Admin"},
    {name: "Chris", title: "Admin"},
    {name: "Abi", title: "Admin"}
  ]

// let instructor = people.filter(teach => teach.title === "Instructor")
// console.log(instructor)

// let student = people.filter(person => person.title === 'Student')
// console.log(student)

// let admin = people.filter(person => person.title === 'Admin')
// console.log(admin)

let filterArray = (array, title) => {
    let newArray = array.filter(person => person.title === title)
    return newArray
}

console.log(filterArray(people, 'Instructor'))



let object = {
    prop1: 'hello',
    prop2: 'hey',
    prop3: 'goodbye',
    prop4: 'later'
}

function switchProps(object, property1, property2) {
    let newObject = object
    newObject.prop1 = property2
    newObject.prop2 = property1
    console.log(newObject)
}

switchProps(object, object.prop1, object.prop2)
console.log(object)



let arr1 = [10, 20, 30, 40, 50, 60]
let arr2 = [5, 3, 2, 5]

let multiply = (arr1, arr2) => {
        let newArr = []
        if((arr1, arr2) instanceof Array === true && (arr1, arr2) !== '') {
        for(i = 0; i < arr2.length; i++) {
            let product = arr1[i] * arr2[i]
            newArr.push(product)
        } 
        for(i = arr2.length; i < arr1.length; i++) {
            newArr.push(arr1[i])
        }
    } else {
        console.log('wrong')
    }
    console.log(newArr)
}

multiply(arr1, arr2)
