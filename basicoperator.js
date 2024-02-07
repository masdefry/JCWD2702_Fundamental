// BASIC OPERATOR

const num1 = 5
const num2 = 3

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)

// Modulus: Sisa Bagi
console.log(10 % 3) // 1
console.log(4 % 4) // 0
console.log(5 % 3) // 2

// MATH OBJECT
console.log(Math.pow(2, 2))
console.log(Math.abs(-10))
console.log(Math.floor(0.9)) // Akan selalu dibulatkan ke bawah
console.log(Math.ceil(0.3)) // Akan selalu dibulatkan keatas
console.log(Math.round(0.5)) // Mengikuti aturan matematik

// STRING CONCATE
let greeting1 = 'Hello'
let greeting2 = 'World!'
console.log(greeting1 + greeting2) // Concate

let number1 = '2'
let number2 = 2
console.log(number1 + number2) // Concate

console.log(2 + 1 + '3') // 3 Number Concate 3 String = '33'
console.log('3' * 3) // 9
console.log('3' / 1) // 3
console.log('3' * '2') // 6

// INCREMENT & DECREMENT
let number = 100
number++ // 101
number-- // 100
console.log(number)

// MODIFY IN PLACE
let num = 10
num = num + 10
console.log(num)

let newNum = 5
newNum += 10
console.log(newNum)


// PREFIX & POSTFIX
let counter = 0
// console.log(++counter) // POSTFIX
// console.log(counter++) // PREFIX