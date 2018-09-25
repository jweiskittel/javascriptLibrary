// For Of loops need 'iterable' properties
// For Of loops do not work with objects

let student = {name: 'Peter', awesome: true, degree: 'JavaScript', week: 1}

for (key of student) {
    console.log(key)
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll']

for (cat of catArray) { // will provide the values 
    console.log(cat, 'says meow')
}

for (cat in catArray) { // will provide the indexes
    console.log(cat)
}