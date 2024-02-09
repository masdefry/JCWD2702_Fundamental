// LOOPING: Perulangan
// Case. Client request dibuatkan aplikasi menampilkan kata "Hello, JCWD" sebanyak 10x
const txt = 'Hello, JCWD'
// console.log(txt)
// console.log(txt)
// console.log(txt)
// console.log(txt)
// console.log(txt)
// console.log(txt)
// console.log(txt)
// console.log(txt)
// console.log(txt)

// // WHILE
// // Start; End; ExitWay;
// /*
//     while(condition){
//         Block of Code
//     }
// */
// let start = 1 // 1 ---> 2 ---> 3 ---> ... ---> 10 ---> 11
// while(start <= 10){ // TRUE ---> TRUE ---> TRUE ---> ... ---> TRUE ---> FALSE
//     console.log(txt) // 1x ---> 2x ---> 3x ---> ... ---> 10x
//     start++
// }

// let init = 1
// while(init < 3){ // 1<3? TRUE ---> 2<3? TRUE ---> 3<3? FALSE
//     console.log('Hello') // 1x ---> 2x
//     init++ // 1 -> 2 ---> 2 -> 3
// }

// let counter = 1
// while(counter <= 10){
//     // console.log(counter)
//     counter++
// }

// // DO - WHILE
// /*
//     do{
//         Block of Code
//     }while(condition)
// */
// let initVal = 1
// do{
//     console.log(initVal) // 1 ---> 3 ---> 5
//     initVal+= 2 // 1 -> 3 ---> 3 -> 5 ---> 5 -> 7
// }while(initVal <= 5) // 3 <= 5? TRUE ---> 5 <= 5? TRUE ---> 7 <= 5? FALSE



// let initCount = 1
// do{
//     console.log(initCount) // 1x
//     initCount++ // initCount = 2
// }while(initCount < 1) // 2 < 1? False

// // FOR LOOP: Simplify While
// /*
//     for(start; condition; exitway){
//         Block of Code
//     }
// */
// for(let i=1; i<=5; i++){
//     console.log(i) // 1 ---> 2 ---> 3
// }



// // Case. Buatlah Program Untuk Menampilkan Angka dari 10 ke 1
// for(let i=10; i>=1; i--){
//     console.log(i)
// }



// // BREAK & CONTINUE
// // BREAK: Menghentikan Sebuah Process
// // CONTINUE: Melompati Sebuah Process

for(let i=1; i<5; i++){
    if(i === 1) continue;
    console.log(i)
}

for(let i=1; i<5; i++){
    if(i !== 2) break; 
    console.log(i) 
}