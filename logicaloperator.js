// LOGICAL OPERATOR
// OPERATOR PEMBANDING UNTUK BEBERAPA KONDISI
// || OR
// && AND
// ! NOT

// OR
// Apabila salah satu kondisi bernilai true, maka hasil akhir akan TRUE
// Apabila ingin hasil akhirnya FALSE, maka semua kondisi harus bernilai false
console.log(1 === 1 || 2 === 2) // TRUE || TRUE ---> TRUE
console.log(1 === '1' || 2 === 2) // FALSE || TRUE ---> TRUE
console.log(1 === '1' || 2 === '2') // FALSE || FALSE ---> FALSE

// AND
// Apabila salah satu kondisi bernilai false, maka hasil akhir akan FALSE
// Apabila ingin hasil akhirnya TRUE, maka semua kondisi harus bernilai TRUE
console.log('1' === 1 && 2 === 2) // FALSE && TRUE ---> FALSE
console.log(1 == '1' && 2 !== 2) // TRUE && FALSE ---> FALSE
console.log(1 === 1 && 2 == '2' && 3 === 3) // TRUE && TRUE && TRUE

// ! NEGASI/KEBALIKAN
console.log(!(3 < 5)) // !TRUE ---> FALSE
console.log(!(1 === 1 && 1 === '1')) // TRUE && FALSE ---> !FALSE ---> TRUE