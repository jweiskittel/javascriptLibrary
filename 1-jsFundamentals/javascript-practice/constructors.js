class User {
    constructor(first, last, e) {
        this.f = first
        this.l = last
        this.email = e
    }
}

var userOne = new User('Paul', "O'Connor", 'poconnor@elevenfifty.org')
console.log(userOne.first)
console.log(userOne.f)
console.log(userOne.l)
console.log(userOne.email)
console.log(userOne)


class Cars {
    constructor(make, model, year) {
        this.ma = make
        this.mo = model
        this.y = year
    }
}

let monte = new Cars('Chevy', 'Monte Carlo', '2001')
console.log(`${monte.ma} ${monte.mo} ${monte.y}`)

