const { readFile: r, writeFile: w } = require("fs");

const readWriteFile = (pathToReadFile, pathToWriteFile) => {
    return new Promise((res, rej) => 
        r(pathToReadFile, (e, data) => {
                if (e) return rej(e)
                w(pathToWriteFile, data, (e) => {
                    if (e) return rej(e);
                    return res(`File ${pathToWriteFile} was written`)
                })

        })
    )};    

readWriteFile("package.json", "packageThen.json")
    .then(result => console.log(result))
    .catch(e => console.error(e));


//with await
(async ()=> {
    try {
        const result = await readWriteFile("package.json", "packageAwait.json");
        console.log(result);
    } catch(error) {
        console.log(error)
    }
})();

//With promises
(async () => {
    const fsPromises = require('fs').promises
    try {
        const data = await fsPromises.readFile('package.json');
        await fsPromises.writeFile("packageWithPromises.json", data)
    } catch(e) {
        console.error(e)
    }
})();
