import fs from "fs";
import path from "path";

let folder = ".";

fs.readdir(folder, (err, files) => {
    if (err) {
        console.log("Error reading directory");
        return;
    }

    console.log("Matching Files:");

    files.forEach(file => {
        let ext = path.extname(file);

        if (ext === ".txt" || ext === ".json" || ext === ".js") {
            console.log(file);
        }
    });
});
