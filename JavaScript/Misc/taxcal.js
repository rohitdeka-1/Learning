

// // how to ask the user for input
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

const { log } = require('console');


// // function to calculate product final price after tax
// function calculateFinalPrice(price, taxRate) {
//     return price + (price * taxRate / 100);
// }

// // ask user for product price
// readline.question('Enter the product price: ', (priceInput) => {
//     const price = parseFloat(priceInput);

//     // ask user for tax rate
//     readline.question('Enter the tax rate (%): ', (taxRateInput) => {
//         const taxRate = parseFloat(taxRateInput);

//         // calculate final price
//         const finalPrice = calculateFinalPrice(price, taxRate);

//         // display the final price
//         console.log(`The final price after ${taxRate}% tax is: $${finalPrice.toFixed(2)}`);

//         // close the readline interface
//         readline.close();
//     });
// });

// //do we need to always use user data in a function within readline.question?
// //Yes, because readline.question is asynchronous, the user input is only available within its callback function.


const r1 = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


let val;

r1.question("enter how many integers you want to calculate",(input) => {
    let iterations = parseInt(input);
    for(let i=0;i<iterations;i++){
        val++;
    }
    console.log("User wanted to do it "+ iterations + "times");
    r1.close();
});

// how to now use val outside the r1.question callback?
// You cannot directly use val outside the r1.question callback because it is asynchronous. 
// Any code that depends on val should be placed inside the callback or called from within it.
// Alternatively, you can use Promises or async/await to handle asynchronous code more cleanly.
// Example using Promises:
function askQuestion(query) {
    return new Promise((resolve) => {
        r1.question(query, (answer) => {
            resolve(answer);
        });
    });
}

async function main() {
    let val = 0;
    const input = await askQuestion("enter how many integers you want to calculate: ");
    let iterations = parseInt(input);
    for (let i = 0; i < iterations; i++) {
        val++;
    }
    console.log("User wanted to do it " + iterations + " times");
    r1.close();
}

main();


//what is promise ?

let p = new Promise((resolve,reject)=>{
    let a = 1+1;
    if(a==2){
        resolve('Success');
    }else{
        reject('Failed');
    }
});

p.then((message)=>{
    console.log('This is in the then '+ message);
}).catch((message)=>{
    console.log('This is in the catch '+ message);
});

let ans = new Promise((resolve,reject)=>{
    r1.question("enter a number: ", (input) => {
        let number = parseInt(input);
        if(number % 2 === 0){
            resolve('Even Number');
        }else{
            reject('Odd Number');
        }
    }); 
});

ans.then( (message) => {
    console.log("This is the answer resolved : " + message);
}).catch((message)=> {
    console.log("This is the catch " + message);
});

console.log(ans);   