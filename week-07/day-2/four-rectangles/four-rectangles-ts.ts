
// draw four different size and color rectangles

'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

ctx.fillStyle = '#f1e061';
ctx.fillRect(50, 30, 300, 300);
ctx.fillStyle = '#cdeead';
ctx.fillRect(180, 80, 130, 130);
ctx.strokeStyle = '#04a7c5';
ctx.lineWidth = 3;
ctx.strokeRect(180, 230, 90, 90);
ctx.strokeStyle = '#a20761';
ctx.lineWidth = 5;
ctx.strokeRect(200, 100, 200, 200 );