let baseURL = 'https://swapi.co/api/people'
let select = document.querySelector('select')
let section = document.querySelector('section')
let list = document.querySelector('ul')
let option = document.querySelector('option')
let url;

option.addEventListener('click', fetchMovies)



fetch(baseURL)
.then(function(results) {
    return results.json()
})
.then(function(json) {
    console.log(json)
    dropdown(json)
})
.catch(function(err) {
    console.log(err)
})



function dropdown(json) {
    for(i = 0; i <= json.results.length; i++) {
        let item = document.createElement('option')
        item.textContent = json.results[i].name
        item.setAttribute('class', 'names')
        select.appendChild(item)
    }
}