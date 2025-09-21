

var counter = (n) => {
    return function () {
        return n++;  // Return the current value, then increment
        // Or use: return ++n;  // Increment first, then return
    }
}

// Method 1: Store the counter function and call it multiple times
const counter10 = counter(10);
console.log("Counter starting at 10:");
console.log(counter10()); // 10
console.log(counter10()); // 11
console.log(counter10()); // 12
console.log(counter10()); // 13

console.log("\n");

// Method 2: Different counters with different starting values
const counter20 = counter(20);
const counter30 = counter(30);

console.log("Multiple counters:");
console.log("Counter 20:", counter20()); // 20
console.log("Counter 30:", counter30()); // 30
console.log("Counter 20:", counter20()); // 21
console.log("Counter 30:", counter30()); // 31

console.log("\n");

// Method 3: Using pre-increment (++n) instead of post-increment (n++)
var counterPreIncrement = (n) => {
    return function () {
        return ++n;  // Increment first, then return
    }
}

const counter5 = counterPreIncrement(5);
console.log("Pre-increment counter starting at 5:");
console.log(counter5()); // 6
console.log(counter5()); // 7
console.log(counter5()); // 8
