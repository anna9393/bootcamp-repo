'use strict';

// Draw a green 10x10 square to the center of the canvas

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

ctx.fillStyle = 'green';
ctx.fillRect(295, 195, 10, 10);
