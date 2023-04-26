
// create function, draw 3 horizontal lines with that function using a loop

'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

function drawHorizontalLine(x1, y1){

    let x2 = x1;
    let y2 = y1 + 50;
    
    for(let i = 0; i < 3; i++){

        x1 += 100;
        x2 = x1;
       
    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    }
}

drawHorizontalLine(150, 200);