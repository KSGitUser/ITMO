"use strict";

function task(x) {
    const initArray = Array.from({length: x-1}, (_, i) => i+2)

    while (initArray && initArray.length) {
        const p = initArray.shift()
        for (let i = p-1; i < initArray.length; i += p ) {
            initArray[i] = 0;
            if (i === initArray.length-1) {
                return "nonprime";
            }
        }
        while (initArray && initArray[0] == 0) 
        {
            initArray.shift()
        }   
    } 
    return "prime";
} 
