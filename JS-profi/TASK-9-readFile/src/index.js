const { readFile: r } = require("fs");

r('package.json', (e,res) => {
    if (e) return console.log(e);
    const data = String(res);
    console.log(data);
})
