
// create function, draw three 50x50 squares with that function

'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

function drawThreeSquares(x, y){

    for (let i = 0; i < 3; i++ ){

        x += 100;
        y += 50;

        ctx.fillStyle = 'blue';
        ctx.fillRect(x, y, 50, 50);
    }
}
drawThreeSquares(50, 50);