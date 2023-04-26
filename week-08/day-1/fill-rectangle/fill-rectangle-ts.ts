'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

// practice draw rectangle with any parameters anywhere in the canvas 

function fillRectangle(x, y, width, height) {
    ctx.strokeStyle = "black";

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + height);
    ctx.lineTo(x + width, y + height);
    ctx.lineTo(x + width, y);
    ctx.lineTo(x, y);
    ctx.stroke();
}
fillRectangle(10, 10, 300, 350);