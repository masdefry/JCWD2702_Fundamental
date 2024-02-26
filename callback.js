// CALLBACK
// Function yang Dijadikan Argument oleh Function Lain

// Case. Function Penjumlahan, Hasil dari Function Penjumlahan Ditampilkan
//       di Dalam Function Lain

function Penjumlahan(num1, num2){
    return num1 + num2 
}

function Print(result){
    console.log(result)
}

const resultPenjumlahan = Penjumlahan(3, 5) // resultPenjumlahan = 8
Print(resultPenjumlahan) // Print(8)


// 1. Indirect Callback
function Penjumlahan(num1, num2, cb){ // num1 = 3, num2 = 5, cb = Print
    return cb(num1 + num2) 
}
function Print(result){
    console.log(result)
}
Penjumlahan(3, 5, Print)

// 2. Direct Callback
function Penjumlahan(num1, num2, cb){ // num1 = 3, num2 = 5, cb = Print
    return cb(num1 + num2) 
}
Penjumlahan(3, 5, (item) => {
    console.log(item)
})