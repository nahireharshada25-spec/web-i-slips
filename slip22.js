import fs from "fs";

fs.writeFile("test.txt", "Hello Node.js", (err) => {
    if (err) throw err;

    console.log("File created successfully");

    fs.readFile("test.txt", "utf8", (err, data) => {
        if (err) throw err;

        console.log("File Content:", data);

        fs.appendFile("test.txt", "\nWelcome to File System", (err) => {
            if (err) throw err;

            console.log("Data appended successfully");

            fs.unlink("test.txt", (err) => {
                if (err) throw err;

                console.log("File deleted successfully");
            });
        });
    });
});
