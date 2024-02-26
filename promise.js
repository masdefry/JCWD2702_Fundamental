// PROMISE
// function SimplePromise(){
//     return new Promise((resolve, reject) => {
//         // Resolve: Promise Success
//         if(1 === 1){
//             resolve('Success')
//         }else{
//             reject('Failed')
//         }
    
//         // Reject: Promise Failed
//     })
// }

// SimplePromise()
// .then((res) => {
//     console.log(res)
// })
// .catch((err) => {
//     console.log(err)
// })










let numbers = [1, 2, 3, 4, 5, 6]

function DeleteData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            numbers.pop()
            resolve()
        }, 3000)
    })
}

function ShowData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(numbers)
        }, 2000)
    })
}
DeleteData()
.then(() => {
    return DeleteData()
})
.then(() => {
    return DeleteData()
})
.then(() => {
    return ShowData()
})
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log(err)
}) // PROMISE CHAINING