
//create function, draw three centered boxes with that function
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

function drawCenteredBoxes (a){

    for (let i = 0; i < 3; i++){

        a += 60;

        let x = (600 / 2) - (a / 2);
        let y = (400 / 2) - (a / 2);

        ctx.strokeRect(x, y, a, a);
    }
}
drawCenteredBoxes(130);