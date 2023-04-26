const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};
 
//create function: color depends on position of diagonal

function diagonal(x1, y1, x2, y2){

if ((x1 == 0 && y1 == 0) || (x2 == 0 && y2 == 0)){

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.stroke();
}
else {
    
ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.stroke();

}
}
diagonal(100, 100, 20, 30);

