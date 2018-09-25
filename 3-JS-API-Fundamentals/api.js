const baseURL = 'https://api.spacexdata.com/v2/rockets'

const searchForm = document.querySelector('form')
const spaceShips = document.querySelector('ul')

searchForm.addEventListener('submit', fetchSpace)

function fetchSpace(e) {
    e.preventDefault()
    fetch(baseURL)
    .then(result => {
        return result.json()
    })
    .then(json => {
        displayRockets(json)
    })
    .catch(err => {
        console.log(err)
    })
}

function displayRockets(json) {
    let rockets = json.forEach(r => {
        let rocket = document.createElement('li')
        rocket.innerText = r.name
        spaceShips.appendChild(rocket)
    })
}