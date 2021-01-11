const { o3 } = require("./protochain.js");

const prototypeArray = []

const getPrototype = (module) => {
    if (typeof module === "object") {
        const prototype = Reflect.getPrototypeOf(module);
        prototypeArray.push(prototype?.name || null);
        if (prototype) {
            getPrototype(prototype);
        }
    }
}

getPrototype(o3);
console.log('prototypeArray =>', prototypeArray); // [ 'JavaScript', 'LiveScript', 'Mocha', null ]

exports.prototypeNames = prototypeArray;