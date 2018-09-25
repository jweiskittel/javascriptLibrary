let baseURL = 'https://swapi.co/api/'
let url;
let peopleBtn = document.querySelector('.people')
let planetsBtn = document.querySelector('.planets')
let starshipsBtn = document.querySelector('.starships')
let speciesBtn = document.querySelector('.species')
let section = document.querySelector('section')


peopleBtn.addEventListener('click', fetchPeople)
planetsBtn.addEventListener('click', fetchPlanets)
starshipsBtn.addEventListener('click', fetchShips)
speciesBtn.addEventListener('click', fetchSpecies)

function fetchPeople() {
    let url = `${baseURL}people/`
    fetch(url)
    .then(function(result) {
        return result.json()
    })
    .then(function(json) {
        console.log(json)
        displayResults(json)
    })
    .catch(function(err) {
        console.log(err)
    })
}

function fetchPlanets() {
    let url = `${baseURL}planets/`
    fetch(url)
    .then(function(result) {
        return result.json()
    })
    .then(function(json) {
        displayResults(json)
    })
    .catch(function(err) {
        console.log(err)
    })
}

function fetchShips() {
    let url = `${baseURL}starships/`
    fetch(url)
    .then(function(result) {
        return result.json()
    })
    .then(function(json) {
        displayResults(json)
    })
    .catch(function(err) {
        console.log(err)
    })
}

function fetchSpecies() {
    let url = `${baseURL}species/`
    fetch(url)
    .then(function(result) {
        return result.json()
    })
    .then(function(json) {
        displayResults(json)
    })
    .catch(function(err) {
        console.log(err)
    })
}

function displayResults(json) {
    while (section.firstChild) {
        section.removeChild(section.firstChild)
    }
    let items = json.results
    let list = document.createElement('ol')
    if (items.length === 0) {
        console.log('No results')
    } else {
        for(i = 0; i < items.length; i++) {
            let listItem = document.createElement('li')
            listItem.textContent = items[i].name
            section.appendChild(list)
            list.appendChild(listItem)
        }
    }
}