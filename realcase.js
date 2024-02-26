// Case.
// Delete Data ---> 3s
// Show Newest Data

let numbers = [1, 2, 3, 4, 5, 6]

function DeleteData(cb){
    setTimeout(() => {
        numbers.pop()
        cb() // function(){ DeleteData(ShowData) }
    }, 3000)
}

function ShowData(){
    setTimeout(() => {
        console.log(numbers)
    }, 2000)
}

// DeleteData()
// ShowData()
DeleteData(function(){
    DeleteData(function(){
        DeleteData(function(){
            DeleteData(function(){
                DeleteData(ShowData)
            })
        })
    })
}) // CALLBACK HELL