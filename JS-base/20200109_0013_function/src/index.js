const concat = require('goss_concat');

const colorInRgb = (r = 255, g = 255, b = 255) => concat('rgb(', r , ',', g , ',' , b , ')');

console.log(colorInRgb(0,35,134))




