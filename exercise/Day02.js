const number = 10
4 % 2 // 0
10 % 2 // 0
5 % 2 // 1
9 % 2 // 1
if(number % 2 === 0){
    console.log('Bilangan Genap')
}else{
    console.log('Bilangan Ganjil')
}


// PRIME or NOT
// Prima Bilangan yang Habis Dibagi 1 dan Dirinya Sendiri

// 6
// 2 3 4 5
const num = 2
let isPrime = true
for(let i=2; i<num; i++){
    if(num % i === 0){
        isPrime = false
    }
}

if(isPrime === true || num === 2){
    console.log(`${num} is Prime`)
}else if(isPrime === false || num === 1){ // TRUE || FALSE ---> TRUE 
    console.log(`${num} is Not Prime!`)
}



// SUM NUMBER 1 to N
const n = 5
let total = 0 // 1 += 2 += 3 += 4 += 5 = 15
for(let i=1; i<=n; i++){
    console.log(`${i} += total`)
    total += i 
}

console.log(total)

// FACTORIAL
const nFactorial = 6
let result = 1 // 1 *= 2 *= 3 *= 4 *= 5 = 15
for(let i=1; i<=nFactorial; i++){
    console.log(`${i} *= result`)
    result *= i 
}
console.log(result)

// FIBONACI
const max = 6
const arrFibonaci = [0, 1]
for(let i=2; i<=max; i++){
    const nextFibo = arrFibonaci[i-1] + arrFibonaci[i-2]
    arrFibonaci.push(nextFibo)
}
console.log(arrFibonaci[arrFibonaci.length-1])