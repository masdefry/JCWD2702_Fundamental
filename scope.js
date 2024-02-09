// SCOPE
// VAR
// - Boleh Memiliki Nama yang Sama
// - Value nya Bisa Di Update
// - Tidak Mengenal Scope

// LET
// - Tidak Boleh Memiliki Nama yang Sama
// - Value nya Bisa Di Update
// - Mengenal Scope

// CONST 
// - Tidak Boleh Memiliki Nama yang Sama
// - Value nya Tidak Bisa Di Update
// - Mengenal Scope

// {

// }

var student = 'Prabu'

{
    var student = 'Dito'
}

console.log(student)



let campus = 'BSD'

{
    let campus = 'JKT'
}
console.log(campus)

{
    let classPwd = 'JCDM'
    {
        let classPwd = 'JCVD'
    }
    console.log(classPwd)
}

let classPwd = 'JCWD'














