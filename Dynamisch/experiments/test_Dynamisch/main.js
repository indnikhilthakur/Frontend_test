// // program to remove duplicate value from an array

// var arr = [1,2,3,4,4,5,6,6]

// function getUnique(arr){
    
//     let uniqueArr = [];
    
//     // loop through array
//     for(let i of arr) {
//         console.log(uniqueArr.indexOf(i))
//         if(uniqueArr.indexOf(i) === -1) {
//             uniqueArr.push(i);
//         }
//     }
//     console.log(uniqueArr);
// }

// // const array = [1, 2, 3, 2, 3];

// // calling the function
// // passing array argument
// // getUnique(array);
// getUnique(arr);



// let arr = [1,2,3,4,4,5,6,6]
// unique = {}
// arr.forEach((e) => {

//     if(!unique.includes(e)){
//         unique.push(e)
//     }
// })
// console.log(unique)

// function removeDuplicates(num) {
//     var x,
//         len=num.length,
//         out=[],
//         obj={};
   
//     for (x=0; x<len; x++) {
//       obj[num[x]]=0;
//       console.log(obj[num[x]])
//     }
//     for (x in obj) {
//       out.push(x);
//     }
//     return out;
//   }
//   var Mynum = [1,2,3,4,4,5,6,6];
//   result = removeDuplicates(Mynum);
//   console.log(Mynum)
//   console.log(result)

// let arr = [1,2,3,4,4,5,6,6]
// let fn = [4,6]
// function unique(a, fn) {
//     if (a.length === 0 || a.length === 1) {
//       return a;
//     }
//     if (!fn) {
//       return a;
//     }
  
//     for (let i = 0; i < a.length; i++) {
//       for (let j = i + 1; j < a.length; j++) {
//         if (fn(a[i], a[j])) {
//           a.splice(i, 1);
//         }
//       }
//     }
//     return a;
//   }


// console.log(unique(arr,fn))

// let arr = [1,2,3,4,4,5,6,6]
// arr.forEach(arrFunction)

// function arrFunction(item,index){
//   console.log(index+" :"+item)

// }

// arr.forEach(function(item, index, arr){
//   arr[index] = item * 10
// })
// console.log(arr)

// arr2 = [4,6]
// arr.forEach(function(item, index, arr){
//   if(arr.includes()){
//     console.log(item)
//   }
  
// })
// console.log(arr)

// arr.filter(function(item, index){
//   if(arr.includes(4)){
//     return arr[index]

//   }
//   else{
//     return item
//   }

// })

// arr.forEach(function(item, index, arr){
//   arr.indexOf(item) === index
//   return arr
// })


// ------------------------------------solution 1-------------------------------------------------
// var arr = [1,2,3,4,4,5,6,7,6,7,10,10]
// let arr = [1,2,3,4,4,5,6,6]
// let arr = [1,2,3,7,8,4,4,5,6,6,9,7,4,5,6,7,7,8,6,7,8,6,6,8,9,8,7,6,7]
// arr = arr.sort()// sort to acending
// console.log(arr)


// arr2 =[]

// arr.sort( function(a,b){  //find out multi times comes element
//   console.log(a,b)
//   if(a === b){
//     arr2.push(b)
//   }
// })
// console.log(arr2)

// arr3 = []
// arr = [...new Set(arr)] //convert array to unique element array
// console.log(arr)
// arr.forEach(function(item){ // removing multi times comes elements from problem by removing milti element arry arr2 from single element array which convert to unique array from problem using set
//   if(arr2.includes(item)){
//     console.log("click")
//   }
//   else{
//     arr3.push(item)
//   }
// })
// console.log(arr3)

// -----------------------------------------solution 3----------------------------------
// function abbrev_name(subName){
//   // subName = subName.slice(0,6)
//   // console.log(subName+".")

//   var arr = []
//   var abbrName = []
//   arr = subName.split("")
//   console.log(arr)
//   arr.forEach(function(item, index){
//     var inde = 0  
//     if(item === " "){
  
//         console.log(index)
//         inde = index + 2
//       }
//       abbrName = arr.splice(0,inde)
//   })
//   console.log(abbrName)
//   abbr_Name = abbrName.join("")
//   console.log(abbr_Name+".")

// }
// subName = "John Doe"
// abbrev_name(subName)
// var arr = []
// var abbrName = []
// arr = subName.split("")
// console.log(arr)



// for(var i= 0; i <= arr.length - 1; i++){
//   if(arr[i] === ""){
//     console.log(arr[i])
//   }
// }

// subName = "John Doe"
// // nameUpper = subName.toUpperCase()
// subName = subName.slice(0,6)
// console.log(subName+".")

