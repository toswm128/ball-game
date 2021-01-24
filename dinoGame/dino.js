const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d");

const maxWid = canvas.width;
const maxHei = canvas.height

let y = maxHei-50;

function paint(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath()
    ctx.fillRect(50,y,50,50);
    ctx.stroke();
}

function jump(){
    if(y>170){
        y=y-1;
        console.log(y)
    } else {
        clearInterval(jump);
        setInterval(down,1)
    }
    paint();
}

function plus(){
    if(y>170){
        let jumpp = setInterval(jump,1);
    }else{

    }
    paint();
    return 0;
}

function down(){
    if(y !== maxHei-50){
        y=y+1;
        console.log("down")
        paint();
    }
}

function fall(){
    if(y<=maxHei-50){
        y++;
    }
}

function init(){
    paint();
    canvas.addEventListener("mousedown",plus)
    
    console.log("hey")
}

init();