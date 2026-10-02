import fs from "fs";

console.log("Synchronous File Operation");

fs.writeFileSync("sync.txt", "Hello Sync");
console.log("File Written");

let data = fs.readFileSync("sync.txt", "utf8");
console.log("File Read:", data);

console.log("\nAsynchronous File Operation");

fs.writeFile("async.txt", "Hello Async", (err) => {
    if (err) throw err;

    console.log("File Written");

    fs.readFile("async.txt", "utf8", (err, data) => {
        if (err) throw err;

        console.log("File Read:", data);
    });
});

console.log("Next statement executed");
