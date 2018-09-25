var starWarsPeopleList = document.querySelector('ul')

fetch('https://swapi.co/api/people')
.then(response => {
    return response.json()
})
.then(json => {
    let people = json.results
    for (p of people) {
        let listItem = document.createElement('li')
        listItem.innerHTML = '<p>' + p.name + '</p>'
        starWarsPeopleList.appendChild(listItem)
    }
})