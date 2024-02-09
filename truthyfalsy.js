// TRUTHY FALSY
// Nilai Non-Boolean yang Akan Dikonversi Menjadi Boolean Ketika Bertemu Conditional Statement

console.log(Boolean(0))
console.log(Boolean(NaN))
console.log(Boolean(1))
console.log(Boolean(' '))


// Case. Validasi Input Apakah Kosong atau Tidak
const input = ''

if(input.length === 0){
    console.log('Input Harus Diisi')
}else{
    console.log('Input Sudah Benar')
}

if(input){ 
    console.log('Input Sudah Benar')
}else{
    console.log('Input Harus Diisi')
}