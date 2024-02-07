// Case. Create a Program to Hide Last 3 Digits of Phone Numbers
// Data     : 628133978973 (Number)
// Output   : 628133978xxx (String)

let phoneNumber = 628133978881 // Length = 14 - 3 = 11 
phoneNumber = phoneNumber.toString()
console.log(phoneNumber.slice(0, phoneNumber.length-3) + 'xxx')