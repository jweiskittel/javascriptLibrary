const instructors = [
    { name: 'Quincy', specialty: 'Quantum Mechanics', medals: 7},
    { name: 'Kenn', specialty: 'Norse Mythology', medals: 5},
    { name: 'Paul', specialty: 'Tuvan throat singing', medals: 8},
    { name: 'Aaron', specialty: 'Entomology', medals: 4},
    { name: 'Carolyn', specialty: 'Kung Fu', medals: 2},
    { name: 'Tom', specialty: 'Chemistry', medals: 3}
]

let mostMedals = instructors.filter(medals => medals.medals >= 5)
console.log(mostMedals)

const instructorInfo = instructors.filter(instructor => instructor.name === 'Aaron')
console.log(instructorInfo) 