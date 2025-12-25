// const arr = [1, 2, 3, 4, 5];

// // Accessing elements
// console.log(arr[0]); // Output: 1
// console.log(arr[2]); // Output: 3

// // Modifying elements
// arr[1] = 20;
// console.log(arr); // Output: [1, 20, 3, 4, 5]


// for(let i = 0; i < 50; i++) {    
//     console.log(arr[i]); // undefined after 5 since array has only 5 elements
// }

// how to make a static array of fixed size 50
const test = new Array(5);

for(let i = 0; i < test.length; i++) {
    test[i] = i * 10;
    console.log(test[i]);
}

console.log(test); // Output: [0, 10, 20, 30, 40]

// how to use find method
const foundElement = test.find(element => element === 20);
console.log(foundElement); // Output: 20
// what is the use of find method
// The find method is used to search for the first element in an array 
// that satisfies a given condition specified by a callback function.
//  It returns the value of the first matching element,
//  or undefined if no elements match the condition.
//  This is useful for quickly locating specific items in an array without
//  needing to manually iterate through all elements.

// example of find method in express backend
// const users = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 3, name: 'Charlie' }
// ];

// const userIdToFind = 2;
// const user = users.find(u => u.id === userIdToFind);

// if (user) {
//     console.log(`User found: ${user.name}`); // Output: User found: Bob
// } else {
//     console.log('User not found');
// }



// Tutorial
// 1. Create an array of size 5
// 2. Populate the array with multiples of 10
// 3. Use the find method to locate the element with value 20
// 4. Print the found element to the console


//PUSH, POP
const arr =[1,3,5,6];
arr.push(7); // adds 7 at the end
console.log(arr); // [1,3,5,6,7]

arr.pop();  // removes last element
console.log(arr); // [1,3,5,6]


//Shift Unshift
arr.unshift(0); // adds 0 at the beginning
console.log(arr); // [0,1,3,5,6]

arr.shift();



//MAP METHOD 
arr.map((items,index,array)=>{
    return items * 2;
})

// What is items here in the map function?
// In the map function, "items" represents the current element being processed in the array during each iteration. 
// It allows you to access and manipulate each element individually as you create a new array based on the original one.


//FILTER METHOD
const newNum = arr.filter((item)=>{
    return ( item / 1 != 0 && item != 5 ); 
})  ;

// output : 1,3,5,6 
// why?
console.log(newNum);    // What is filter here?
// The filter method creates a new array containing all elements from the original array that satisfy a specified condition defined in the callback function. 
// It is used to filter out elements based on certain criteria, returning only those that meet the condition.







