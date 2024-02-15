// SLIDE-01
// function LowestHighestAverage(arrNumber){
//     let lowest = arrNumber[0]
//     let highest = arrNumber[1]
//     let total = 0

//     for(let item of arrNumber){
//         if(item < lowest) lowest = item 
//         if(item > highest) highest = item
//         total += item
//     }

//     return [lowest, highest, total/arrNumber.length]
// }

// console.log(LowestHighestAverage([12, 10, 3, 5, 20, 1]))



// function SeparatesComma(arrStr){
//     return arrStr.slice(0, arrStr.length-1).join(', ') + ', and ' + arrStr[arrStr.length-1]
// }

// console.log(SeparatesComma(["Apple", "Banana", "Cherry"]))


// function SumTwoArray(arr1, arr2){
//     let total = []

//     for(let i=0; i<arr1.length; i++){
//         total.push(arr1[i] + arr2[i])
//     }

//     return total
// }

// console.log(SumTwoArray([3,2,1], [3,2,1]))



// function FilterNewDataArray(arr, newElement){
//     if(!arr.includes(newElement)){
//         arr.push(newElement)
//     }

//     return arr
// }

// console.log(FilterNewDataArray([3, 4, 5, 1], 10))

// SLIDE-02
function FindDuplicate(arrNumbers){
    // const arrDuplicate = []

    // for(let item of arrNumbers){ // Pertama
    //     let count = 0 
    //     for(let value of arrNumbers){ // Kedua
    //         if(item === value) count++
    //     }

    //     if(count > 1 && !arrDuplicate.includes(item)){
    //         arrDuplicate.push(item)
    //     }
    // }

    // return arrDuplicate
    
}

console.log(FindDuplicate([3, 3, 3, 1, 2, 2, 5, 5, 5]))


function FindDifferenceTwoArray(arr1, arr2){
    const newArr = arr1.concat(arr2)

    const result = []

    for(let item of newArr){ // Pertama
        let count = 0 
        for(let value of newArr){ // Kedua
            if(item === value) count++
        }

        if(count === 1 && !result.includes(item)){
            result.push(item)
        }
    }

    return result
}

console.log(FindDifferenceTwoArray([1, 2, 3], [2, 3, 4]))

// SLIDE-03
function MixedArray(arrRandom){
    let total = 0
    
    for(let item of arrRandom){
        if(typeof item === 'number'){
            total += item 
        }
    }

    return total
}

console.log(MixedArray([1, '3', true, undefined, 100]))


function SecondSmallest(arr){
    arr.sort((a, b) => a-b)
    return arr[1]
}

console.log(SecondSmallest([3, 1, 5, 4, 7]))
