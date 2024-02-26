// O(1) Contant Time
// Berapapun Input Datanya, Waktunya Akan Selalu Sama

// Case. Find Lowest & Highest Price
const fruits = [
    { name: 'Apel', price: 10000 },
    { name: 'Jeruk', price: 15000 },
    { name: 'Anggur', price: 20000 }
]

function ConsTime(){
    const lowest = fruits[0]
    const highest = fruits[fruits.length-1]
}

// O(N) Linier Time
// Waktu Prosesnya Mengikuti Jumlah Datanya
const numbers = [3, 1, 4, 5, 2]

function FindHighest(){
    // let max = numbers[0] // 3

    // for(let i=1; i < numbers.length; i++){
    //     if(max < numbers[i]) max = numbers[i]
    // }

    for(let i=1; i < numbers.length; i++){
        if(2 === numbers[i]) return true
    }
}

// O(N^)
const numbers1 = [1, 2, 3, 4, 5]

function FindHighest(){
    for(let i=0; i < numbers1.length; i++){
        for(let j=0; j < numbers1.length; j++){
            console.log('Hello')
        }
    }
}