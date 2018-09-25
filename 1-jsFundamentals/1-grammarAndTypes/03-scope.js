// What is scope?
// JS has local and global scopes
// Variables in the global scope can be accessed by functions
// Global scope
var x = 12

//Local scope - local to the function
function scope(){
  var x = 33  // If 'var' is removed, output will show 33, 33. It will reassign x as 33 once the scope function is called
  console.log(x)
}
scope()     
console.log(x)

// Block scope, var does not respect the scope inside of the if statement, let does

function varTest(){
    var scope = 1
    if (true) {
        var scope = 2
        console.log(scope)
    }
    console.log(scope)
}
varTest()

function letTest(){
    let scope = 1
    if (true) {
        let scope = 2
        console.log(scope)
    }
    console.log(scope)
}
letTest()

function constTest() {
    const scope = 1
    if (true) {
        const scope = 2
        console.log(scope)
    }
    console.log(scope)
}
constTest()

// let & const respect block scope, var does not