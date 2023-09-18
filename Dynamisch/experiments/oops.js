// ---------------------------oops---------------------------------
var fileName = "nikhil_photo"
var fileFormat = ".jpeg"
var dimentions = "800*800"
var fileSize = "500kb"
var owner = "nikhil"

function getFileName(){
    return fileName;
}
function getfileFormat(){
    return fileFormat;
}
function getDimentions(){
    return dimentions;
}
function getOwner(){
    return owner;
}
// console.log(getDimentions())
var image = {
    fileName:"nikhil_photo",
    fileFormat:".jpeg",
    dimentions: "800*800",
    fileSize : "500kb",
    owner : "nikhil",
    getName:function(){
        return this.fileName;
    },
    getFormat:function(){
        return this.fileFormat;
    }

}
document.write(image["fileSize"]+"<br/>" )
document.write(image.fileName +"<br/>" )
document.write(image.getFormat()+"<br/>")
document.write("-----------------------------------------------------------"+"<br/>")

var name = "zen"
var person = {
    name:"nikhil",
    // sirname:"thakur",
    email:"nikhil.nt58@gmail.com",
    getName: function(){
        return this.name;
    },
    parents:{
        name:"mahadev",
        sirname:"thakur",
        email:"thakur@gmail.com",
        getSirname:function(){
            return this.sirname;
        }
    }

    
}
document.write(person.getName() +"<br/>")
document.write(person.parents.sirname+"<br/>")
document.write(person.getName()+" "+person.parents.getSirname() +"<br/>")

var avenger = {
    heroName:"Captain America",
    name: "steve rogers",
    movie: "civil war",
    year: "2017"

}
console.log(avenger)
console.log("------------------------constructor----------------------------------"+"<br/>")
function Avenger(avgHName, avgName, avgMovie, avgYear){
    this.heroName = avgHName;
    this.name = avgName;
    this.movie= avgMovie;
    this.year = avgYear;

    this.calculateTime = function(){
        return 2022 - this.year
    }
}
Avenger.prototype.calculateAge = function(){
    Date.fullyear() - this.year
}


var hulk = new Avenger("Hulk", "bruce banner", "green hulk", "2010")
console.log(hulk) 

document.write(hulk.calculateTime())
console.log(hulk.calculateTime()) 


var spiderman = new Avenger("Spiderman", "petr parker", "Spiderman", "2003")
console.log(spiderman)
console.log(spiderman.calculateTime())
document.write(spiderman) 

Avenger.prototype.sidekick = "ned"  //getter 
console.log("grtter for Avenger " +spiderman.sidekick)  

Avenger.prototype.updateYear = function(updatedYear){  //settrer
    this.year = updatedYear
}
spiderman.updateYear("2021")
console.log("setter for spiderman object "+spiderman.year)



// ---------------------------
class Car{
    constructor(brand){
        this.carname=brand;
    }
    present(){
        return 'I have a ' + this.carname;
    }
}
var testCar = new Car("Pagani")
console.log(testCar)
console.log(testCar.present())
console.log(testCar["carname"])
testCar.carname = "Lamborgini"
console.log(testCar.present())

class Model extends Car{
    constructor(brand,mod){
        super(brand);
        this.model=mod;
    }
    show(){
        return this.present() +' It is a ' + this.model;
    }
}
let myCar = new Model("Fort","Mustang");
document.write(myCar.show() +"<br/>");
let myCar2 = new Model("lafera","Farari");
document.write(myCar2.show() +"<br/>");


// class Car{
//     constructor(brand){
//         this.carname=brand;
//     }
//     get cname(){
//         return this.carname;
//     }

//     set cname(x){
//         this.carname=x;
//     }
// }
// let myCar=new Car("Ford");
// document.write(myCar.cname);

document.write("-------------------------class----------------------------------"+"<br/>")
//-----------------with parameters------------------------
class Employee{

    constructor(name){

        this.name = name;

    }



    static hello(oname){

        return "Hello " + oname.name + "!";

    }

}



let emp = new Employee("steve");

document.write(Employee.hello(emp)+"<br/>");


//--------------------------- Syntax class--------------------

// class marvel{
//     constructor(){

//     }
// }

// class Employee{
//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }
// }

// let emp1 = new Employee("peter", 2010);
// let emp2 = new Employee("strange", 2001); 

// console.log(emp1)

class Avengers{
    constructor(realName, codeName, startYear){
        this.name = realName
        this.Position = codeName
        this.year = startYear

    }
    workTime(){
        let date = new Date()
        return date.getFullYear() - this.year
    }

}
var ant_man = new Avengers("scott", "AntMan", "2019")
var drStrange = new Avengers("strange", "Dr_Strange", "2016")

console.log(drStrange)
document.write(drStrange.Position+" said, I'am not going to work with bugs like "+ ant_man.Position+" with just "+ant_man.workTime()+" years of Experience")

// class Employee{
//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }

//     age(){
//         let date = new Date();      
//         return  date.getFullYear() - this.year;
//     }
// }

// let emp1 = new Employee("Bill", 2011);
// let emp2 = new Employee("John", 2007); 

// document.write("Bill is "+emp1.age() + "years old"); 



//-------------------using parameter-----------------------

// class Marvel{
//     constructor(wName){
//         this.name = wName

//     }
//     see(){
//         return "By watching live victory "+this.name + "Wong said, "
//     }
    
// }
// class shag extends Marvel{
//     constructor(wName){
//         super(wName)
//     }
//     static offer(sname){

//         var aName = this.sname
//         return this.see() + "/"Welcome /""+ this.sname
//     }
// }


// let marvel1 = new Marvel("Wong")
// document.write(marvel1.offer())


// class Employee{
//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }

//     age(year){
         
//         return  year - this.year;
//     }
// }

// let emp1 = new Employee("Bill", 2011);
// let emp2 = new Employee("John", 2007); 
// let date = new Date();
// let year = date.getFullYear();

// document.write("Bill is "+emp2.age(year) + "years old");   

//----------------------Static-------------------

// class Employee{
//     constructor(name){
//         this.name = name;
//     }

//     static hello(){
//         return "Hello!";
//     }
// }

// let emp = new Employee("John");
// document.write(Employee.hello());
hoesting = 100
console.log(hoesting)
total = 10
var hoestingSum = function hFunction(num1=10, num2){  
    console.log(total)
    total = num1 + num2
    
    console.log(total)
    var total
    


}
hoestingSum(100,200)
