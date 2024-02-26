// .forEach, .map, .filter
// .forEach: Tidak menghasilkan array baru
// .map & .filter: Menghasilkan array baru

const numbers = ['A', 'B', 'C']
numbers.forEach((value) => {
    item = item+'A'
}) // undefined
console.log(numbers)

const newNumbers2 = numbers.map((_, index) => {
    return _
}) // ['A', 'B', 'C']

const newNumbers3 = numbers.filter((item, index) => {
    return item === 'A'
}) // ['A']

console.log(newNumbers2)
console.log(newNumbers3)