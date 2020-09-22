"use strict";

function task(x) {
    const resString = (x === null
        ? 'null' 
        : ( x === undefined
            ? 'undefined' 
            : ( Number.isNaN(x)
                ? 'not a number'
                : 'Other'
              ) 
          )
    )   
    return resString;
}
console.log(task(x));