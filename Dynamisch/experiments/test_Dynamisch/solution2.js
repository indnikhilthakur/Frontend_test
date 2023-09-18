// problem 2 solution
// 
var arr = [1,2,3,4,5,6,7,8,9]
var arr2 = []
var calc_sum = 9

for(var i = 0; i<= arr.length-1; i++){
    // console.log(arr[i])
    
    
    for(var j = i; j<= arr.length; j++ ){
       var sum = arr[i] + arr[j]
       if(sum === calc_sum){
        console.log([arr[i], arr[j]])
        arr2.push([arr[i], arr[j]])
        

       } 

    }
   
    
}
console.log(arr2)