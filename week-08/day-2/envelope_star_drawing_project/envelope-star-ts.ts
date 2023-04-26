'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

const canvasHeight = canvas.height;
const canvasWidth = canvas.width;
let density = 4;
let numberOfLines = (canvasWidth / 2 - canvasWidth / 20) / density + 1;

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvasWidth, canvasHeight);

for (let counter = 0; counter < numberOfLines; counter++){
    ctx.strokeStyle = '	#a4cb45';
    ctx.beginPath();
    ctx.moveTo(canvasWidth / 20 + counter * density, canvasHeight / 2);
    ctx.lineTo(canvasWidth / 2, canvasHeight / 2 - counter * density);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(canvasWidth - canvasWidth / 20 - counter * density, canvasHeight / 2);
    ctx.lineTo(canvasWidth / 2, canvasHeight / 2 + counter * density);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(canvasWidth / 20 + counter * density, canvasHeight / 2);
    ctx.lineTo(canvasWidth / 2, canvasHeight / 2 + counter * density);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(canvasWidth - canvasWidth / 20 - counter * density, canvasHeight / 2);
    ctx.lineTo(canvasWidth / 2, canvasHeight / 2 - counter * density);
    ctx.stroke();
}