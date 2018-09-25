// Callback - a function executed by another function
// - usually occurs when data needs to be processed or modified in some way so that it can be later used within the original function
// - used to make things happen in a specific order

// Promises - represents the eventual completion (or failure) of an asynchronous operation, and its resulting value
// 3 states of promises:
// - Pending
// - Resolved
// - Rejected

function first() {
    setTimeout(() => {
        console.log('this is the first function')
    }, 500);
    }
function second() {
    console.log('this is the second function')
}

first()
second()

