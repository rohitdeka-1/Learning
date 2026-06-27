"use strict";
//BASIC TYPE
const variableName = "Rohit";
const boolVal = true;
const undef = undefined;
// const users: number[] = [10,20,30];
// const users2: Array<number> = [10,30,50];
// let nummVal : null = null; // when there is an absense of value -> null
// let something : any = "Rohit"; //any type -> ignore TS type safety
// something.find();
// // let something2 : unknown = {
// //     "find":"rohit"
// // }; // it would allow operations unless proved to be of that type.
// // Functions
// //void
// function calculateSomething(val:number):void{
//     return;
// }
// //string,number,array
// function add(one: number, two: string):string{
//     return `${one} and ${two}`;
// }
// const ans = add(100, "rohit");
// console.log(typeof ans);
// //never
// function infiniteFunction(ans:number):never{
//     while(true){
//         console.log("something");
//     }
// }
//Object
const myObj = {
    name: "Aditi",
    college: "VIT Bhopal"
};
console.log(myObj);
