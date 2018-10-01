userSignUp = () => {
    let userName = document.getElementById('userSignUp').value
    let userPass = document.getElementById('passSignUp').value
    console.log(userName, userPass)

    let newUserData = {user: {username: userName, password: userPass}}
    fetch('http://localhost:3000/api/user/createuser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUserData)
    })
    .then(response => response.json())
    .then(response => {
        console.log(response.sessionToken)
        let token = response.sessionToken
        localStorage.setItem('SessionToken', token)
    })
}

userSignIn = () => {
    let userName = document.getElementById('userSignIn').value
    let userPass = document.getElementById('passSignIn').value
    console.log(userName, userPass)

    let newUserData = {user: {username: userName, password: userPass}}
    fetch('http://localhost:3000/api/user/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUserData)
    })
    .then(response => response.json())
    .then(response => {
        console.log(response.sessionToken)
        let token = response.sessionToken
        localStorage.setItem('SessionToken', token)
    })
}

getSessionToken = () => {
    let data = localStorage.getItem('SessionToken')
    console.log(data)
    return data
}