// ----------------------------------------------------------------
var nameSelect = document.getElementById("title")
var passSelect = document.getElementById("discription")
var dateSelect = document.getElementById("date")
var btnSubmit = document.getElementById("btn_submit")
var btnRetrive = document.getElementById("btn_retrive")
var btnSet = document.getElementById("btn_set")
var btnRemove = document.getElementById("btn_remove")
var btnClear = document.getElementById("btn_clear")
var resultTable = document.getElementById("result_table")

var u_name = 0
nameSelect.addEventListener("input", function(e){
    console.log(e.target.value)
    u_name = e.target.value 
})
var u_pass = 0
passSelect.addEventListener("input", function(e){
    console.log(e.target.value)
    u_pass = e.target.value
})
var u_date = 0
dateSelect.addEventListener("input", function(e){
    console.log(e.target.value)
    u_date = e.target.value
})



function object(u_name, u_pass, u_date){
    var entry = {
        "name": u_name,
        "password": u_pass,
        "date": u_date
    }
    return entry
}

var users = {}
var num = 0
var records = 0

btnSubmit.addEventListener("click", function(){
    alert("clicked")
    var obj =new object(u_name, u_pass, u_date)
    console.log(obj)
    
    num = Object.keys(users).length
    console.log(num)
    var user = "user"+ num
    users[user] = obj
    console.log(resultTable)
    addTr = document.createElement("tr")
    addtr.id = 
    resultTable.appendChild(addTr)
    resultTable.classList.add("tr")
    addTd = document.createElement("td")
    addTdText = document.createTextNode(users)
    add = addTd.appendChild(addTdText)
    tr = addTr.appendchild(add)
    

    // window.localStorage.setItem("records",JSON.stringify(users))
    console.log(users)
    // nameSubmit.value = ""
    // passSelect.value = ""
    // dateSelect.value = ""
})
btnSet.addEventListener("click", function(){
    window.localStorage.setItem("records",JSON.stringify(users))
    // addTr = document.createElement("tr")
    // resultTable.appendChild(addTr)
    // addTd = document.createElement("td")
    // addTdText = document.createTextNode(users)
    // add = addTd.appendChild(addTdText)
    // tr = addTr.appendchild(add)
    


})



btnRetrive.addEventListener("click", function(){
    var rec= window.localStorage.getItem("records")
    records = JSON.parse(rec)

    console.log(records)
    for(var i=0; i<=num; i++){
        var user = "user"+ i

        console.log(records[user])
        // console.log(records["user0"])
    }
    
    


})

btnRemove.addEventListener("click", function(){
    // rec = records["user0"]
    // window.localStorage.removeItem(rec)
    // console.log(records["user1"])


    // for(var i = 0; i <= num; i++){
    //     user = "user"+i
    //     console.log(records[user])
    //     window.localStorage.removeItem(records[user])
    // }
})

btnClear.addEventListener("click", function(){
    window.localStorage.clear("records")


})








// var sub = btnSubmit.addEventListener("click", object)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
// console.log(sub)

// function submit(u_name, u_pass){
//     var obj = object(u_name, u_pass)
//     console.log(obj)

// }

// btnSubmit.addEventListener("click", function(u_name, u_pass){
//     var obj = object(u_name, u_pass)
//     console.log(obj)

// })


// ---------------------------------------------------
// function addTitle(){
//     alert("clicked name")


    

//     if(u_name !== undefined && u_name !== null && u_name !== ""){
//         var add = document.createElement("tr")
//         var addText = document.createTextNode(u_name)//"item"+ (addElement.childElementCount + 1)
//         add.appendChild(addText)
//         add.id = "item"+ (addElement.childElementCount + 1)
//         console.log(add.id)

//         // var firstItem = addElement.firstElementChild

//         // addElement.insertBefore(add, firstItem)
//         resultTable.appendChild(add)
    
//         console.log(addElement.childElementCount)

        

//     }
    
//     else{
//         alert("enter user name")

//     }
    
//     inputName.value = ""
    
//     u_name = ""
    
    





//     // console.log(add.appendChild(document.createTextNode("item")))

// }

// btnSubmit.addEventListener("click", addName)



// btnSubmit.addEventListener("click", function(){
//     // addTitle()
//     alert("clicked")
//     var add =document.createElement("tr")
//     var addtr = resultTable.appendChild(add)
//     var add_td = document.createElement("td")
//     var add_td_text = document.createTextNode(records.user0)
//     var addtd1 = add_td.appendChild(add_td_text)
//     console.log(addtd1)
//     var addtdt1 = addtr.appendChild(addtdt1)
//     console.log(addtdt1)

// })

// console.log(resultTable)
// console.log(records.user0.name)