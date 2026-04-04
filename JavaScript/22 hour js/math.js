//Rounding

Math.round(2.2)   // 2
Math.round(2.8)   // 3

let num = (Math.round((2095 + 799 ) * 0.1)) / 100
console.log(num);  // 28.94


// 10.6 + 20.8 = 31.4 rupees
// calculate in paise 
let num1 = Math.round((1060 + 2080) * 0.1)  // 314
console.log(num1/100);  // 3.14 rupees

// while calculating money always calculate in the smallest unit (paise,cents) 
// to avoid floating point issues