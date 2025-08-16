"use strict"
age = 100;

console.log("Value of age is", age);   

var age = 30;

console.log("Value of age is", age);   


//Because of hoisting, JavaScript internally treats the code like this:


/**
 * var age; // hoisted to the top and initialized as undefined

    age = 100; // now assigning 100 to 'age'
    console.log("Value of age is", age); // prints 100
    age = 30; // now reassigning to 30
    console.log("Value of age is", age); // prints 30

 */

/**
 * var declarations are hoisted, meaning the declaration is moved to the top of the scope (but not the assignment).
    The assignment age = 100; works even before var age = 30; because age was hoisted.
    In non-strict mode, assigning to a variable without declaring it (age = 100) is allowed because of hoisting.
    ✅ This will throw an error in "use strict" mode — ReferenceError: age is not defined.
 */


// In case of let and const it goes in temporal dead zone


 console.log(a);
var a = 5;
function foo() {
  console.log(a);
  var a = 10;
}
foo();


let a = 1;
{
  let a = 2;
  {
    let a = 3;
    console.log(a);
  }
  console.log(a);
}
console.log(a);



var a = 100;
function test() {
  console.log(a);
  var a = 200;
}
test();



function outer() {
  let name = "Rohit";
  function inner() {
    console.log(name);
  }
  return inner;
}
let fn = outer();
fn();


function greet() {
  console.log(message);
  let message = "Hello";
}
greet();
