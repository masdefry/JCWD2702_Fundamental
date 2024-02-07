// MUTABLE (Copy by Reference)
// Variable yang Valuenya Bisa Berubah Ketika di Copy
let array1 = ['a', 'b', 'c']
let array2 = array1 
array2[0] = 'd'
console.log('Array1:')
console.log(array1)
console.log('Array2:')
console.log(array2)

let dataStudent1 = {
    name: 'Ryan', 
    hobby: 'Ngoding'
}

let dataStudent2 = dataStudent1 
dataStudent2.name = 'Defryan'
console.log(dataStudent1)
console.log(dataStudent2)

// IMMUTABLE ARRAY
let arr1 = ['BSD', 'JKT']
let arr2 = [...arr1] // ... Spread Operator // arr2 = ['BSD', 'JKT']
arr2[1] = 'BDG'
console.log(arr1)
console.log(arr2)

// IMMUTABLE (Copy by Value)
// Variable yang Valuenya Tidak Bisa Dirubah
let str1 = 'Hello'
let str2 = str1
str2 = 'Hello Hai'
// console.log(str1)
// console.log(str2)