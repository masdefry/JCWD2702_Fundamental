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

async function Main(){
    try {
        await DeleteData()
        await DeleteData()
        await DeleteData()
        const res = await ShowData()
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}

Main()