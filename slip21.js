import path from "path";

let filePath = path.join("C:", "Users", "Student", "Documents", "test.txt");

console.log("Joined Path:", filePath);
console.log("Resolved Path:", path.resolve("test.txt"));
console.log("Directory Name:", path.dirname(filePath));
console.log("File Name:", path.basename(filePath));
console.log("File Extension:", path.extname(filePath));
