const fs = require("node:fs");

const rs = fs.createReadStream("7-readable-stream.js", "utf-8");

rs.on("readable", () => {
    console.log("readable");
    const buffer = rs.read();
    
    if (buffer) {
        console.log(buffer);
    }
});

rs.on("data", chunk => {
    console.log("data");
    console.log(chunk);
})