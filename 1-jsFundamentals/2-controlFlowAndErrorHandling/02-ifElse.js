// If Else statements

let weather = 60;

if (weather > 40 && weather < 80) {
    console.log('Go outside')
} else {
    console.log('stay inside')
}

let name = 'juSTin';

if (name[0] == name[0].toUpperCase()) {
    let firstLetter = name[0] + name.slice(1).toLowerCase();
    console.log(firstLetter)
} else {
    let secondLetter = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log(secondLetter)
}

// Else If statements

let coffee = 'hot';

if (coffee == 'hot') {
    console.log('do something')
} else if (coffee == 'lukewarm') {
    console.log('do something else')
} else {
    console.log('do something else again')
}

let age = 23

if (age <= 17) {
    console.log()
} else if (age >=18 && age <=20) {
    console.log()
} else if (age >=21 && age <=24) {
    console.log()
} else if (age <=25) {
    console.log()
}