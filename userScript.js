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
create(w,h,x,y);
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

const obj1 = create(10,10,10,10);
const obj2 = create(10,10,50,10);
obj1.rotate = 90;

//ぶつかったらobj1を消す
obj1.onCollisionEnter(obj2,()=>{
    // obj1.indicate = false;
});

//obj1を１秒ごとにxに方向に10だけ移動させる
// setInterval(()=>{
//     obj1.x+=10;
// }, 1000);
