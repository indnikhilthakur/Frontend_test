// // problem 1 solution
// // var arr = [1,2,3,4,4,5,6,6]
// // console.log(arr.length)

// // arr3 = []

// // for(var i = 0; i<= arr.length-1; i++){
// //     console.log(arr[i])
// //     if(arr[i] !== 4 ){
// //         if(arr[i] !== 6){

// //             arr3.push(arr[i])
// //         }
// //     }
   
    
// // }
// // console.log(arr3)

// // ---------------
// var arr = [1,2,3,4,,4,5,6,7,6,7,10,10]
// // var arr =[1,2,3,4,6,7,7,8,9,0,0,0]
// console.log(arr.sort())

// arr2 = []
// arr3 = []

// arr.sort( function(a,b){  //workon
//     console.log(a,b)
//     if(a === b){
//         arr2.push(b)
//     }
// })

// // var index=arr.indexOf(6)
// // console.log(index)
                
// for(var i=0; i <= arr.length - 1; i++){
//      console.log(arr[i])
//      if(arr[i] !== arr2[0]){
//         arr3.push(arr[i])
//      }
    
//     // if(arr[i] === arr2[1]){
//     //    arr3.pop(arr[i])
//     // }
    
    
    
//     // for(var j=0; j <= arr2.length - 1; j++){
//     //     if(arr[i] !== arr2[j]){
//     //         // console.log(arr2[j])
//     //         arr3.push(arr[i])

//     //         // console.log(arr)
//     //     }
//     //     // if(arr[i] === arr2[1]){
//     //     //     arr.pop()
//     //     // }
//     // }
    
// }

// for(var j = 1; j<= arr3.length - 1; j++){
    
//     if(arr3[i] === arr2[j]){
//         arr3.pop(arr[i])
//      }
     

// }
                


// // for(var i = 0; i<= arr.length-1; i++){
// //     console.log(arr[i])
// //     if(arr[i] !== 4 ){
// //         if(arr[i] !== 6){

// //             arr3.push(arr[i])
// //         }
// //     }
// //     //----------------
// //     // var count = 0
// //     // for(var j=0; j <= arr.length - 1; j++){
// //     //     if(arr[i] === arr[j]){
// //     //         count = count + 1
// //     //         console.log(count)
// //     //         if(count > 1){
// //     //             arr3.push(arr[])
// //     //         }
// //     //     }

// //     // }
   
    
// // }
// console.log(arr3)
// console.log(arr2)

//-------------------------------------answer-----------------------------------
// var arr = [1,2,3,4,4,5,6,7,6,7,10,10]
// let arr = [1,2,3,4,4,5,6,6]
let arr = [1,2,3,7,8,4,4,5,6,6,9,7,4,5,6,7,7,8,6,7,8,6,6,8,9,8,7,6,7]
arr = arr.sort()// sort to acending
console.log(arr)


arr2 =[]

arr.sort( function(a,b){  //find out multi times comes element
  console.log(a,b)
  if(a === b){
    arr2.push(b)
  }
})
console.log(arr2)

arr3 = []
arr = [...new Set(arr)] //convert array to unique element array
console.log(arr)
arr.forEach(function(item){ // removing multi times comes elements from problem by removing milti element arry arr2 from single element array which convert to unique array from problem using set
  if(arr2.includes(item)){
    console.log("click")
  }
  else{
    arr3.push(item)
  }
})
console.log(arr3) 