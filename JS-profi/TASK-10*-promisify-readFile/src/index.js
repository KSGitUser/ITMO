const { readFile: r } = require("fs");

const readFile = pathToFile => new Promise((res, rej) => r(pathToFile, (e, data) => {
    if (e) return rej(e)
    return res(data) 
}));

readFile("package.json")
    .then(data => console.log(String(data)))
    .catch(e => console.error(e));


//with await
(async ()=> {
    try {
        const data = await readFile("package.json");
        console.log(String(data));
    } catch(error) {
        console.log(error)
    }
})();
