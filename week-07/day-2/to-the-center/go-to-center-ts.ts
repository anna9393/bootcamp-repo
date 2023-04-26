
//function create three lines from start point to the center of canvas
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

function threeLinesToCenter(x, y){

ctx.strokeStyle =`rgba(${180}, ${50}, ${192}, ${0.98})`;
ctx.lineWidth = 3;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(300, 200);
ctx.stroke();

for (let i = 1; i < 3; i++ ){
    x = x + 100;
    y = y + 10;

    ctx.strokeStyle =`rgba(${180}, ${50}, ${192}, ${0.98})`;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(300, 200);
    ctx.stroke();
    }
}
threeLinesToCenter(550, 50);