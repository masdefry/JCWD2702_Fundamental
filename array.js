// ARRAY
// Sekumpulan Data yang Disimpan di Sebuah Wadah
// [..., ..., ...]
//   0 ,  1 ,  2

// Ex. Collection of Data Students: Dito, Mesakh, Prabu
// let student1 = 'Dito'
// let student2 = 'Mesakh'
// let student3 = 'Prabu'
let students = ['Dito', 'Mesakh', 'Prabu']
let data = [100, true, false, undefined, null, 'Gilang', 'JCWD-2702']
let random = [
    [
        [
            'JCWD', '2702'
        ]
    ]
]

// CRUD (Create, Read, Update, Delete)
// CREATE
let campusPwd = ['BSD', 'JKT', 'BTM']

// READ 
console.log(campusPwd[0])
console.log(campusPwd[2])
console.log(campusPwd[100]) // Undefined

// UPDATE
campusPwd[2] = 1000
console.log(campusPwd)

// DELETE
delete campusPwd[2]
console.log(campusPwd)



// METHOD
const fruits = ['Pisang', 'Mangga', 'Semangka']
// Push: Menambahkan Data Baru di Index Paling Akhir
fruits.push('Manggis')

// Unshift: Menambahkan Data Baru di Index Paling Awal
fruits.unshift('Durian')

// Pop: Menghapus Data di Index Paling Akhir
fruits.pop()
fruits.pop()

// Shift: Menghapus Data di Index Paling Awal
fruits.shift()
console.log(fruits)

// Length
const numbers = [1, 2, 3]
console.log(numbers.length)

// Slice
const alphabet = ['a', 'b', 'c', 'd', 'e']
console.log(alphabet.slice(0, 3)) // Index ke-3 Not Include!

// IndexOf: Pencarian Index Suatu Data
const cars = ['Toyota', 'Daihatsu', 'Honda']
console.log(cars.indexOf('Toyota')) // 0
console.log(cars.indexOf('toyota')) // -1 (Not Found)

// Sort
const arrNumbers = [100, 50, 3, 1, 10]
console.log(arrNumbers.sort((a, b) => a-b)) // ASC
console.log(arrNumbers.sort((a, b) => b-a))

// Splice: Menambah, Menghapus, Mengupdate Data
// arr.splice(index, totalToDelete/totalToUpdate, newData)
// Menghapus
const foods = ['Burger', 'Pizza', 'Cilok']
foods.splice(0, 2) // Menghapus Data di Index ke-0, sebanyak 1
console.log(foods)

// Mengupdate
const drinks = ['Boba', 'Es Teh Manis Solo', 'Kopi']
drinks.splice(0, 2, 'Jus', 'Soft Drink')
console.log(drinks)

// Menambah
const city = ['Depok', 'Tangerang', 'Jaksel']
city.splice(0, 0, 'Kab. Tangerang')
city.splice(5, 0, 'Jakbar')
console.log(city)



// Case. Odd/Even Array
// Ex.  Input   : [1, 4, 5, 8, 10]
//      Output  : ['Odd', 'Even', 'Odd', 'Even', 'Even']
const arrNums = [1, 4, 5]
const output = [] // [Odd] [Odd, Even] [Odd, Even, Odd]
for(let i=0; i < arrNums.length; i++){
    if(arrNums[i] % 2 === 0){
        output.push('Even')
    }else{
        output.push('Odd')
    }
}
console.log(output)



// Case. Filtering type of string Only
// Input    : ['hello', 123, true, undefined, 'jcwd']
// Output   : arrString = ['hello', 'jcwd']
//            totalData = 2
const randoms = ['hello', 123, true, undefined, 'jcwd']
const arrOutput = []

for(let i=0; i < randoms.length; i++){
    if(typeof randoms[i] === 'string') arrOutput.push(randoms[i])
}

console.log(arrOutput)
console.log(arrOutput.length)