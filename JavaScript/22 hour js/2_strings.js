// Strings

let str1 = "Hello World";
let str2 = 'JavaScript is fun!';
let str3 = `Template literals are powerful`;

// String Length
console.log(str1.length); // 11

// Accessing Characters
console.log(str2[0]); // J
console.log(str2.charAt(5)); // c

// String Methods
console.log(str1.toUpperCase()); // "HELLO WORLD"
console.log(str2.toLowerCase()); // "javascript is fun!"

// Concatenation
let combined = str1 + " - " + str2;
console.log(combined); // "Hello World - JavaScript is fun!"

//type coercion
console.log('5'+ 10);  // '510'
console.log(typeof(('5' - 2)));   // 3  -> number


// String Search
console.log(str1.indexOf("World")); // 6
console.log(str2.includes("fun")); // true

// Substring Extraction
console.log(str1.slice(0, 5)); // "Hello"
console.log(str2.substring(0, 10)); // "JavaScript"

console.log(typeof number) // undefined