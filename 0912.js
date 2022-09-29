/*
//data type (資料 型態)
    //number
    console.log(5);
    console.log(3.14); 
    //string
    console.log("have a good day");
    console.log('ohoh'); 
    //bollean
    console.log(true) ;
    false;
    //空值
    console.log(undefined); 
    null;

console.log("----下一趴----");

//變數: 可以存放資料，且可命名的空間
    //let 
    let x;
    console.log(x);
    x='happy or not?';
    console.log(x);
    //const常數
    const y=100;
    console.log(y);
    //y=200;

//流程控制，讓程式碼除了上到下，有更多的執行方式
 //判斷式
        //if else
        if(true){
            console.log("gooood");
        }

        //踩地雷1-10，地雷數字=8
        //let n=prompt("請輸入一數")
        let n=5;
        if(n<8){
            console.log('數字在大點');
        }else if(n==8){
            console.log("賓果歐");
        }else{
            console.log("數字在小一點");
        }
        //switch case

   //迴圈 
    //題目(1) 1+2+3+...+10
        //while
        let a=0;//1、2、3數字追蹤
        let result=0;
        while(a<=10) {
            if(a==3){//只追蹤到a=1、2，1+2=3
                break;
            }
            result=result+a;
            a++;
        }
        console.log("3的等差級數相加",result);

        //for
        let result2=0;
        for(let b=0;b<=5;b++){
            if(b==3){
                continue;
            }
            result2=result2+b;
        }
        console.log("result2",result2);

//函式:包裝好的程式區塊
    //呼叫、建立函數
    function hello(){
        console.log("hi");
    }
    hello();

    let hello2=function(){
        console.log("hihi");
    }
    hello2();

    //參數運算
    function show(msg) {
        console.log(msg);
    }
    show(10);
    show("hey");
    show();

    function count(n1,n2) {
        let result=n1+n2;
        console.log(result);
    }
    count(1,2);
    count("hello","world");
    count(true,false);

    //回傳值 return
    function minus(a1,a2){
        console.log(a1-a2);
        return "omg";
    }
    let aa=minus(6,1);
    console.log(aa);

    function minus2(a1,a2){
        let mm=a1-a2;
        return mm;
    }
    let reM=minus2(8,1);
    console.log(reM);
    console.log(reM+2); 

    function minus3(a1,a2){
        let mm=a1-a2;
        console.log(mm);
        return mm;
    }
    let reM3=minus3(6,3);
*/
/*
console.log("is a good day");
//物件Object: 一樣是資料型態(num,string,bollean)，但是來「封裝其他資料的容器歐」
    //建立物件，其中物件成員紙是名詞的溝通方法有所不同
    let obj=new Object();
    obj.num=3;    //屬性 ，非函數RR
    obj.str= "o";  //屬性
    console.log(obj.str+obj.num+obj.str);
    obj.happy=function(){      //方法
        console.log('today is raining');
    }
    obj.happy();
    obj.boo=true;
    console.log(obj.boo);
  
    //Json {}
    let obj1={
        num1:5,
        str1:"w",
        boo1:false,
        happy1:function(){
            console.log("is sunny");
        }
    }
    console.log(obj1.num1+obj1.str1+obj1.num1);
    obj1.happy1();
    console.log(obj1.boo1);
    
    //出題時間，請用「做物件」
    let girl = new Object();
    girl.age=7;
    girl.name="櫻桃小丸子";
    girl.talk=function(){
        return "爺~"
    };
    let gt=girl.talk();
    console.log("我的名字是",girl.name,"我今年",girl.age,"歲","我的口頭禪是",gt);
    console.log("乾 我真的好棒歐歐，竟然打出上面辣個!!");

    let boy={
        age:5,
        name:"野原新之助",
        talk:function(){
            return "露屁屁外星人"
        }
    };
    let bt=boy.talk();
    console.log("我叫",boy.name,"我今年",boy.age,"歲","我的口頭禪是",bt); 
*/
/*
//陣列物件Array:按照順序的在物件裡存放資料 []
    //建立
    //json
    let arr=[1,2,]; //陣列物件要獨自美麗，不用展開把東西包裹進去
        arr.push(5);
        arr.push("hola")
        arr.push(function hi() {
            console.log("hihi");
        })
        arr.push(false);
    console.log(arr);
    console.log(arr[3]);
    console.log(arr.length);
*/
/*
    //出題時間! 做成績的物件陣列，需要有班總分、班平均歐歐要試for迴圈歐
    let cla=[5,10,7];
        cla.push(6,8,4);
    console.log("班上共用",cla.length,"位學生");

    for(let i=0;i<cla.length;i++){
        if (i==2) {
        console.log("小明是座號",i,"成績是",cla[i],'分'); 
        }
    }    

    let score=0;
    for(let i=0;i<cla.length;i++){ //不可以i<=cla.length，因length=6，但陣列空間是計算是[0、1、2、3、4、5]，又i是0-6，所以會多一個空白 的陣列空間 
        score+= cla[i];
    }
    let ave= score/cla.length
    console.log("班上總分",score,"平均分數",ave);
    console.log(cla);
*/

要整理RRR有空在說
//基本變數 : 1.字串 2.number 3.boolean 4.undefined 5.null (4、5近乎相似，但有區別，則一使用)

let string = 'hello world' //字串
let string2 = 'omg'
let string3 = string  + string2
console.log(string3)

/* let number = 100 //數字，不論整數或小數點，都被記錄成雙精度的福點數
console.log(number)

let isFake = false //boolean
console.log(isFake)

let bag = undefined
console.log(bag)

let bag2 = null
console.log(null)*/
//--宣告變數--- 1.var 2.let(2可以全部取代1) 3.cosnst (變數永遠不被修改)
const a1 ='aaa'
console.log(a1)
//a1 ='bbb'
//console.log(a1)