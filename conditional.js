// CONDITIONAL STATEMENT
// Pengkondisian Untuk Memberikan Instruksi Kepada Computer 

// If
/*
    if(condition){ // condition harus terpenuhi
        Block of Code
    }
*/

const score = 80
if(score > 70){ // True
    console.log('Score Passed!')
}

if(score !== 80){ // False
    console.log('Running')
}

if(score == '80'){
    console.log('Execute')
}

// If - Else: Else Default Eksekusi
const point = 70
if(point >= 71){ // False
    console.log('Point Passed')
}else{
    console.log('Point Not Passed')
}

if(point <= 70){ // True
    console.log('Ok')
}else{
    console.log('Not Ok')
}

// If - Else If - Else
const finalScore = 'A'

if(finalScore === 'A'){
    console.log('Nilai Baik')
}else if(finalScore === 'B'){
    console.log('Nilai Cukup')
}else{
    console.log('Nilai Kurang')
}






















const nilaiSiswa = 90
if(nilaiSiswa > 90){
    console.log('Lulus Baik')
}else if(nilaiSiswa > 70){
    console.log('Lulus')
}else{
    console.log('Tidak Lulus')
}












// Case. Buatlah Validasi Untuk Membatasi Jumlah Karakter Phone Number yang di Input oleh User, 
//       dengan Ketentuan:
//          - Apabila Jumlah Karakter 9-14, Tampilkan console.log('Phone Number Valid')
//          - Apabila Jumlah Karakter Kurang dari 9, Tampilkan console.log('Phone Number Not Valid')

let phoneNumber = 62994921 
phoneNumber = phoneNumber.toString()

if(phoneNumber.length < 9){
    console.log('Phone Number Not Valid!')
}else if(phoneNumber.length > 14){
    console.log('Phone Number Not Valid!')
}else{
    console.log('Phone Number Valid!')
}


// SWITCH CASE
const fruit = 'Orange'
switch(fruit){
    case 'Mango':
        console.log(`Ini ${fruit}`)
        break;
    case 'Orange':
        console.log(`Ini ${fruit}`)
        break;
    default: 
        console.log('Fruit Not Defined')
        break;
}