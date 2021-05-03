//未実装
//回転させたときの当たり判定

//ユーザーに触られたくないものは全てSetting内へ
const Setting = {
    canvas:undefined,
    ctx:undefined,
    GameObjects:undefined,
    forEachFrame:undefined,
    init:function(){
        Setting.canvas = document.getElementById("canvas");
        Setting.ctx = Setting.canvas.getContext("2d");
        Setting.canvas.width = 640;//デフォルト値
        Setting.canvas.height = 900;
        Setting.GameObjects = [];
        Setting.forEachFrame = [];
        Setting.update();
    },
    update:function(){
        requestAnimationFrame(Setting.update);//フレームごとに

        Setting.ctx.clearRect(0, 0, Setting.canvas.width, Setting.canvas.height);//画面をクリア(前の画面描画を削除)
        
        for(let i=0; i<Setting.GameObjects.length; i++){
            Setting.GameObjects[i].draw();
        }
        for(let i=0; i<Setting.forEachFrame.length; i++){
            Setting.forEachFrame[i]();
        }
    },

}



class GameObject{//public?
    constructor(url, w, h, x, y){
        this.url = url;
        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;
        this.rotate = 0;//初期値
        this.name = "";
        this.tag = "";
        this.indicate = true;//表示
    }

    draw(){
        if(this.indicate){
            const img = new Image();
            img.src = this.url;

            // コンテキストを保存する
            Setting.ctx.save();
            // 回転の中心に原点を移動する
            Setting.ctx.translate(this.x+(this.width/2), this.y+(this.height/2));
            // canvasを回転する
            Setting.ctx.rotate(this.rotate * Math.PI/180);
            // 画像サイズの半分だけずらして画像を描画する
            Setting.ctx.drawImage(img, -(this.width/2), -(this.height/2) ,this.width,this.height);
            // コンテキストを元に戻す
            Setting.ctx.restore();
        }
    }


    onClick(callbackfunc){
        Setting.canvas.addEventListener("click",(event)=>{
            Setting.forEachFrame.push(()=>{
                if
                (
                    this.indicate &&//表示されていて
                    //対象の範囲内なら
                    event.offsetX >= this.x &&
                    event.offsetX <= this.x+this.width &&
                    event.offsetY >= this.y &&
                    event.offsetY <= this.y+this.height
                ){
                    callbackfunc();
                }
            });
        });
    }

    onDoubleClick(callbackfunc){
        Setting.canvas.addEventListener("dblclick",(event)=>{
            Setting.forEachFrame.push(()=>{
                if
                (
                    this.indicate &&//表示されていて
                    //対象の範囲内なら
                    event.offsetX >= this.x &&
                    event.offsetX <= this.x+this.width &&
                    event.offsetY >= this.y &&
                    event.offsetY <= this.y+this.height
                ){
                    callbackfunc();
                }
            });
        });
    }

    onMousedown(callbackfunc){
        Setting.canvas.addEventListener("mousedown",(event)=>{
            Setting.forEachFrame.push(()=>{
                if
                (
                    this.indicate &&//表示されていて
                    //対象の範囲内なら
                    event.offsetX >= this.x &&
                    event.offsetX <= this.x+this.width &&
                    event.offsetY >= this.y &&
                    event.offsetY <= this.y+this.height
                ){
                    callbackfunc();
                }
            });
        });

        Setting.canvas.addEventListener("touchstart",(event)=>{
            Setting.forEachFrame.push(()=>{
                if
                (
                    this.indicate &&//表示されていて
                    //対象の範囲内なら
                    event.touches[0].offsetX >= this.x &&
                    event.touches[0].offsetX <= this.x+this.width &&
                    event.touches[0].offsetY >= this.y &&
                    event.touches[0].offsetY <= this.y+this.height
                ){
                    callbackfunc();
                }
            });
        });
    }

    onMouseUp(callbackfunc){
        Setting.canvas.addEventListener("mouseup",(event)=>{
            Setting.forEachFrame.push(()=>{
                if
                (
                    this.indicate &&//表示されていて
                    //対象の範囲内なら
                    event.offsetX >= this.x &&
                    event.offsetX <= this.x+this.width &&
                    event.offsetY >= this.y &&
                    event.offsetY <= this.y+this.height
                ){
                    callbackfunc();
                }
            });
        });

        Setting.canvas.addEventListener("touchend",(event)=>{
            Setting.forEachFrame.push(()=>{
                if
                (
                    this.indicate &&//表示されていて
                    //対象の範囲内なら
                    event.touches[0].offsetX >= this.x &&
                    event.touches[0].offsetX <= this.x+this.width &&
                    event.touches[0].offsetY >= this.y &&
                    event.touches[0].offsetY <= this.y+this.height
                ){
                    callbackfunc();
                }
            });
        });
    }

    onMouseMove(callbackfunc){
        Setting.canvas.addEventListener("mousemove",(event)=>{
            Setting.forEachFrame.push(()=>{
                if
                (
                    this.indicate &&//表示されていて
                    //対象の範囲内なら
                    event.offsetX >= this.x &&
                    event.offsetX <= this.x+this.width &&
                    event.offsetY >= this.y &&
                    event.offsetY <= this.y+this.height
                ){
                    callbackfunc();
                }
            });
        });

        Setting.canvas.addEventListener("touchmove",(event)=>{
            Setting.forEachFrame.push(()=>{
                if
                (
                    this.indicate &&//表示されていて
                    //対象の範囲内なら
                    event.touches[0].offsetX >= this.x &&
                    event.touches[0].offsetX <= this.x+this.width &&
                    event.touches[0].offsetY >= this.y &&
                    event.touches[0].offsetY <= this.y+this.height
                ){
                    callbackfunc();
                }
            });
        });
    }    



    onCollisionEnter(target,callbackfunc){
        let collisionStarted = false;
        Setting.forEachFrame.push(()=>{//各フレームごとに実行
            if(this.indicate){//表示されていて
                if(target!=undefined && collision(this,target)){
                    if(!collisionStarted){
                        callbackfunc();
                        collisionStarted = true;
                    }
                }
                else if(!collision(this,target)&&collisionStarted){//次の衝突に備える
                    collisionStarted = false;
                }
            }
        });
    }

    onCollisionStay(target,callbackfunc){
        Setting.forEachFrame.push(()=>{
        if(this.indicate && target!=undefined && collision(this,target)){
            callbackfunc();
        }
        });
    }

    onCollisionExit(target,callbackfunc){
        let collisionStarted = false;
        Setting.forEachFrame.push(()=>{
            if(this.indicate){//表示されていて
                if(target!=undefined && collision(this,target)){
                    collisionStarted = true;
                }
                else if(!collision(this,target)&&collisionStarted){
                    callbackfunc();
                    collisionStarted = false;
                }
            }
        });
    }
}



function create(url,w,h,x,y){//public
    const obj = new GameObject(url,w,h,x,y);
    Setting.GameObjects.push(obj);
    return obj;
}


function getByName(name){//public
    for(let i=0; i<Setting.GameObjects.length; i++){
        if(Setting.GameObjects[i].name==name){
            return Setting.GameObjects[i];
        }
    }
}

function getByTag(tag){//public
    const obj = [];
    for(let i=0; i<Setting.GameObjects.length; i++){
        if(Setting.GameObjects[i].tag==tag){
            obj.push(Setting.GameObjects[i]);
        }
    }

    return obj;
}


//矩形の当たり判定
function collision(gameObject1,gameObject2){//public?
    const centerX_1 = gameObject1.x + gameObject1.width/2;
    const centerY_1 = gameObject1.y + gameObject1.height/2;
    const centerX_2 = gameObject2.x + gameObject2.width/2;
    const centerY_2 = gameObject2.y + gameObject2.height/2;

    if(
        Math.abs(centerX_1 - centerX_2) <= gameObject1.width/2 + gameObject2.width/2 //横の判定
        &&
        Math.abs(centerY_1 - centerY_2) <= gameObject1.height/2 + gameObject2.height/2 //縦の判定
    )
    {
        return true; // hit
    }
    else
    {
        return false;
    }
}

window.addEventListener("load",()=>{
    Setting.init();
    
    //ユーザースクリプトを読み込み
    const elm = document.createElement("script");
    elm.src = "./userScript.js";
    document.body.appendChild(elm);


});



// const drawRotatedImage = function(image, x, y, w, h, angle){
//     // コンテキストを保存する
//     Setting.ctx.save();
//     // 回転の中心に原点を移動する
//     Setting.ctx.translate(x, y);
//     // canvasを回転する
//     Setting.ctx.rotate(angle * Math.PI/180);
//     // 画像サイズの半分だけずらして画像を描画する
//     Setting.ctx.drawImage(image, 0, -h ,w,h);
//     // コンテキストを元に戻す
//     Setting.ctx.restore();
// }