const body = document.querySelector("body");
let pen = document.createElement("canvas");
pen.id = 1;
pen.width = 720;
pen.height = 420;
body.appendChild(pen);
const canvas = document.querySelector("canvas");
const ptx = pen.getContext("2d");



let layer = [];
let layId=0;

layer[layId] = document.querySelector("canvas");
const ctx = layer[layId].getContext("2d");

let startX;
let startY;

let mouseX;
let mouseY;

let drawing = false;

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(mouseX, mouseY);
    ctx.stroke();
    ptx.beginPath();
    ptx.moveTo(startX, startY);
    ptx.lineTo(mouseX, mouseY);
    ptx.stroke();
}

function makeLay(){
    init();
    layer[layId] = document.createElement("canvas");
    layer[layId].id = 1;
    layer[layId].width = 720;
    layer[layId].height = 420;
    body.appendChild(layer[layId])
}

function up(e){
    drawing = false;
    layId++;
    const lay ={
        id:layId
    }
    layer.push(lay);
    makeLay();
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
    
    console.log("hey")
}

function init(){
    layer[layId] = document.querySelector("canvas");
    const ctx = layer[layId].getContext("2d");
    layer[layId].addEventListener("mousemove", function (e) { move(e) });
    layer[layId].addEventListener("mousedown",function (e) { down(e) });
    layer[layId].addEventListener("mouseup",function (e) { up(e) });
}

init();