// Arrays

// let arr = [];

// console.log(typeof arr)
// console.log(students instanceof Array) // instanceof is used to determine of you are dealing with an array or an object

let students = [23, true, false, 'Justin', 'Kyle', ['Amira', 'James']]

if (typeof students === 'object' && students instanceof Array === true) {
    console.log(`Hello ${students[5][0]}, you look nice today`)
}
 // Accessing an array inside of an array

(typeof students === 'object' && students instanceof Array === true) ? console.log(`Hello ${students[5][0]}, you look nice today`) : console.log('nope')

let food = ['pizza', 'tacos', 'bbq', 'ramen', 'fillet', 'brussel sprouts']

for (let value of food) {
    console.log(value)
}                          //These do the same thing, but the in loop is preferred because
                           //it looks the natural way to pull values from an array
for (let q in food) {
    console.log(food[q])
}


let food = ['pizza', 'tacos', 'bbq', 'ramen', 'fillet', 'brussel sprouts']

food.push('cheesecake') // Adds new data to the array

food.splice(3, 1, 'spaghetti', 'chicken')  // Removes data from the array starting at the index you designate
                                           // then removes data depending on how many items you want removed
                                           // then adds as many items as you want

food.splice(5, 0, 'beer')    // This will simply add beer to the array without deleting anything in the position you want it in

food.pop()   // .pop will delete the last item in the array

food.forEach((value, number) => {console.log(number); console.log(value)})

// for (let f in food) {
//     console.log(food[f])
// }

let movies = ['Happy Gilmore', 'Billy Madison', 'Avengers']

movies.push('Interstellar')

movies.splice(2, 1, 'Dumb and Dumber')

movies.forEach(title => console.log(title))

// .length gives you the amount of indexes in your array

let newArr = [1,2,3,4,5,6,7,8,9,10]
console.log(newArr.length)
console.log(newArr.toString()) // turns the array into a string

let mine = ['hi', 'hey', 'hello', 'bye']
console.log(mine.length)
console.log(mine.toString())
mine.forEach((value, index) => {console.log(value); console.log(index)})

let arr = [1,2,3,4,5]
if (arr instanceof Array === true) {
   let revArr = arr.reverse()
   revArr.forEach(value => console.log(value))
}



function pigLatin(phrase) {
    let igpay = phrase.toLowerCase().split(' ')
    let atinlay = []
    igpay.forEach(i => {
        atinlay.push(i.replace(i, i.slice(1) + i[0] + 'ay '))
    })
    console.log(atinlay.join(''))
}

pigLatin('hello friend')







let colors = ['red', 'blue', 'green', 'white', 'black', 'purple', 'orange', 'yellow', 'maroon', 'gold']
let numbers = ['st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th']

function list(x, y) {
    
    y.forEach((value, index) => console.log((index+=1) + value, 'is', x[index-=1]))
}

list(colors, numbers)
