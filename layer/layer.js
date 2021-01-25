const body = document.querySelector("body");
let pen = document.createElement("canvas");
pen.id = 1;
pen.width = 720;
pen.height = 420;
body.appendChild(pen);
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");


let startX;
let startY;

let mouseX;
let mouseY;

let drawing = false;

function draw(){
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(mouseX, mouseY);
    ctx.stroke();
}

function up(e){
    drawing = false;
}

function down(e) {
    startX = e.offsetX; startY = e.offsetY;
    drawing = true;
}

function move(e){
    if(!drawing) return;
    mouseX = e.offsetX;
    mouseY = e.offsetY;
    draw();
    startX = mouseX; startY = mouseY;
    console.log("hey")
}

function init(){
    
    pen.addEventListener("mousemove", function (e) { move(e) });
    pen.addEventListener("mousedown",function (e) { down(e) });
    pen.addEventListener("mouseup",function (e) { up(e) });
}

init();