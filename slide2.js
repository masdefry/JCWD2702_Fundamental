// CRUD (Create, Read, Update & Delete)
// CREATE
const student = {
    name: 'Hanif', 
    address: 'Jabodetabek'
}

// READ
console.log(student.name)
console.log(student.address)
console.log(student['name'])

// UPDATE
student.name = 'Mesakh'
console.log(student)

// DELETE
delete student.name 
console.log(student)