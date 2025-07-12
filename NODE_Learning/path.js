import path from "path";
import fs from "fs";
// console.log(__dirname);
// console.log(__filename);

// Create the file path
const filePath = path.join("folder", "student", "uoadted.txt");


// Write to the file at the specified path
fs.writeFileSync(filePath, "THIS IS ROHIT DEKA", "utf-8");
const data = fs.readFileSync(filePath);
console.log(data.toString());

