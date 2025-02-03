var a=10;
var b=10;
var c=a+b;
console.log(c);

var d=10;
var e=4;
var f=d%e;
console.log(f);

var g=99;
g++;
console.log(g);

var h=100;
h--;
console.log(h);

var i=20;
var j=2;
var k= i**j;
console.log(k);

var x=5;
x += 5;
console.log(x);

var l=100;
var m=10;
console.log(l != m);

var n=1234;
var o="1234";
console.log(n === o);

var var1=20;
console.log(var1 <= 18 && var1 <=50);

var2=4;
var3=6;
console.log(var2 == 4 || var3 ==4);

var4=9;
var5=10;
console.log(!(var4 == var5))

function showMessage(){
    alert("klasa ma e mira");
}
showMessage();

function sum(numb1, numb2){
    return numb1 -numb2;
}
console.log(sum(22,2));

//konstruktori

function Computer(name,Cpu,Ram){
    this.name=name
    this.Cpu=Cpu
    this.Ram=Ram
}
var Computer1=new Computer("macBook", "Mi 8-core","8gb");
var Computer2=new Computer("lenovo", "Mi 8-core","16gb");
var Computer3=new Computer("dell", "Mi 8-core","8gb");

console.log(Computer1);
console.log(Computer2);
console.log(Computer3);

