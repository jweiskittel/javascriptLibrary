let promise = new Promise(function(resolve, reject){
    setTimeout(() => {
        if (false) {
            resolve('success')
        } else {
            reject('failure :(')
        }
    }, 3000);
})

promise
    .then(resolve => {
        return resolve + ' we are returning from our first .then'
    })
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    })

console.log('not from the promise')