/**
 * @version 0.1
 * @name 決めてない。
 * 
 */
/*
【設定】
・画面幅(デフォルト：640)
Setting.canvas.width = 値;
・画面高さ(デフォルト：900)
Setting.canvas.height = 値;

【ゲームオブジェクトを作る】
new GameObject(url,w,h,x,y);
w:幅(number)
h:高さ(number)
x,y:座標(number)

【ゲームオブジェクトを取得する】
getByName(name);
name:ゲームオブジェクトの名前(string)

getByTag(tag);
tag:タグ(string)
※戻り値は配列であることに注意


※以下、「GameObject」はゲームオブジェクトが格納された変数を指す。

【ゲームオブジェクトの操作】
以下は、「=」で値を代入することで変更出来る。
GameObject.width
GameObject.height
GameObject.x
GameObject.y
GameObject.rotate
GameObject.name
GameObject.tag

Object.indicate = false;
とすることで、GameObjectを非表示に出来る。
(再表示するときは Object.indicate = true;)


【ゲームオブジェクト組み込み関数(厳密にはメソッド)】
・クリックされたとき
GameObject.onClick(callbackFunction);
callbackFunction:関数

・衝突開始時
GameObject.onCollisionEnter(target, callbackFunction);
target:対象のGameObject
callbackFunction:関数(衝突時に一度だけ呼び出される)

・衝突中
GameObject.onCollisionStay(target, callbackFunction);
target:対象のGameObject
callbackFunction:関数(衝突している間、各フレームごとに呼び出される)

・衝突後
GameObject.onCollisionExit(target, callbackFunction);
target:対象のGameObject
callbackFunction:関数(衝突後に一度だけ呼び出される)

*/


//以下サンプルスクリプト

const target = new GameObject("./images/cat.jpg",100,100,0,0);
const me = new GameObject("./images/cat.jpg",100,100,300,300);


//ぶつかったらtargetを消す
// target.onCollisionEnter(obj2,()=>{
//     // target.indicate = false;
// });

//targetを１秒ごとにxに方向に10だけ移動させる
setInterval(()=>{
    const obj = new GameObject("./images/cat.jpg",100,100,Random(100,0),0);
    obj.tag = "target";
    target.x+=10;
    target.y+=15;
    target.rotate+=45;
}, 1000);

// me.onCollisionEnter(target,()=>{
//     target.indicate = false;
// });
me.onCollisionEnter(target,()=>{});
target.clone(100,100,100,100);

window.addEventListener("keydown",(e)=>{

    if(e.key=="ArrowRight"){
        e.preventDefault();
        me.x+=10;
    }
    else if(e.key=="ArrowLeft"){
        e.preventDefault();
        me.x-=10;
    }
    else if(e.key=="ArrowUp"){
        e.preventDefault();
        me.y-=10;
    }
    else if(e.key=="ArrowDown"){
        e.preventDefault();
        me.y+=10;
    }

    if(e.key=="Enter"){
        let tama = new GameObject("./images/cat.jpg",20,20,me.x,me.y);
        // tama.tag = "tama";
        tama.onCollisionEnter(target,()=>{
            target.indicate = false;
        })

        
        setInterval(()=>{
            // tama.x-=15;
            tama.y-=15;
            tama.rotate+=90;
        }, 10);
    }
});

var aa = getByTag("target");

setInterval(()=>{
    console.log(aa);
}, 1000);
