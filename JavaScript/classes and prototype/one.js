'use strict' 
// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     sayHi(){
//         console.log(`Hi ${this.name} of age ${this.age}`);
//     }
// }

// const p1 = new Person("Rohit",21)

// console.log(p1);
// p1.sayHi();


const callingFunction = function(){
    console.log(`Hi ${this.name}`);
}

const user1 = {
    name : "Mohit"
}
const user2 = {
    name : "Rohit"
}
 

callingFunction.call(user1) // undefined if not in strict mode
// and will also not work with arrow functions

