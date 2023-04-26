'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height)

//function use nested for loops to draw rows of triangles into pyramid pattern

function fillTriangle(x, y, width, height) {
    ctx.strokeStyle = "#ebda26";
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(x, y + height);
    ctx.lineTo(x + width, y + height);
    ctx.lineTo(x + width / 2, y);
    ctx.lineTo(x, y + height);
    ctx.stroke();
}

let width = 20;
let height = 20;
const numTriangles = canvas.width / width;
const numRows = numTriangles;

for (let j = 0; j < numRows; j++) {
    for (let i = 0; i < (numTriangles - j); i++) {

        fillTriangle(
            (width * j) + (i * (width / 2)),
            (canvas.height - (height * 2)) - (i * height),
            width,
            height)
    }
}