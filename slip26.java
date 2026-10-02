import fs from "fs";

fs.writeFile("file1.txt", "Hello", (err) => {
    if (err) console.log("Error creating file");
    else {
        console.log("File created");

        fs.copyFile("file1.txt", "file2.txt", (err) => {
            if (err) console.log("Error copying file");
            else {
                console.log("File copied");

                fs.rename("file2.txt", "newfile.txt", (err) => {
                    if (err) console.log("Error renaming file");
                    else {
                        console.log("File renamed");

                        fs.unlink("newfile.txt", (err) => {
                            if (err) console.log("Error deleting file");
                            else console.log("File deleted");
                        });
                    }
                });
            }
        });
    }
});
