
// problem 4 solution
// let people = [{name:"Alice", age:"20"}, {name:"Max", age:"21"}, {name:"June", age:"21"}]
// console.log(people[0].age)
// console.log(people.length)
// var arr= [20, 21]
// var obj = {}

// // for(var i = 0; i<= people.length - 1; i++){
// //     for(var j = i; j<= people.length - 1; j++){
// //         if(people[i].age === people[j].age){
// //             console.log(people[i].age)
// //         }
// //     }
// // }
// for(var i = 0; i <= people.length - 1; i++){
//     console.log(people[i].age)
    


//     }

// console.log(obj)
// function age(){
//     if(people[i].age === "20"){
//         obj = {
//             "20": people[i]
//         }

//     }

// }    
// var age_list(){

// }


// for(var i = 0; i<= people.length - 1; i++){
//     console.log(people[i].age)
//     for(var j = i+1; j<= people.length - 1; j++){
//         // console.log(people[j].age)
//         if(people[i].age === people[j].age){
            

//         }
//     }
// }

let people = [{name:"Alice", age:"20"}, {name:"Max", age:"21"}, {name:"June", age:"21"}]
var arr = []
var userAge = {}
var user20 = []
var user21 = []
z = 0

for(var i = 0; i <= people.length - 1; i++){
    
    console.log(people[i].age)
    arr.push(parseInt(people[i].age))

}

function Obj(value){
    this.key = value
    // eval(this.key+z+"="+value)

}
arr = [... new Set(arr)]
console.log(arr)

for(var j = 0; j <= people.length - 1; j++){
    
    for(var i = 0; i <= arr.length -1; i++){
        if(arr[i] === parseInt(people[j].age)){
            // abj[i] = people[j]
            // eval("var "+ "user"+arr[i]+" = " +[])
            // console.log(user20)
            // var key = "key"+arr[i]
            // var user20 = []
            // var user21 = []
            // if(arr[i] === 20){

            //     user20.push(people[j])
            //     userAge[key] = user20
            // }
            // if(arr[i] === 21){

            //     user21.push(people[j])
            //     userAge[key] = user21
            // }
            
            
            var z = 0

            if(arr[i] === 20){
                user20.push(people[j])
            }
            
            if(arr[i] === 21){
                user21.push(people[j])
            }
            

            // for(var i = 0; i <=  )
            
            userAge[key]
            


            var key = "key"+arr[i]
            userAge[key] = people[j]
            if(arr[i] === 20){
                userAge["key20"] = user20
            }
            else{
                userAge["key21"] = user21
            }


            // eval("userAge"+"."+ " key"+arr[i]+"=" +people[j])
            // z = arr[i]
            // var userAge = new Obj(people[j])

            console.log(people[j]) 

        }
    }
}

console.log(userAge)
// console.log(user20)
// console.log(user21)