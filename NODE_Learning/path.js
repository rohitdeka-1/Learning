import path from "path";

// console.log(__dirname);
// console.log(__filename);

const filePath = path.join("folder", "student", "data.txt");

// Print the platform-specific separator
console.log(path.sep); // e.g., '/' on Linux/Mac, '\' on Windows

// Split a path into its segments using the separator
console.log(filePath.split(path.sep)); // ['folder', 'student', 'data.txt']
