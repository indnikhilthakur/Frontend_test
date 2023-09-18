//-----------------------math----------------------------
document.write("<br/>")
//------------constants-------------
document.write(Math.PI+"<br/>")
document.write(Math.E+"<br/>")
document.write(Math.SQRT2+"<br/>")
document.write(Math.SQRT1_2+"<br/>")
document.write(Math.LN2+"<br/>")
document.write(Math.LN10+"<br/>")
document.write(Math.LOG2E+"<br/>")
document.write(Math.LOG10E+"<br/>")

//------------methods-----------------
document.write(Math.round(10.4)+"<br/>")//round of
document.write(Math.round(10.7)+"<br/>")
document.write(Math.ceil(10.4)+"<br/>")//Returns x rounded up to its nearest integer
document.write(Math.ceil(10.5)+"<br/>")
document.write(Math.ceil(10.9)+"<br/>")
document.write(Math.ceil(-10.9)+"<br/>") 
document.write(Math.floor(10.4)+"<br/>")//Returns x rounded down to its nearest integer
document.write(Math.floor(10.5)+"<br/>")
document.write(Math.floor(10.9)+"<br/>")
document.write(Math.floor(-10.9)+"<br/>")
document.write(Math.trunc(12.99)+"<br/>")//only integer
document.write(Math.trunc(-12.99)+"<br/>")
document.write(Math.sign(2)+"<br/>")
document.write(Math.sign(0)+"<br/>")
document.write(Math.sign(-2)+"<br/>")

document.write(Math.random(10)+"<br/>")
document.write(Math.pow(12, 2)+"<br/>")
document.write(Math.sqrt(64)+"<br/>")
document.write(Math.sqrt(-64)+"<br/>")
document.write(Math.cbrt(64)+"<br/>")


document.write(Math.abs(-1.7)+"<br/>")//positive absolute number
document.write(Math.exp(1) +"<br/>")
document.write(Math.exp(-5)+"<br/>")


//--------trignometory--------------
document.write(Math.sin(45)+"<br/>")
document.write(Math.sin(90)+"sin90"+"<br/>")
document.write(Math.cos(0)+"<br/>")
document.write(Math.tan(30)+"<br/>")

document.write(Math.min(1,2,3,4,5)+"<br/>")
document.write(Math.max(1,2,3,4,5)+"<br/>")
document.write(Math.random()+"<br/>")


//--------------log----------------
document.write(Math.log(1)+"<br/>")
document.write(Math.log(2)+"<br/>")
document.write(Math.log(10)+"<br/>")

document.write(Math.log2(64)+"<br/>")

document.write(Math.log10(1000)+"<br/>")

//--------trignometory-arcs-----
document.write(Math.acos(-1)+"<br/>")
document.write(Math.asin(1)+"<br/>")
document.write(Math.atan(0)+"<br/>")
document.write(Math.cosh(-1)+"<br/>")
document.write(Math.sinh(1)+"<br/>")
document.write(Math.tanh(-1)+"<br/>")
document.write(Math.acosh(2)+"<br/>")

//----------number------------
var n=10
var n = new Number(16)
document.write(n+"number"+"<br/>")

function check(x,y){
        return x/y;
    }

document.write(Number.isFinite(check(0,10))+"<br>");
document.write(Number.isFinite(check(10,0))+"<br>");

document.write(Number.isInteger(check(12,2))+"<br>");
document.write(Number.isInteger(check(12,5))+"<br>");    



document.write("<p>-------------------------parseFloat---------------------------</p>"+"<br/>")

var a="50";
var b="50.25";
var c="string";
var d="50string";
document.write(Number.parseFloat(a)+"<br>");
document.write(Number.parseFloat(b)+"<br>");
document.write(Number.parseFloat(c)+"<br>");
document.write(Number.parseFloat(d)+"<br>");

document.write("<p>------------------------parseInt----------------------------</p>"+"<br/>")
document.write(Number.parseInt(a)+"<br>");
document.write(Number.parseInt(b)+"<br>");
document.write(Number.parseInt(c)+"<br>");
document.write(Number.parseInt(d)+"<br>");

document.write("<p>-------------------------toExponential---------------------------</p>"+"<br/>")
var a=989721
document.write(a.toExponential()+"<br>");
document.write(a.toExponential(1)+"<br>");
document.write(a.toExponential(4)+"<br>");
document.write(a.toExponential(6)+"<br>");

document.write("<p>-------------------------toFixed---------------------------</p>"+"<br/>")
var a=98.9721;
document.write(a.toFixed()+"<br>");
document.write(a.toFixed(2)+"<br>");

var a=50;
document.write(a.toString()+"<br>");


var x= false;
var y = new Boolean(false);
document.write(x==y +"<br>");//y contains object
document.write("<br>");

var b=10;
document.write(Boolean(b)+"<br>");

//open("https://www.google.com/");


var v= confirm("are you sure?");
if (v==true){
    alert("ok");
}
else{
    alert("cancel");
}

//var v=prompt("who are you?");
//alert("I am "+v);
function msg(){
    setTimeout(
        function(){
            alert("welcome")},2000);
        }
    
msg();
