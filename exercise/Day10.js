// Uppercase Each Alphabet
// Ex.  Input   : 'abc'
//      Output  : ['Abc', 'aBc', 'abC']
function UppercaseAlphabet(alphabet){
    const output = []

    for(let i=0; i < alphabet.length; i++){
        output.push(alphabet.replace(alphabet[i], alphabet[i].toUpperCase()))
    }
    return output
}
console.log(UppercaseAlphabet('abc'))

// Repeat Character
// Ex.  Input   : 'abc'
//      Output  : ['A', 'Bb', 'Ccc']

// Show Product Discount with Alert
function RepeatCharacter(word){
    const output = []
    
    for(let i=0; i<word.length; i++){
        output.push(word[i].toUpperCase() + word[i].repeat(i))
    }
    return output 
}

console.log(RepeatCharacter('abc'))

/*
   Ex.  Input   :
   let products = [
        { id: 1, name: 'Asus', price: 20000000, discount: 0 },
        { id: 2, name: 'Lenovo', price: 15000000, discount: 10 },
        { id: 3, name: 'Acer', price: 10000000, discount: 30 }
    ]

        Output  :

        *** Welcome Admin ***
        1. Asus: Rp. 20.000.000
        2. Lenovo: Rp. 15.000.000 (10%) = Rp. 13.500.000
        3. Acer: Rp. 10.000.000 (30%) = Rp. 7.000.000
*/