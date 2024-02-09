// Case. Buatlah Pengkondisian untuk Menentukan Nilai dengan Kategori sbb:
//          >= 90 ---> Lulus Baik!
//          >= 70 ---> Lulus!
//          < 70 ---> Tidak Lulus!

const nilai = 80
if(nilai >= 70){
    console.log('Lulus')
}else{
    console.log('Tidak Lulus')
}

// TERNARY OPERATOR
nilai >= 70? console.log('Lulus') : console.log('Tidak Lulus');
nilai >= 90? 'Lulus Baik' : nilai >= 70? 'Lulus' : 'Tidak Lulus';