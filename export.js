// // EXPORT
// // EXPORT DEFAULT: 1 EXPORT
// // EXPORT NAME: MANY EXPORT

// // EXPORT DEFAULT
// // const name = 'Ryan'
// // module.exports = name

// // EXPORT NAME
// const name = 'Aboy'
// const hobby = 'Futsal'

// module.exports = {
//     name, hobby
// }



function Print(username){
    return `Hello, ${username}`
}

function Output(){
    console.log('Hello')
}

module.exports = {
    Print, 
    Output
}