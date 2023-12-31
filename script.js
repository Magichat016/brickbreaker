var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");

let ball_x = 20; 
let ball_y = 20;
let ball_radius = 10;




function balldraw(){
    ctx.beginPath(); // パスの初期化
    ctx.arc(ball_x, ball_y, ball_radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill(); 
    ctx.closePath(); // パスを閉じる
    
}

function Alldraw(){
    balldraw();
}

