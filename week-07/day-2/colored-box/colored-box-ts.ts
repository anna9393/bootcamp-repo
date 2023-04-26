const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

//draw a box with different colored lines on each edge

ctx.strokeStyle = `rgba(${136}, ${44}, ${131}, ${0.8})`;
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(200, 100);
ctx.lineTo(400, 100);
ctx.stroke();

ctx.strokeStyle = `rgba(${44}, ${127}, ${136}, ${0.8})`;
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(400, 100);
ctx.lineTo(400, 300);
ctx.stroke();

ctx.strokeStyle = `rgba(${244}, ${182}, ${51}, ${0.8})`;
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(400, 300);
ctx.lineTo(200, 300);
ctx.stroke();

ctx.strokeStyle = `rgba(${139}, ${201}, ${135}, ${0.8})`;
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(200, 300);
ctx.lineTo(200, 100);
ctx.stroke();