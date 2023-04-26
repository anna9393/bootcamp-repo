'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

//divide canvas into quarters and repeat line-play pattern in each quarter

let density = 20;
let numberOfLines = canvas.width / density;

let x1 = canvas.width - canvas.width;
let y1 = x1;
let x2 = x1;
let y2 = canvas.height;
let x3 = x1;
let y3 = x1;
let x4 = canvas.width;
let y4 = x1;

for (let i = 0; i < numberOfLines; i++) {

    y1 += density / 2;
    x2 += density / 2;
    x3 += density / 2;
    y4 += density / 2;

    ctx.strokeStyle = '#db35dc';
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2 / 2);
    ctx.stroke();

    ctx.strokeStyle = '#44ac8f';
    ctx.beginPath();
    ctx.moveTo(x3, y3);
    ctx.lineTo(x4 / 2, y4);
    ctx.stroke();

    ctx.strokeStyle = '#db35dc';
    ctx.beginPath();
    ctx.moveTo(x1 + (canvas.width / 2), y1);
    ctx.lineTo(x2 + (canvas.width / 2), y2 / 2);
    ctx.stroke();

    ctx.strokeStyle = '#44ac8f';
    ctx.beginPath();
    ctx.moveTo(x3 + (canvas.width / 2), y3);
    ctx.lineTo(x4, y4);
    ctx.stroke();

    ctx.strokeStyle = '#db35dc';
    ctx.beginPath();
    ctx.moveTo(x1, y1 + (canvas.height / 2));
    ctx.lineTo(x2, y2);
    ctx.stroke();

    ctx.strokeStyle = '#44ac8f';
    ctx.beginPath();
    ctx.moveTo(x3, y3 + (canvas.height / 2));
    ctx.lineTo(x4 / 2, y4 + (canvas.height / 2));
    ctx.stroke();

    ctx.strokeStyle = '#db35dc';
    ctx.beginPath();
    ctx.moveTo(x1 + (canvas.width / 2), y1 + (canvas.height / 2));
    ctx.lineTo(x2 + (canvas.width / 2), y2);
    ctx.stroke();

    ctx.strokeStyle = '#44ac8f';
    ctx.beginPath();
    ctx.moveTo(x3 + (canvas.width / 2), y3 + (canvas.height / 2));
    ctx.lineTo(x4, y4 + (canvas.height / 2));
    ctx.stroke();
}