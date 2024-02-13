// Multiplication Integer
const number = 9
for(let i=1; i<=10; i++){
    console.log(`${number} x ${i}`)
}

// Palindrome
// Kata yang dibalik menyerupai kata aslinya
// Ex. madam ---> madam; kodok ---> kodok; katak ---> katak;
let world = 'apapun'
let reverseWorld = '' // 'n'; 'nu'; 'nup' dst...

for(let i=world.length-1; i>=0; i--){ // i=5; TRUE; i=4; TRUE; i=3; TRUE
    reverseWorld += world[i] // world[5]; world[4]; world[3]
}
if(world === reverseWorld){
    console.log('Is Palindrome')
}else{
    console.log('Not Palindromer')
}


// CURRENCY FORMAT
let money = 100000 // 1.000,00
money = money.toString()
let countZero = 0 // 1
let result = '' 
for(let i=money.length-1; i >= 0; i--){
    if(money[i] === '0' && countZero !== 3){ 
        countZero++
        result += money[i]
    }else if(money[i] !== '0'){
        result += money[i]
    }

    if(countZero === 3){
        result += `.`
        countZero=0
    }
}
console.log(result.split('').reverse().join(''))

// console.log(money.toLocaleString('id-ID'))


// Replace
const text = 'Hello'
const textToReplace = 'ell'
console.log(text.replace(textToReplace, ''))



// Capitalize Each World
const txt = 'hello world jcwd'
let newTxt = ''

for(let i=0; i < txt.length; i++){
    if(i===0 || txt[i-1] === ' '){
        newTxt += txt[i].toUpperCase()
    }else{
        newTxt += txt[i]
    }
}
console.log(newTxt)


// SWAP CASE 
const texttt = 'Hello'
let output = ''
for(let i=0; i < texttt.length; i++){
    if(texttt[i] === texttt[i].toUpperCase()){
        output += texttt[i].toLowerCase()
    }else{
        output += texttt[i].toUpperCase()
    }
}
console.log(output)