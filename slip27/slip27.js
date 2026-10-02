import fs from "fs";

fs.readFile("student.json", "utf8", (err, data) => {
    if (err) {
        console.log("Error reading file");
        return;
    }

    let student = JSON.parse(data);

    student.name = "Amit";
    student.age = 21;

    fs.writeFile("student.json", JSON.stringify(student, null, 2), (err) => {
        if (err)
            console.log("Error writing file");
        else
            console.log("JSON data updated successfully");
    });
});
