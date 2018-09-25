/*
Loops offer a quick and easy way to do something repeatedly. There are many different kinds of loops but they all do roughly the same thing:
for statement
do while statement
while statement
labeled statement
break statement
continue statement
for in statement
for of statement
*/

/* for (setup variable; conditional; operator) {
    console.log(variable);
}
*/

for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let x = 0; x <= 20; x += 2) {
    console.log(x);
}

for (let x = 10; x >=0; x -= 1) {
    console.log(x);
}

for (let x = 0; x >= -24; x -= 2) {
    console.log(x)
}

let name = "Justin"
for (let x = 0; x <= 5; x++) {
    console.log(name.charAt(x))
}


let sum = 0
for (let x = 1; x <= 50; x += 1) {
    sum += x;
    console.log(sum)
}