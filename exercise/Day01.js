// Difference Between 2 Days
const date1 = new Date('2024-02-06')
const date2 = new Date('2024-02-07')
const differenceDateInMs = date2 - date1 // In Milisecond
const totalDays = differenceDateInMs / (24 * 60 * 60 * 1000)
console.log(totalDays)

// Convert Days to Year, Month and Day
const days = 900
const year = Math.floor(days/365)
let daysLeft = days%365
const month = Math.floor(daysLeft/30)
daysLeft = daysLeft%30 
console.log(`
    Total ${days} = ${year} Year, ${month} Month, ${daysLeft} Days
`)