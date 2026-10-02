import fs from "fs";

// Create and write
fs.writeFile("demo.txt", "Hello Node.js", (err) => {
    if (err) throw err;

    console.log("File created and data written");

    // Read
    fs.readFile("demo.txt", "utf8", (err, data) => {
        if (err) throw err;

        console.log("File Content:", data);

        // Append
        fs.appendFile("demo.txt", "\nWelcome to File System", (err) => {
            if (err) throw err;

            console.log("Data appended successfully");

            // Read again
            fs.readFile("demo.txt", "utf8", (err, data) => {
                if (err) throw err;

                console.log("Updated File Content:");
                console.log(data);
            });
        });
    });
});
