const requireFromUrl = require('require-from-url/sync');
const { o3 }= requireFromUrl("https://kodaktor.ru/j/protochain");

const prototypeArray = []

function getPrototype(checkedObject) {
    if (Object.getPrototypeOf(checkedObject)) {
        prototypeArray.push(Object.getPrototypeOf(checkedObject));
        getPrototype(Object.getPrototypeOf(checkedObject));
    } else {
        return;
    }
}

getPrototype(o3);

console.log('Ненулевых прототипов у объекта:', prototypeArray.length);
