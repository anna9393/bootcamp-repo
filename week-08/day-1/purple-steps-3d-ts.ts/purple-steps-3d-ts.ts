'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export { };

//create string of rectangles
//each rectangle is twotimes bigger than previous

let position = 2;
let a = 2;

for (let i = 0; i < 6; i++) {

    position = position * 2;
    a = a * 2;

    ctx.strokeStyle = 'black';
    ctx.strokeRect(position, position, a, a);
    ctx.fillStyle = '#4d22ee';
    ctx.fillRect(position, position, a, a);
}