'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export { };

// function fill canvas with a rainbow of colored squares

function drawSquaredRainbow(a, b) {

    for (let i = 0; i < 120; i++) {

        for (let n = 0; n < b.length; n++) {
            let x = (canvas.width / 2) - (a / 2);
            let y = (canvas.height / 2) - (a / 2);

            a += 10;

            ctx.strokeStyle = b[n];
            ctx.strokeRect(x, y, a, a);
        }
    }
}
drawSquaredRainbow(10, ['#61afa2', '#fbc743', '#fb0796', '#d4b2ca', '#bba84e', '#19e8e7']);