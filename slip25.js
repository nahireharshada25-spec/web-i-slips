import fs from "fs";

// Create
fs.mkdirSync("Test");

// List
console.log("Directories:", fs.readdirSync("."));

// Rename
fs.renameSync("Test", "NewTest");
console.log("Directory renamed");

// JSON data
let student = {
    name: "Rahul",
    age: 20
};

// Write JSON
fs.writeFileSync("student.json", JSON.stringify(student));
console.log("JSON file created");

// Read and Parse JSON
let data = fs.readFileSync("student.json", "utf8");
console.log("JSON Data:", JSON.parse(data));

// Delete
fs.rmdirSync("NewTest");
console.log("Directory deleted");
