'use strict';

const makeCanvas = (x, y) => {
  const canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');
  canvas.setAttribute('width', x);
  canvas.setAttribute('height', y);
  return { canvas, ctx };
};

const { canvas, ctx } = makeCanvas(102, 102);

ctx.strokeStyle = 'blue'; // color of line
ctx.lineWidth = '2px'; // width of line

const initialCoordinates = { x: 10, y: 10 };
const halfOfLetterHeight = 32;
const dotHeight = 3;
const betweenLetters = 16;

const drawLetterA = (lineLength, leftCornerCoordinates) => {
  ctx.beginPath();
  ctx.moveTo(leftCornerCoordinates.x, leftCornerCoordinates.y + lineLength * 2);
  ctx.lineTo(leftCornerCoordinates.x, leftCornerCoordinates.y + lineLength);
  ctx.lineTo(leftCornerCoordinates.x + lineLength, leftCornerCoordinates.y);
  ctx.lineTo(
    leftCornerCoordinates.x + lineLength,
    leftCornerCoordinates.y + lineLength * 2
  );
  ctx.moveTo(leftCornerCoordinates.x, leftCornerCoordinates.y + lineLength);
  ctx.lineTo(
    leftCornerCoordinates.x + lineLength,
    leftCornerCoordinates.y + lineLength
  );

  ctx.stroke();
  ctx.closePath();

  return {
    x: leftCornerCoordinates.x + lineLength,
    y: leftCornerCoordinates.y + lineLength * 2,
  };
};

const drawDot = (lineLength, leftCornerCoordinates) => {
  ctx.beginPath();
  ctx.fillRect(
    leftCornerCoordinates.x,
    leftCornerCoordinates.y,
    lineLength,
    lineLength
  );
  ctx.stroke();
  ctx.closePath();
  return {
    x: leftCornerCoordinates.x + lineLength,
    y: leftCornerCoordinates.y + lineLength,
  };
};

const drawLetterC = (lineLength, leftCornerCoordinates) => {
  ctx.beginPath();
  ctx.moveTo(leftCornerCoordinates.x + lineLength, leftCornerCoordinates.y);
  ctx.lineTo(leftCornerCoordinates.x, leftCornerCoordinates.y);
  ctx.lineTo(leftCornerCoordinates.x, leftCornerCoordinates.y + lineLength * 2);
  ctx.lineTo(
    leftCornerCoordinates.x + lineLength,
    leftCornerCoordinates.y + lineLength * 2
  );

  ctx.stroke();
  ctx.closePath();

  return {
    x: leftCornerCoordinates.x + lineLength,
    y: leftCornerCoordinates.y + lineLength * 2,
  };
};

const drawBezier = (beginOfBezie, cpPoint, endPoint, color = 'red') => {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(beginOfBezie.x, beginOfBezie.y);
    ctx.quadraticCurveTo(cpPoint.x, cpPoint.y, endPoint.x, endPoint.y);
    ctx.stroke();
    ctx.closePath();
};

const drawItitials = () => {
    let rightCornerCoodinates = drawLetterC(halfOfLetterHeight, initialCoordinates);
    rightCornerCoodinates = drawDot(dotHeight, {
      x: rightCornerCoodinates.x + dotHeight,
      y: rightCornerCoodinates.y - dotHeight,
    });
    let beginOfNextLetter = {
      x: rightCornerCoodinates.x + (betweenLetters - dotHeight * 2),
      y: rightCornerCoodinates.y - halfOfLetterHeight * 2,
    };
    rightCornerCoodinates = drawLetterA(halfOfLetterHeight, beginOfNextLetter);
    rightCornerCoodinates = drawDot(dotHeight, {
      x: rightCornerCoodinates.x + dotHeight,
      y: rightCornerCoodinates.y - dotHeight,
    });
    
    drawBezier({ x: 10, y: 82 }, { x: 60, y: 98 }, { x: 95, y: 82 });
}

drawItitials();

const rotateTo = (degree) => {
    return Math.PI * degree / 180
}

ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.translate(46,50);  

ctx.rotate(rotateTo(-90));
ctx.translate(-50,-46);
drawItitials()

const pattern = ctx.createPattern(canvas,"repeat")

document.body.appendChild(canvas);
