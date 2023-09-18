//------------------------object------------------
var mCars={
    "car1": "200kmph",
    "bike": "300kmph",
    "car3": "200kmph",
    "car4": "200kmph"
}

console.log(mCars)

bike={
    "name": "panigale",
    "topSpeed": "220kmph",
    "color": "red",
    "manufacturer":{
        name:"Ducati",
        country:"Italy"
    },
    "bikeStart":function(){
        setTimeout(() => {
           console.log("Ready to roll") 
        }, 5000);
    }

}
console.log(typeof(bike))
console.log(bike.name)
console.log(bike.manufacturer)
console.log(bike.manufacturer.country)
console.log(bike.bikeStart)
console.log(bike.bikeStart())


//-------------------------array----------------
var mfriends = ["Spidy", "cap", "strange", "widow", "panther", "hulky", "shown", "scarlet"]
console.log(mfriends)
console.log(mfriends[0])
console.log(mfriends[2])

console.log(mfriends[1])
mfriends[1] = "captain"
console.log(mfriends)



mfriends[8]="ant"
console.log(mfriends)
mfriends[10]="falco"
console.log(mfriends)

console.log(mfriends.length-1)
mfriends[mfriends.length] = "venom"

mfriends.push("marvel")
console.log(mfriends)

var mName = mfriends.pop()
console.log(mName)
console.log(mfriends)


//-at--




//---------------------loop-----------------
var num = 0;
while(num <= 50){
    num++
}
console.log(num)


//------------------------d0While-------------
let i = 0;
do {
     console.log("do-while-i: ", i)
     i++
} while (i <= 2)


//-----------------for-------------------
var list = ["sun", "mon", "tue", "wed", "thus", "fri" ,"sat"]
var pos; 
for(pos = 0; pos < list.length; pos++ ){
    if(pos%2 === 0)continue
    console.log("position: "+pos+" value: "+list[pos])
} 

//----------------forIn------------
// for-in for array
for (let x in mfriends) {
    console.log("ForIn-arry: ", x)
    if(x == 10){
        console.log(mfriends[x])
        
    }
    if(x == mfriends.length - 1 ){
        console.log(mfriends[x])
        
    }
}

//for-in for object
bike={
    "name": "panigale",
    "topSpeed": "220kmph",
    "color": "red",
    "manufacturer":{
        name:"Ducati",
        country:"Italy"
    },
    "bikeStart":function(){
        setTimeout(() => {
           console.log("Ready to roll") 
        }, 5000);
    }

}

for (let x in bike) {
    console.log("ForIn-obj: ", x)
    if(x == "color"){
        console.log(bike[x])
        
    }
    if(x == "manufacturer"){
        console.log(bike[x].name)
        
    }
    if(x == "bikeStart"){
        console.log(bike[x])
    }
    if(x == "bikeStart"){
        console.log(bike.bikeStart())
    }

   
    //if(x == mfriends.length - 1 ){
    //    console.log(bike[x])
        
    //}
}
numbers = [45, 4, 9, 16, 25];
for (let z of numbers){
    console.log("ForOf-y: ", z)
}

person = { fname: "John", lname: "Doe", age: 25 };
for(const [key, value] of Object.entries(person)){
    console.log(`${key}: ${value}`)
}

//---------------------functions--------------
function sum(){
    let a = 3, b=6;
    let sum = a+b;
    console.log("Sum : ", sum)
}

function sum(a, b){
    let sum = a+b;
    console.log("Sum : ", sum)
}

function sum(a, b){
    let sum = a+b;
    return sum
}

let total = sum(4,8)
console.log("Total: ", total)

//--------------------------------------
let myFunc = function(a, b){
    let sum = a + b;
    return sum
}

console.log("MyFunc: ", myFunc(7,8))

// ------------Arrow Function------------------
let myFuncArrow = (a) => (a * a)

// let myFunc = (a) => {
//   return a * a
// }
console.log("ArrowFunc: ", myFuncArrow(4))
// ---------------------------------------------
// function hello() {
//     console.log("This: ", this)
// }
const hello = () => {
    console.log("This: ", this)
}

window.addEventListener("load", hello)

//document.getElementById("btn").addEventListener("click", hello)
//document.getElementById()

//---------1.Object creation------------

let obj = {
    id : 11,
    name : 'john',
    age : 56
}
console.log(obj.name);
console.log(obj['name']);

//-------------------2.Object creation-------------------
let emp = new Object();
emp.id = 101;
emp.name = 'Ram';
emp.age = 34;
console.log(emp.name);
console.log(emp['name']);
//------------------3.Object creation------------
 function emp1(id, name, age){
    this.id = id;
    this.name = name;
    this.age = age;
 }
employee = new emp1(1, "robin", 1)
console.log(employee.name)




 // method in object
 let person1 = {
    id : 11,
    fname : 'john',
    lname : 'doe',
    age : 56,
    fullName : function(){
        return this.fname+ " "+ this.lname;
    }

}
console.log(person1.fullName());

//Array

let arr = [];
let arr1 = new Array();

let arr2 = ["a", "b", "c", "d"];
console.log(arr2[1]);

arr2[2] = "e";
console.log(arr2);




//---add---
arr2[4] = "i";
console.log(arr2)

//--length---
console.log(arr2.length)

//--Methods--
let arr3 = ["a", "b", "c", "d"];
console.log(arr3[arr3.length-1])
console.log(arr3.at(-1))

console.log(arr3.toString());

console.log(arr3.join(" "));

//console.log(arr3.pop());
console.log(arr3.push("f"));
console.log(arr3)

//--shift()--
arr3.shift()
console.log(arr3);

//--unshift--
arr3.unshift('g');
console.log(arr3);

let all = arr2.concat(arr3);
console.log(all)


//--String--
let str = "Hello";
let str1 = new String("world");

//--StringMethod--
console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.charAt(2));  //l
console.log(str.concat(str1));

let str3 = str.concat(str1); //helloworld
console.log(str3.substring(0,5));   //hello


//Date

let now = new Date();
//alert(now);
let day = now.getDate();
let month = now.getMonth() + 1;
let year = now.getFullYear();
let hours = now.getHours();
let minutes = now.getMinutes();
let secounds= now.getSeconds();
console.log("time is: "+hours+"/"+minutes+"/"+secounds+"//"+day+ "/"+
month+ "/"+ year);


//--------------arrySliceSplice------------------
arrChar = ["a", "b", "c", "d"]
console.log(arrChar)
arrChar.splice(2,0,"e","f")
console.log(arrChar)
let test1=arrChar.slice(2,4)
console.log(test1)