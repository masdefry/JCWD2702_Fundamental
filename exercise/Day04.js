// Filtering Even Number
const numbers = [2, 4, 10, 11, 13, 15]
const result = []

for(let item of numbers){
    if(item % 2 === 0) result.push(item)
}
console.log(result)

// BMI
const weight = 80
const height = 1.7
const bmi = weight/(height*height)

if(bmi < 18.5){
    console.log('Less Weight')
}else if(bmi >= 18.5 && bmi <= 24.9){
    console.log('Ideal')
}else if(bmi >= 25 && bmi <= 29.9){
    console.log('Overweight')
}else if(bmi >= 30 && bmi <= 39.9){
    console.log('Very Overweight')
}else{
    console.log('Obesity')
}

// FIZZBUZZ
const n = 30

for(let i=1; i <= n; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz')
    }else if(i % 3 === 0){
        console.log('Fizz')
    }else if(i % 5 === 0){
        console.log('Buzz')
    }else{
        console.log(i)
    }
}



// Triangle Pattern
let outputStr = ''
for(let i=1; i<=3; i++){
    for(let j=1; j<=i; j++){
        outputStr += '*'
    }
    outputStr += '\n'
}
console.log(outputStr)