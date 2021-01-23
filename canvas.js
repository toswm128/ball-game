var canvas = document.getElementById("canvas1"); 
var ctx = canvas.getContext("2d");

const maxWid = canvas.width;
const maxHei = canvas.height

let x=100,y =200;
let moveX = 1;
let moveY = 1;

let boxX = 50;
let boxY = 50;

function paint(){
    console.log(x,y);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillRect(boxX,boxY,10,100);
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.stroke();
}

function plus(e){
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;
    console.log(x,y,mouseX,mouseY);
    boxX = mouseX;
    boxY = mouseY;
    if(boxX<x&&x<boxX+30){
        if(boxY<y&&y<boxY+120){
            moveX = moveX*-1;
            ctx.strokeStyle="green"
        }
    }

    if(x<20 || x>maxWid-20){
        moveX = moveX*-1;
        ctx.strokeStyle="blue";
    }
    if(y<20 || y>maxHei-20){
        moveY = moveY*-1;
        ctx.strokeStyle="red";
    }
     x=x+moveX;
     y=y-moveY
    paint();
}

function move(e){
    const mouseX = e.offsetX;
    console.log(`${mouseX}sadasds`);
}

function paintR(){
    ctx.fillRect(50,50,10,100);
}

function init(){
    paint();
    paintR();
    canvas.addEventListener("mousemove", function (e) { plus(e) });
    requestAnimationFrame(plus);
    
}

init();