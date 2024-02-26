/*
    1. Buatlah sebuah promise function untuk melakukan penambahan data
       ke sebuah array. Dengan asumsi waktu yang diperlukan 
       untuk menambah data yaitu 2 detik.
*/

// const fruits = ['Anggur', 'Jeruk', 'Apel'] // Alpukat 

// function AddData(fruit){ // fruit: Alpukat
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             fruits.forEach((item) => {
//                 if(item.toLowerCase() === fruit.toLowerCase()){
//                     reject('Fruit Already Exist!')
//                 }
//             })

//             fruits.push(fruit)
//             resolve()
//         },  2000)
//     })
// }

// function ShowData(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(fruits)
//         }, 2000)
//     })
// }

// async function Call(){
//     try {
//         await AddData('Alpukat')
//         // await AddData('alpukat')
//         const res = await ShowData()
//         console.log(res)
//     } catch (error) {
//         console.log(error)
//     }
// }

// Call()
/*
    2. Buatlah sebuah promise function untuk melakukan register user 
       ke dalam sebuah array of object. Lakukan validasi untuk field username, email, password
       dan confirmPassword dengan ketentuan sbb:
       - Username:
            - Check username already use or not
            - Have minimum character is 6
       - Email:
            - Check email already register or not
            - Have @ character
       - Pass & Conf Pass:
            - Check both of them have same value
*/

const users = [
    { username: 'aboy', email: 'aboy@gmail.com', password: 'abc123' }
]

function Register(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const {username, email, password, confirmPassword} = data

                // 1. Username or Email Use or Not
                users.forEach(item => {
                    if(item.username === username || item.email === email){
                        throw new Error('Username/Email Already in Use!')
                    }
                })

                if(username.length < 6) throw new Error('Username Have Minimum Length is 6')
                if(!email.includes('@')) throw new Error('Email Not Valid')
                if(password !== confirmPassword) throw new Error('Password Doesnt Match')

                users.push({username, email, password})
                resolve('Register Success!')
            } catch (error) {
                reject(error)
            }
        }, 2000)
    })
}

async function Main(){
    try {
        const response = await Register({
            username: 'ryan01', 
            email: 'ryan@gmail.com', 
            password: 'abc123',
            confirmPassword: 'abc123'
        })
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

Main()



// 3. Lakukan call API ke link berikut: https://jsonplaceholder.typicode.com/posts.
//    Gunakan function fetch Javascript untuk melakukannya (baca dokumentasi)
//    console.log data yang berhasil di fetch

async function FetchData(){
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/postsss')
        if(res.status === 404) throw new Error('Error')
        res = await res.json()
        console.log(res)
    } catch (error) {
        console.log('>>>')
        console.log(error)
    }
}

FetchData()