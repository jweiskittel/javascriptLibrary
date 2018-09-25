// For In loops
// great for iterating over values in an object
// these work when the properties are 'enumerable'

let student = {name: 'Peter', awesome: true, degree: 'JavaScript', week: 1}

for (let key in student) {
    console.log(key); //prints the keys
    console.log(student[key]); //prints the values of the keys
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll']

for (let cat in catArray) {
    console.log(cat); //prints the index
    console.log(catArray[cat]); //prints the values of the index
}

let name = 'juStin'
let name2;
for (let letter in name) {
        if (letter == 0) {
            name2 = name[letter].toUpperCase();
        } else {
            name2 += name[letter].toLowerCase();
        }
    } 
console.log(name2);

