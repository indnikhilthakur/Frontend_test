// var btnRecord = document.getElementById("btn_rec")
// var recordList = document.getElementById("records")


// btnRecord.addEventListener("click", function(){
//     console.log("clicked")
//     var add = document.createElement("li")
//     var addText = document.createTextNode("item"+(recordList.childElementCount + 1))
//     add.appendChild(addText)
//     add.id = "item"+(recordList.childElementCount + 1)
//     recordList.appendChild(add)
//     console.log(recordList.childElementCount)



// })

// // var testForm = document.getElementById("test_form")
// var nameTest = document.getElementById("name").val
// var btnTest = document.getElementById("btn_test")
// btnTest.addEventListener("submit", function(e){
//     e.preventDefault()
//     alert("clicked")
//     alert(nameTest)

// })

// // console.log(recordList)
// // console.log(recordList.childElementCount)

// // -------------------------------------------------localstorage-----------------------------------------------------
//If statement to check if localStorage already stored.
if (!localStorage.script) {

    localStorage.script = JSON.stringify({
"HELLO": "Hey, I'm so glad you set EstherBot up!",
"I LOVE YOU": "Awh, shucks! I love you too!",
"CONNECT ME": "",
"DISCONNECT": "Roger that, EstherBot is back."
}) ;


}

//This will load the localStorage data into an object in the varaible called botScript
var botScript = JSON.parse(localStorage.script) ;
// console.log(botscript) 

function saveScript() {

    //This will save the current object to the localStorage.
    localStorage.script = JSON.stringify(botScript) ;

}