//BASIC TYPE
const variableName: string = "Rohit";
const boolVal: boolean = true;
const undef: undefined = undefined;

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

//Aliases
type objectType = {
    name:string,
    college: string
}

const myObj:objectType = {
    name: "Aditi",
    college: "VIT Bhopal"
}



console.log(myObj);

//Types Aliases keeps track of the shape of the object.
//Giving more safety



//Literal Types
// It means to give a value as a type.

let role: "admin" | "user" = "admin"

type cars = {
    name: "Rohit" | "deka", //using literals in aliases,
};


const something:cars = {
    name: "Rohit",
}


// what is a better way of writing this let role1: "admin" | "user" | "staff" = "admin";
// so like in functions we have interfaces, we can use interfaces for this as well.

type ID = "Rohit" | "deka";
const userId : ID = "Rohit";

const myVar = "Rohit";


const myObj2 = {
    name : "AWS",
    role : "admin"
} as const;

// as const literal type is used to make the object properties readonly and their types literal types. This means that the properties cannot be changed and their types are fixed to the specific values assigned to them.

const a = "Hello";
//The type will be inferred as string literal type "Hello" instead of string type. This means that the variable a can only hold the value "Hello" and cannot be assigned any other string value.

let b = "Hello";

const c = 100;
// The type will be inferred as the literal type 100 instead of number type. This means that the variable c can only hold the value 100 and cannot be assigned any other number value.

let d = 100;

const e = true;
// The type will be inferred as the literal type true instead of boolean type. This means that the variable e can only hold the value true and cannot be assigned any other boolean value.


let f = true;
// Boolean

//-------------------------------------
// UNION TYPES ( | )
// A variable can be one of multiple specified types.

let names : string | number;
names = "Rohit";

// union with objects
type User = {
    name: string;
    age: number;
};

const appUser:User = {
    name: "Rohit",
    age: 25,
}

// problem with union
let value : string | number;


if(typeof value === "string"){
    console.log(value.toUpperCase()); // TypeScript knows value is a string here
} else{
    console.log(value.toFixed(2)); // TypeScript knows value is a number here
}


// functions with union types

function printSomething(value: string | number |boolean | null | undefined | object ):void | number | string {

    return "rohitt";
}

//Arrays with union types

const arr: (number | string)[] =[1,2,3,"rohit",5];

const arr2: number[] | string[] = ["1","2"]; // either number array or string array but not both

function add(num1: number, num2:number):number {
    return num1 + num2;
}

type addFunction = (num1:number, num2:number) => number;

const arrowFunction: addFunction = (num1, num2) => {
    return num1 + num2;
}


