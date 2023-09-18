window.onload = function(){
    document.getElementById("form_login").onsubmit = store
    document.getElementById("retive_btn").onclick = retrieveRecords
    document.getElementById("remove_btn").onclick = removeItem;
    document.getElementById("clear_btn").onclick = clearStorage;

    // var person = user3
    // var list = document.getElementById("row1")
    // console.log(list.childElementCount)
    // personVal = "person"+(list.childElementCount)

    

    // var people_data = document.getElementById("form_login")
    // people_data.onsubmit = function(){s
    //     store()

    // }
//    ---

}
// var recordsAll = document.getElementById("form_login")
// recordsAll.onsubmit = function records(){
//     count = 0
//     var rec = "rec"+count
    
//     const records = {
//         rec: user,
        

//     }
// }
//  
var arr = {} 
function record(per){

    arr.push(per)
    window.localStorage.setItem("reords", arr)
}

var per = 0
function store(){
    // e.preventDefault()
    var userName = document.getElementById("user_name").value
    var passWord = document.getElementById("password").value
    

    
    const person = {
        Username: userName,
        Password: passWord,
    }
    // const record = {
    //     record: person,

        
    // }
   per = JSON.stringify(person)
   record(per)



    var data = window.localStorage.setItem("person",JSON.stringify(person))//storing object in session storage and it coverted into string
    // saveAs(data,"dynamic.txt")
    console.log(data)




    // var z= 10
    // if(z > 0){
    //     var blob = new blob(person, {type:"text/plain;charset = utf-8"})
    //     saveAs(blob, "dynamic.txt")

    // }
    

    // for(var i = 0, i > 3, I++ ){

    // }
    // const records = {
    //     [person]: record
    // }
    
    // var users = window.localStorage.setItem()
    

    
} 

function retrieveRecords(){
    console.log("retrive records")
    var records = window.localStorage.getItem("person")//getting string from session storage 
    var obj = JSON.parse(records)//string coverted into object
    console.log(obj.username)
    console.log(obj.password)

    var paragraph = document.createElement("td")
    var info = document.createTextNode(obj.Username)
    paragraph.appendChild(info)
    var element1 = document.getElementById("name")
    element1.appendChild(paragraph)

    var paragraph = document.createElement("td")
    var info = document.createTextNode(obj.Password)
    paragraph.appendChild(info)
    var element2 = document.getElementById("pass")
    element2.appendChild(paragraph)

   
    
}

function retrieveRecords(){
    console.log("retrive records")
    var records = window.localStorage.getItem("person")//getting string from session storage 
    var obj = JSON.parse(records)//string coverted into object
    console.log(obj.Username)
    console.log(obj.Password)

    var paragraph = document.createElement("td")
    var info = document.createTextNode(obj.Username)
    paragraph.appendChild(info)
    var element1 = document.getElementById("name")
    element1.appendChild(paragraph)

    var paragraph = document.createElement("td")
    var info = document.createTextNode(obj.Password)
    paragraph.appendChild(info)
    var element2 = document.getElementById("pass")
    element2.appendChild(paragraph)

   
    
}

function removeItem(){
    sessionStorage.removeItem("person")
    var element1 = document.getElementById("name")
    element1.innerHTML =""
    var element2 = document.getElementById("pass")
    element2.innerHTML = ""
    console.log("item removed")
}
function clearStorage(){
    localStorage.clear()
    var element1 = document.getElementById("name")
    element1.innerHTML =""
    var element2 = document.getElementById("pass")
    element2.innerHTML = ""
    console.log("clear records")
}



