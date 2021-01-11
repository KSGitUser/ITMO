
(async () => {

    const { o3 } = require("./protochain.js");

    const prototypeArray = []

    const getPrototype = (module) => {
        if (typeof module === "object") {
            const prototype = Reflect.getPrototypeOf(module);
            prototypeArray.push(prototype);
            if (prototype) {
                getPrototype(prototype);
            }
        }
    }

    getPrototype(o3);
    console.log('prototypeArray =>', prototypeArray);
})()





