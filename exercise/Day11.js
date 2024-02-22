function FindSingleOne(arr){
    let outputObj = {} 

    for(let item of arr){
        if(!outputObj[item]){
            outputObj[item] = 1
        }else{
            outputObj[item] += 1
        }
    }
    
    for(let key in outputObj){
        if(outputObj[key] === 1){
            return key
        }
    }
}

console.log(FindSingleOne([1, 1, 3, 3, 2]))
console.log(FindSingleOne([3, 3, 3, 5, 5, 10, 10, 11, 12, 12]))
