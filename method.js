// Method
// Shortcut Untuk Memanipulasi Data

// - STRING
// Slice: Memotong
let text = 'Hello, World!'
console.log(text.slice(0, 5)) // text.slice(indexStart, indexEnd) ---> indexEnd Not Include

// Length: Untuk Menghitung Jumlah Karakter
let name = 'Defryan'
console.log(name.length)

// toUpperCase/toLowerCase
let campus = 'bsd'
console.log(campus.toUpperCase())

// Substring: startIndex < endIndex. Apabila startIndex > endIndex Akan di Swap
let greeting = 'Hello'
console.log(greeting.substring(3, 0))

// Replace
let txt = 'Hai Kamu'
console.log(txt.replace('a', 'x'))
console.log(txt.replace(/a/g, 'x'))

// Split: Convert String to Array
let campusPwd = 'Bsd'
console.log(campusPwd.split('s'))

// - NUMBER
// toString
let number = 10
console.log(number.toString())

let decimal = 0.999
console.log(Number(decimal.toFixed()))

// - DATE DATA TYPE
let now = new Date()
console.log(now)
console.log(now.getFullYear())
