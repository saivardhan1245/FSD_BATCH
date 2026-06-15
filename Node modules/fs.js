const fs = require("fs");


fs.writeFileSync("sync.txt", "This file is created using writeFileSync()");
console.log("sync.txt created");


fs.appendFileSync("sync.txt", "\nThis line is added using appendFileSync()");
console.log("sync.txt appended");

fs.writeFile("async.txt", "This file is created using writeFile()", (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("async.txt created");

  
    fs.appendFile(
        "async.txt",
        "\nThis line is added using appendFile()",
        (err) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log("async.txt appended");
        }
    );
});

console.log("Program continues executing...");