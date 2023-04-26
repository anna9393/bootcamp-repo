'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export { };

//create string of squares with connected corners

function createStringOfRect(x, y, a, numRect) {

    for (let i = 0; i < numRect; i++) {

        x += a + 1;
        y += a + 1;

        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, a, a);
        ctx.fillStyle = '#b75ebf';
        ctx.fillRect(x, y, a, a);
    }
}
createStringOfRect(5, 5, 20, 10);