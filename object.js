// OBJECT
// Pair Key & Value

// Case. Products: Name, Price
// const productsName = ['Apel', 'Jeruk', 'Mangga']
// const productPrice = [1000, 15000, 30000]
// const productStock = [10, 15, 30]
// const productDiscount = [0, 10, 10]

// name, price, stock, discount disebut dengan key
// 'Apel', 10000, 10, 0 disebut dengan value
// key & value diseut dengan property
const products1 = {
    name: 'Apel',
    price: 10000, 
    stock: 10, 
    discount: 0
}

const products = [
    {
        name: 'Apel',
        price: 10000, 
        stock: 10, 
        discount: 0
    }, 
    {
        name: 'Jeruk', 
        price: 15000, 
        stock: 10, 
        discount: 10
    }
]



// CRUD (Create, Read, Update & Delete)
// CREATE
const student = {
    name: 'Hanif', 
    address: 'Jabodetabek'
}

const campus = new Object()
campus.address = 'BSD'
campus.building = 'GOP-09'

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



// METHOD
// Sebuah Function yang Dimasukan ke Dalam Object
// this ---> Untuk mengakses apapun yang ada di dalam object
const print = {
    name: 'Defryan',

    greeting(address){
        console.log(`Hello, ${this.name}! ${address}`)
    },
    output: () => {
        console.log(`Hello, JCWD ${this.name}`)
    }
}

print.greeting('Bogor')
print.output()

// Chaining Condition
const profile = {
    name: {
        firstName: 'Fery'
    }
}

console.log(profile?.name?.lastName?.a) // Optional Chaining



// DESTRUCTURING ASSIGNMENT
// Konversi property object menjadi variable

const studentData = {
    name: 'Immanuel', 
    address: 'BSD'
}

const {name, address} = studentData
console.log(name)
console.log(address)

// Looping Object (For In)
for(let key in studentData){
    console.log(key)
    console.log(studentData[key]) // studentData[address]
}

console.log(Object.keys(studentData)) // Untuk mendapatkan semua key didalam suatu object
for(let i=0; i<Object.keys(studentData).length; i++){
    console.log(Object.keys(studentData)[i])
    console.log(studentData[Object.keys(studentData)[i]])
}


/*
    Case. Buatlah program untuk merubah price number menjadi price IDR dari data berikut:
        Data:   [
                    { name: 'Jeruk', price: 10000 }, 
                    { name: 'Anggur', price: 15000 }, 
                    { name: 'Semangka', price: 20000 } 
                ]

        Output: [
                    { name: 'Jeruk', price: 'Rp.10.000' }, 
                    { name: 'Anggur', price: 'Rp.15.000' }, 
                    { name: 'Semangka', price: 'Rp.20.000' } 
                ]
*/
const dataProducts = [
    { name: 'Jeruk', price: 10000 }, 
    { name: 'Anggur', price: 15000 }, 
    { name: 'Semangka', price: 20000 } 
]

for(let i=0; i<dataProducts.length; i++){
    console.log(dataProducts[i].price)
    dataProducts[i].price = `Rp. ${dataProducts[i]?.price?.toLocaleString('id-ID')}`
}
console.log(dataProducts)

for(let item of dataProducts){
    item.price = item.price.toLocaleString('id-ID', {style:'currency', currency: 'IDR'})
}