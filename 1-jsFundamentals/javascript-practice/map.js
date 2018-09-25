const instructors = [
    { name: 'Quincy', specialty: 'Quantum Mechanics'},
    { name: 'Kenn', specialty: 'Norse Mythology'},
    { name: 'Paul', specialty: 'Tuvan throat singing'},
    { name: 'Aaron', specialty: 'Entomology'},
    { name: 'Carolyn', specialty: 'Kung Fu'}
]

let instructor_names = []
for (i = 0; i < instructors.length; i++) {
    instructor_names.push(instructors[i].name)
}
console.log(instructor_names)

// this is the same as:

const instructorNames = instructors.map(i => i.name)
console.log(instructorNames)

const instructorInfo = instructors.map(instructor => instructor.name + ': ' + instructor.specialty)
console.log(instructorInfo)