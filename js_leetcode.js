/*
//練習1
 let n=1;
 while (n<10) {
    console.log(n);
    n++;
 }

 for(let m=1;m<10;m++){
    console.log(m);
 }

 //練習2
 function print(){
    let nb = prompt("請輸請輸入任一數")

    for(let m=1;m<=nb;m++){
        console.log(m);
     }
 }
 print();


 function wh_print(){
    let wnb=prompt("請任意輸入一數")
    let n=1
    while (n<=wnb) {
        console.log(n);
        n++
    }
 }
 wh_print();
 

 //練習三
 function star(n) {
    let st=" ";
    for(let i=0;i<=n;i++){
        console.log(st);
        st+="*";
    }
 }
 star(3);

 function wh_star(n){
    let pl='';
    let j=0;
    while(j<=n){
        console.log(pl);
        pl+='+';
        j++;
    } 
 }
wh_star(5)


//練習四
let st=""
function starReturn(n1) {
    for(let i=0;i<n1;i++){
        st+="*";
    }
   return st
}
//let star= starReturn(6);
console.log(starReturn(6));

//練習五   -看答案題:不用設立arr去判別，字串本身就有陣列含意，把陣列[0]的data存放在另一變數上，用另一變數去判別
function isUpperCas(str) { 
    if(str[0]>='A' && str[0]<='Z'){
        console.log(true);
    }else{
        console.log(false);
    }
}
    //判斷大小寫
    //if (n >= "A" && n <= "Z"){ 
   
isUpperCas("abcde");

//練習六
function position(str) {
    for(let i=0;i<str.length;i++){
        if(str[i]>="A" && str[i]<="Z"){
            console.log(str[i],i+1);
        //如果都沒有發現大寫，就回傳付一
        }else if(str[i]>="a" && str[i]<="z"){
            let a="-1";
        }
        
    }
}
position("abCd")
*/

//題目七:陣列在建立函數裡一樣是隨意給參數名稱，在呼叫函數理才定義其資料型態。
//宣告:function 函式名字(就只是個參數名稱+數量);呼叫:函式名字(資料型態num,string,boolean,物件)

function findSmallCount(arry,num) {
    console.log(arry);
    let countSmall=0;
    for(let i=0;i<arry.length;i++){
        if(arry[i]<num){
            countSmall++;
        }
    }
    console.log(countSmall);
}
//findSmallCount([5,4,3,2],4);

//題目八
function findSmallerTotal(arry,num) {
    console.log(arry);
    let countSmall=0;
    for(let i=0;i<arry.length;i++){
        if(arry[i]<num){
            countSmall+=arry[i];
        }
    }
    console.log(countSmall);
}
//findSmallerTotal([3, 2, 5, 8, 7], 0);

//題目九
function findAllSmall(arry,n) {
    //pop掉，for迴圈+If去找那個大於N的存放位置，去pop掉[i]-->不合理，資料結構只有先進先出或先進後初沒有這種
    //把小於n的數存到新的arr，一樣用for+if去找，找小於N的數字，再利用{nArry.push(arry[i])}包在if李
    let nArry=[];
    for(let i=0;i<arry.length;i++){
        if(arry[i]<n){
            nArry.push(arry[i])
        }
    }
    console.log(nArry);
}
//findAllSmall([1, 3, 5, 4, 2], 4);

//題目十
let total=0;
function sum(arr){
    for(let i=0;i<arr.length;i++){
        total+=arr[i];
    }
    console.log(total);
}
//sum([-1, 1, 2, -2, 3, -3]);

//題目十一
let st=" ";

function stars(n){
    for(let i=0;i<n;i++){
        st+="*";
        console.log(st);
    }
}
//stars(7);

//題目十二
let str=' ';
let divi='\\n'
let combi;
let spa='';
function makeStars(n){
    // \n是分隔，**是計數，只要完成一個*再加上\n就可以進下個階段。
    //直接在 st+='*' +\n，可是(1)-->用if i>1，
    //for迴圈換行問題要怎麼解?-->直接在for迴圈外面阿
    for(let i=0;i<n;i++){
        if(i==0){
            str+='*';
            combi= str;
        }else{
            str+='*';
            combi=divi+str
        }
        spa +=combi
    }   
    console.log(spa);
}
//makeStars(3);

//題目十三:乾乾乾 他就是兩個迴圈拉 不是巢狀 想錯了真的就是兩層而已啊阿 智障歐歐!!! 好啦 優點是我學到巢狀的姿勢惹
function ms(m) {
    let str3='';
    for(let j=1;j<=m;j++){
        str3+='*';
    }
    console.log(str3);
}

function star2(n) {
    //console.log(n);
    for(let i=1;i<=n;i++){
        ms(i);
    }
  
    for(i=n-1;i>0;i--){
        ms(i)
    }
}
//star2(5);

//題目十四
function cross(m) {
    let count=0;
    for(let i=1;i<=9;i++){
        count=m*i;
        console.log("",m,'*',i,'=',count);
    }
}
function table(n) {
    //1-9是固定，for迴圈一個
    //現在的問題點是要怎麼去n*1-9
    cross(n);
}
//table(3)

//題目十五:兩個各別的for迴圈去形成交互作用，建立一個i的1-9迴圈，與J 1-9的迴圈，當i=1就跑去和j=1-9互動，接下來就i=2~~~
//法一 巢狀
function table9to9_1(){
    for(i=1;i<=9;i++){
        for(j=1;j<=9;j++){
            console.log("",i,"*",j,"=",i*j);
        } 
    }  
}
//table9to9_1();

//法二 兩個for迴圈
function apart(n) {
    for(j=1;j<=9;j++){
        console.log("",i,"*",j,"=",n*j);
    }
}

function table9to9_2(){
    for(i=1;i<=9;i++){   
        apart(i)
    }
}
//table9to9_2();

//題目十六:乾乾乾，沒有細看題目 想錯了拉qaq
/* 巄喜垃圾
function sum(arry){
    let i1=0;
    let i2=0;
    //console.log(arry);
    for(let j=0;j<arry.length;j++){
        if(j==arry.length-2){
            i2=arry[j]
        }
        if(j==arry.length-1){
            i1=arry[j];
        }
    }
    console.log(i2+i1);
}
function fase(n){
//兩個for迴圈，其一是計算數字1-5，另一是計算前兩個數字之和(要去計算跑到的位置)
//要一個變數存放放置(1,2,3,4)的數字
//要有位置的概念 arr(上面辣個變數成arr[])
//for(i=0;i<n;i++)，if(i == i-1){let i1=i},if(i==i-2){let i2=i}，let count=i1+i2,log(count)
    let arr=[];
    for(let i=0;i<n;i++){
        arr.push(i);
        //console.log(arr);
    }
   sum(arr);
}
fase(8);
*/
function fase(n) {
    //建立一個陣列，存放【1、1、2、3、5、8、13、21】
    //f(1)=1，f(2)=1，f(3)=1+1>2，f(4)
    let arr=[0,1];
    if (n <= 0) { return 0 }
    if (n > 0 && n <= 2) { return 1 }
    for(let i=2;i++;i<=n){
        arr.push(arr[i-1]+arr[i-2]) 
    }
    console.log(arr[i]);
}
//fase(0);
//題目十七:字串、回傳反轉(順序1234->4321)過後
//str
//要一個陣列放原始字串(1234)，並用for迴圈從n--列印回來
function reverse(str) {
    let nstr='';
    for(let i=str.length-1;i>=0;i--){
        nstr+=str[i]
    }
    console.log(nstr)
}
//reverse("12345aa")

//題目十八:字串，大小寫互換
//大小寫互換的語法是什麼? 一個個換按照順序("abc")->先換A，站存在另外空間，在換B，在站存另外空間。如果是大寫換小寫if(i>=A && i<=Z){charCodeAt(=""(站存在tn1，並用nn=tn1+32)，在用ns1 =String.fromCharCode(nn)}，是小寫換大寫
/*大小寫互換: 用unucode
1. charCodeAt() : 回傳指定位置的字串的 Unicode 編碼。-->"a".charCodeAt(0) 
2. fromCharCode() : 解析指定的 Unicode 編碼，然后回傳一個對應的字串-->String.fromCharCode(97)
大寫跟小寫的英文字母之間差了32的數字*/ 

function swap(str) {
    let nstr=''
    for(i=0;i<str.length;i++){
        //console.log(str[i]);
        if (str[i]>='A' && str[i]<='Z') {
            //console.log("當i為",i,'時，其值為',str[i]);
            let num = str[i].charCodeAt()
            //console.log(str[i],"的萬國馬為",num);
            let numN = num+32;
            //console.log("+32為",numN);
            let nw = String.fromCharCode(numN)
            //console.log("反轉為",nw);
            nstr+=nw
        }else if((str[i]>='a' && str[i]<='z')){
            let num = str[i].charCodeAt()
            let numN = num-32;
            //console.log("-32為",numN);
            let nw = String.fromCharCode(numN)
           // console.log("反轉為",nw);
            nstr+=nw
        }
    }
    console.log(nstr);
}
//swap("AbCdE")

//題目十九:接收【陣列】，回傳陣列的min值
function  findMin(arr) {
    let minNum=arr[0]
    let min=0
    //陣列找最小，二元搜索(大概這樣稱呼拉，可是我不會寫)、一個個去比。假設我有陣列[1,2,3],用1去比2,3如果小就先暫存到min去(先把min站存[0])，最後印出min
    for(let i=0;i<arr.length;i++){
        if(arr[i]<minNum){
            minNum=arr[i];
            min=i;
        }else{
            continue
        }
    }
    console.log(arr[min]);
}
//findMin([-99, 6, 0, 33, 44, 88, -10])

//題目二十:接收一個陣列以及一個數字 n，找出第 n 小的數字。 
function findMin(arr) {
    let min=arr[0]
    let minIndex=0
    for(let i=0;i<arr.length;i++){   
        if(min<arr[i]){
        }else {
            min = arr[i];
            minIndex = i;
        }
    } 
    console.log('其最小值為',min);
    return minIndex;
}

function findNthMin(arr,n){
    console.log(arr);
    for(let j=0;j<=n-1;j++){
        let ii =findMin(arr);
        arr.splice(ii,1);
    }   
}
//findNthMin([7, 8, 2, 5, 9], 1)


//題目二十一:接收一個陣列並且回傳由小到大排序後的陣列
function findMin(arr){
    let min=arr[0];
    let index=0;

    for(let i=0;i<arr.length;i++){
        if(min>arr[i]){
            min=arr[i];
            index=i;
        }else {
            continue
        }
    }
    return index;
}

function sort(arr){
    //用for迴圈做搜尋，找到最min值放到新的陣列裡，順便用splice(刪除值重新找min)
    let nSort=[];
    let dindex=0;
    
    let n = arr.length//超級奇怪，如果用length下去比較會少二???
    for(let j=0;j<n;j++){
        dindex = findMin(arr);
        nSort.push(arr[dindex]);
        arr.splice(dindex, 1);
    }
    console.log('新陣列nSort為',nSort);  
}
//sort([ 1, 2, 7 ,5, 11])

//題目二十二:
function flatten(arr){
    let nArry=[];
    let tempt;
  
    tempt = arr.flat(arr.length);
    for(let i=0; i<tempt.length; i++){
            nArry.push(tempt[i])
    }
    console.log(nArry);
};
//flatten([1, [2, [3, [4]], 5], 6])

//題目二十三  
function tree(n){
    let space = '_';
    if (n!=1) {
        top(n);
        botton(n);
    }

    function top(n) {
        for(let i=1; i<=n; i++){   
            console.log(`${'_'.repeat(n-i) + '*'.repeat(2*i-1)}`);
        }    
    }

    function botton(n) {
        for(let i=1;i<=n;i++){
            console.log(' '.repeat(n-1)+'*'.repeat(1));   
        }   
    }
};
//tree(5)
console.log("又是個嶄新的動腦時間惹");

//題目二十四
function winner(arr){
    let result = '';
    //列
    for(let i=0;i<3;i++){
        if(arr[i][0] == arr[i][1] && arr[i][1] == arr[i][2]){
            return arr[i][0]
        }
    };
    //行
    for(let j=0;j<3;j++){
        if(arr[0][j] == arr[1][j] && arr[1][j] == arr[2][j]){
            return arr[0][j]
        }
    };
    //左斜
    if(arr[0][0] == arr[1][1] &&  arr[1][1]== arr[2][2]){
        return arr[0][0]
    };
    //右斜
    if(arr[0][2] == arr[1][1] && arr[1][1]== arr[2][0]){
        return arr[0][2]
    };
    //平手
    return 'draw'
}
/*console.log( 
 winner([
    ['O', 'O', 'X'],
    ['O', 'O', 'X'],
    ['X', 'X', '']
 ])
 );*/

 //第二十五題
 function isPrime(num){
    if (num == 0 || num == 1){
        return false;
    }
    
    for(let i=2 ;i<num ;i++){
        if(num%i ==0){
            return false
        }else{
            return true
        }
    }
 }
 console.log(
    isPrime(9)
 );