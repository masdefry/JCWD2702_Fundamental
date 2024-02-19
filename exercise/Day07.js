function Similiar(obja, objb){
    // const arr1 = Object.keys(obja)
    // const arr2 = Object.keys(objb)
    // const arr3 = Object.values(obja)
    // const arr4 = Object.values(objb)

    // if(arr1.includes(arr2[0]) && arr3.includes(arr4[0])){
    //     return 'Object Same'
    // }else{
    //     return 'Object Not Same'
    // }

    const result1 = Object.keys(obja)[0] === Object.keys(objb)[0] // a === a ---> true/false
    const result2 = Object.values(obja)[0] === Object.values(objb)[0] // bebas aja === bebas ---> true/false
}
// console.log(Similiar(
//     {
//         a: 'bebas aja',
//     },
//     {
//         b: 'bebas'
//     }
// ))



function Intersection(obj1, obj2){
    let newObj = {}

    for(let key in obj1){ // 'a'
        if(obj1[key] === obj2[key]){ // obj1[a] === obj2[a] ---> 1 === 2? FALSE
            newObj[key] = obj1[key] // { a: 1 }
        }
    }
    console.log(newObj)
}

Intersection(
    {
        a: 1, 
        b: 2
    },
    {
        a: 2, 
        c: 3
    }
)



function RemoveDuplicateData(data1, data2){
    const arrName = [] // [Student1, Student2]

    for(let item of data1){
        arrName.push(item.name)
    }
    
    for(let item of data2){
        if(arrName.indexOf(item.name) !== -1){ // 0
            data1.splice(arrName.indexOf(item.name), 1)
        }
    }

    return data1.concat(data2)
}
console.log(RemoveDuplicateData(
    [
        {name: 'Student1', email: 'student1@gmail.com'},
        {name: 'Student2', email: 'student2@gmail.com'}
    ],
    [
        {name: 'Student1', email: 'student1@gmail.com'},
        {name: 'Student3', email: 'student3@gmail.com'}
    ]
))


function SwapProperty(arr){
    const newObj = arr[0] // {name: 'David', age: 20}
    let resultObj = {}

    for(let key in newObj){
        resultObj[newObj[key].toString()] = key 
    }
}

SwapProperty([{name: 'David', age: 20}])



function Factorial(n){
    if(n === 0){
        return 1
    }else{
        return n*Factorial(n-1)
    }
}

console.log(Factorial(3))