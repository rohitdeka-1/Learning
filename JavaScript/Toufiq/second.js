// Loops


// for(let i = 0;i<10;i++){
//     console.log("Toufiq")
// }

//Strings

// let text = "Rohit Deka";
// console.log(text);
// console.log(typeof text)

// let text1 = "Toufiq";
// let text2 = text1 + text;

// console.log(text2)


// // Template Literal
// let name = "Toufiq";

// let code = `Dear ${name}, We are enlightend with your commitment to our company`
// console.log(code);

// const arr = ["Rohit","Toufiq","Rohan"]

// for(let i = 0; i< arr.length;i++){
//     console.log(`Dear ${arr[i]}, We are enlightend with your commitment to our company`);
//     console.log("\n");
// }



// methods string and Number

// length

// let text = "Hi";
// console.log(text.length); // 2
// console.log(text.charAt(1)); // i
// console.log(text.substring(0,2)); //hi
// console.log(text.toUpperCase()) // HI
// console.log(text.toLowerCase()) // hi


// // number
// let newNumber = 19.22;
// console.log(typeof newNumber)
// console.log(typeof newNumber.toString()); //Convert to String
// console.log(Number.MAX_VALUE); // This is infinity in coding
// console.log(Number.MIN_VALUE); // This is negatively infinite number in coding


//Functions


// function sum(a,b){
//     return a + b;
// }

// let ans = sum(10,20);
// console.log(ans)


//2 - 10 tak sabka table


// for(let i = 3; i<11;i++){  //i = 2,3,4,5,6,7,8,9,10

//     for(let j = 1; j<11;j++){   // i = 2 , j =1.....10;  i = 3 , j= 1,.....10;
//         console.log( i,"*",j,"=", i * j); 
//     }

//     console.log("____NEXT______");
// }


for (let i=2; i<11; i++){
    for(let j=1; i<11; j++){
        console.log( i,"*",j,"=", i * j);
    }
    
}

