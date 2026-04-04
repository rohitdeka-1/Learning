
const product = {
    name: "Laptop",
    price: 1200,
    inStock: true
}

console.log(product.name); // Output: Laptop
console.log(product.price); // Output: 1200
console.log(product.inStock); // Output: true
console.log(product.new);   // Output: undefined


// Modifying object properties
product.price = 1100;
product.inStock = false;
delete product.new; // No effect since 'new' property doesn't exist\
delete product.inStock; // Removes the inStock property
