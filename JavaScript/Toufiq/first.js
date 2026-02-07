//JS is a dynamically typed language -> Type definition not needed.
//JS is a Interpreted language 
// Variable Declaration
// var , let , const
// var -> oldest method ( which has some issues, JS to fix those issues js introduced let) ( var ignores scope so not to be used);


// var a = 10;
// a = "Rohit";
// console.log(a);

// let a = 10;
// a = "Rohit";
// console.log(a);

// const a = "Toufiq";
// a = "Toufiq motu";
// console.log(a);

// we use const for values that should be a constant;

// const pi = 3.14;
// let r = 10;
// let area = pi * r * r;
// console.log(area);




// TYPES
// Number
// String
// Bigint -> for large integers
// Boolean -> true/false
// Object -> { "name":"rohit" }
// Function -> data type of a variable that has function init;
// Undefined -> Primitive variable with no assigned value
// Null -> Represents objects absense
// function -> typeof() -> tells what is the type of a variable
// Symbol -> unique identifier

// let a = "Rohit";
// console.log(typeof(a));


// let b = 10;
// console.log(typeof(b));

// let c = 999999999999999999n;
// console.log(typeof(c))

// let d = true;
// console.log(typeof(d));

// let e = {
//     objnew:"Rohit", //becomes an key , not a variable
//     "age": 19
// }

// console.log(typeof(e));


// const named = function(){
//     console.log("19");
// }

// console.log(typeof(named))

// console.log(typeof(f))

// let xyz = null;
// console.log(typeof(xyz))   // Object ( type of null is an object );


// // ARRAY in JS
// const arr = ["Rohit","Toufiq","Rohan"];
// console.log(arr);
// console.log(typeof arr);  

// // Arrays are dynamic.
// // JAVA = Integer type array, string, boolean

// arr2 = ["Rohit", 10 , true, "Toufiq"]
// console.log(arr2);


// == vs ===

//console.log( 10 == "10"); // true
//console.log( 10 === "10"); // false
// == checks for same data inspite of different data type
// === is called strict type checker : Value + Type both are checked



// Operators

// Assignment operator "=" assigns values; 
// Addition operator " + "
// Multiplication operator " * "
// Comparison " >, < ,>= ,<= , ==, === ,!="
// exponent  ** 


//console.log(10**2); // 100
// ++ increment
// -- decrement




// If- Else

let a = 10;
let b = "10";

if(a === b){
    console.log("they are same");
} else{
    console.log("They are not same");
}

// if(){

// } else if(){

// } else{

// }

// Switch - Case

// switch(30){
//     case 20 : 
//         console.log("20 aagaya bhai")
//         break;
//     case 10 :
//         console.log("haha ha")
//         break;
//     default:
//         console.log("nice")
// }


// Ternary Operator
// express ? "true" : "false" 

// (10+10 == 30 ) ? console.log("Waah") : console.log(" nono ");


// HW make a calculator to  + , - , * , / 
// use If else , switch case


