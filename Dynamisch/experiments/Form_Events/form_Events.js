var userName = document.getElementById("user_name")
var selectForm = document.getElementById("login_form")
console.log(userName.value)


userName.addEventListener("input", function(e){
    // console.log(e.target.value)
    var userNameValue = e.target.value
    userNameValue = userNameValue.toUpperCase()
    console.log(userNameValue)
    userName.value = userNameValue
    
    
    

})

// userName.addEventListener("change", function(e){
//     // console.log(e.target.value)
//     var userNameValue = e.target.value
//     userNameValue = userNameValue.toUpperCase()
//     console.log(userNameValue)
//     userName.value = userNameValue
    
    
    

// })

userName.addEventListener("focus", function(){
    console.log("element focused")

})

userName.addEventListener("blur", function(){
    console.log("element lost focus")
})

selectForm.addEventListener("submit", function(){
    alert("form submitted")
    
    
})
var user = sessionStorage.getItem("userName")

console.log(user)
console.log(userName.value)
// var selectForm = document.getElementById("login_form")
// console.log(selectForm)
 
// selectForm.addEventListener("submit", function(event){
//     alert("submit")
//     event.preventDefault()


// })

// userName.addEventListener("input", function(){
//     console.log("changed")
//     console.log()

// })