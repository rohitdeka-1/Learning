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
