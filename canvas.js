var canvas = document.getElementById("canvas1"); 
var ctx = canvas.getContext("2d");

const maxWid = canvas.width;
const maxHei = canvas.height

let x=21,y =maxHei-21;
let moveX = 1;
let moveY = 1;

function paint(){
    console.log(x,y);
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.stroke();
}

function plus(){
    console.log(x,y,moveX);
    if(x<20 || x>maxWid-20){
        moveX = moveX*-1;
    }
    if(y<20 || y>maxHei-20){
        moveY = moveY*-1;
    }
     x=x+moveX;
     y=y-moveY
    paint();
}

function init(){
    paint();
    canvas.addEventListener("click",plus)
    setInterval(plus,1)
}

init();