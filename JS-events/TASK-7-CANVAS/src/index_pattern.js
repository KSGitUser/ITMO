'use strict';

const canvas2 = document.createElement('canvas'),  
ctx2 = canvas2.getContext('2d');
canvas2.setAttribute('width','500'); 
canvas2.setAttribute('height','500');      
ctx2.fillStyle = pattern;
ctx2.fillRect(0,0, canvas2.width, canvas2.height);
     
document.body.appendChild(canvas2);
