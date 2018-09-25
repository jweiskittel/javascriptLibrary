class User {
    constructor(name){
        this.name = name
        this.type = "Trial User"
    }
    greet(){
        console.log('Welcome back, ' + this.name)
    }
    status(){
        console.log('Current status: ' + this.type)
    }
}

class TrialUser extends User {
    trialEnding(){
        console.log('Your trial will be ending soon, ' + this.name + '.' + ' Would you like to join our porgram?')
    }
}

var anonDude = new User('Anonymous')
anonDude.greet()
anonDude.status()

var trialUser = new TrialUser('Paul')
trialUser.greet()
trialUser.status()
trialUser.trialEnding()

class BannedUser extends User {
    banned(){
        console.log(`${this.name}, you have been banned for excessive trolling.`)
    }
}
var banner = new BannedUser('Justin')
banner.banned()