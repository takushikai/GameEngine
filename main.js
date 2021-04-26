var canvas, ctx;
var x = 0, y = 0, vx = 1, vy = 1;
//初期処理
function init(){
    canvas = document.getElementById("canvas");
    canvas.width = 640;
    canvas.height = 900;
    ctx = canvas.getContext("2d");//コンテキスト
    
    requestAnimationFrame(update);//フレーム処理のお知らせを送る
}
//四角を描く
function drawRect(x, y, w, h){
    ctx.fillStyle = "white";
    ctx.fillRect(x, y, w, h);
}
//画面描画処理
function render(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);//画面をクリア(前の画面描画を削除)
    x += vx;
    y += vy;
    if(x >= canvas.width - 64){
        vx = -1;
    }else if(x <= 0){
        vx = 1;
    }
    if(y >= canvas.height - 64){
        vy = -1;
    }else if(y <= 0){
        vy = 1;
    }
    drawRect(x, y, 64, 64); 
}
//更新処理
function update(){
    render();
    requestAnimationFrame(update);//フレーム処理のお知らせを送る
}
//開始
window.onload = function(){
    init();
}