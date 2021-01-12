const { Iterable } = require('./src/Iterable');

let newIt = new Iterable(4);

console.log(...newIt);

let newIt2 = new Iterable(4, 0, 8);

console.log(...newIt2);