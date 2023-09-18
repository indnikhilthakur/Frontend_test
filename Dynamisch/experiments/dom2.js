// class toggle for sidebar
var hambergerMenu = document.getElementById("hamberger_menu")
console.log(hambergerMenu)
var sidebarSelect = document.getElementById("sidebar")

// function sidebarToggle(){
//     sidebarSelect.classList.add("show")
// }

hambergerMenu.addEventListener("click", function(){
    // alert("clicked")
    if(sidebarSelect.classList.contains("show")){
        sidebarSelect.classList.remove("show")
        sidebarSelect.classList.add("hide")
    }
    else{
        sidebarSelect.classList.remove("hide")
        sidebarSelect.classList.add("show")
    }
})

// ----onxlixk sidebar gone----
document.body.addEventListener("keydown", function(e){
    var keycode = e.keyCode
    console.log("key Pressed "+ keycode)
    if(keycode === 27){
        sidebarSelect.classList.remove("show")
        sidebarSelect.classList.add("hide")
    }

} )


// ----------------------------------style inline from css file-----------------------------

var btnStyleAdd = document.getElementById("btn_style_add")
var btnStyleMinus = document.getElementById("btn_style_minus")
var pText = document.getElementById("p_text")
// pText.style.color = "azure"
btnStyleAdd.style.marginLeft = "16px"  //inline style access properties using js methiod1 |only inline styles can be accessible
console.log(btnStyleAdd.style.marginRight)

console.log(window.getComputedStyle(btnStyleAdd).marginTop)//css file through access styles method2 |every style can be accessible
console.log(window.getComputedStyle(btnStyleAdd).marginRight)

console.log(window.getComputedStyle(pText).fontSize)

var initialFontSize = window.getComputedStyle(pText).fontSize

console.log(initialFontSize)
console.log(initialFontSize.substr(0 , 2))        

// initialFontSize = initialFontSize.substr(0 , (initialFontSize.length - 2))
// console.log(initialFontSize)
// pText.style.fontSize = parseInt(initialFontSize) + 80 + "px"
// console.log(pText.style.fontSize)

initialFontSize = parseInt(initialFontSize.substr(0, (initialFontSize.length - 2)))
console.log(initialFontSize)



// console.log(typeof(initialFontSize))
// initialFontSize = parseInt(initialFontSize) + 10
// console.log(initialFontSize)
// console.log(typeof(initialFontSize))
// alert("rgb(" + Math.floor(Math.random()*255) +","+ Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")")
// alert("rgb(" + Math.floor(Math.randon()*255) +","+ Math.floor(Math.randon()*255) +","+ Math.floor(Math.randon()*255)+")")
console.log(window.getComputedStyle(pText).color)
// console.log(Math.floor(Math.random()*255))

btnStyleAdd.onclick = function(){
    initialFontSize += 10
    pText.style.fontSize = initialFontSize + "px"
    pText.style.color = "rgb(" + Math.floor(Math.random()*255) +","+ Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")"
}
//math.floor(math.random(0,255))
btnStyleMinus.addEventListener("click", function(){
    initialFontSize -= 10
    pText.style.fontSize = initialFontSize + "px"
    pText.style.color = "rgb("+ Math.floor(Math.random()*255) +","+ Math.floor(Math.random()*255) +","+ Math.floor(Math.random()*255) +")"
})


// changedFontSize = initialFontSizeInNumber + 100
// initialFontSize.style.fontSize = changedFontSize + "px"

// --------------------------------------adding html elemnet to the documet with id ---------------------------------------- 
// var addElement = document.getElementById("add_elements") 
// var btnAddElement = document.getElementById("btn_Add_Element")
// var firstItem = document.getElementById("first_item")
// var inputName = document.getElementById("input_name")

// var u_name
// inputName.addEventListener("input", function(e){
//     console.log(e.target.value)
//     u_name = e.target.value 

// })

// inputName.addEventListener("keypress", function(e){
//     var keycode = e.keyCode
//     if(keycode === 13){
//         addListItem()
        
//     }
// })

// function addListItem(){
//     alert("clicked")


    

//     if(u_name !== undefined && u_name !== null && u_name !== ""){
//         var add = document.createElement("li")
//         var addText = document.createTextNode(u_name)//"item"+ (addElement.childElementCount + 1)
//         add.appendChild(addText)
//         add.id = "item"+ (addElement.childElementCount + 1)
//         console.log(add.id)

//         // var firstItem = addElement.firstElementChild

//         // addElement.insertBefore(add, firstItem)
//         addElement.appendChild(add)
    
//         console.log(addElement.childElementCount)

//     }
//     else{
//         alert("enter user name")
//     }
    
//     inputName.value = ""
//     u_name = ""
    





//     // console.log(add.appendChild(document.createTextNode("item")))

// }

// btnAddElement.addEventListener("click", addListItem)

// --------------------------------------main function with fist code------------------------------------------------

// btnAddElement.addEventListener("click", function(){
//     alert("clicked")


    

//     if(u_name !== undefined && u_name !== null && u_name !== ""){
//         var add = document.createElement("li")
//         var addText = document.createTextNode(u_name)//"item"+ (addElement.childElementCount + 1)
//         add.appendChild(addText)
//         add.id = "item"+ (addElement.childElementCount + 1)
//         console.log(add.id)

//         // var firstItem = addElement.firstElementChild

//         // addElement.insertBefore(add, firstItem)
//         addElement.appendChild(add)
    
//         console.log(addElement.childElementCount)

//     }
//     else{
//         alert("enter user name")
//     }
    
//     inputName.value = ""
//     u_name = ""
    





//     // console.log(add.appendChild(document.createTextNode("item")))

// })

// var element = document.createElement("li")
// console.log(element)


// var element_text = document.createTextNode("item3")
// console.log(document.createTextNode("item 3"))
// console.log(element_text)
// --------------------------------------------------code for name and password entry with operations add, edit, delete-------------------------------------


var addElement = document.getElementById("add_elements") 
var btnAddElement = document.getElementById("btn_Add_Element")
var firstItem = document.getElementById("first_item")
var inputName = document.getElementById("input_name")
var inputPassword = document.getElementById("input_password")
var btnUpdateElement = document.getElementById("btn_update_Element")
// var btnRemoveElement = document.getElementById("btn_remove_Element")

var u_name
inputName.addEventListener("input", function(e){
    console.log(e.target.value)
    u_name = e.target.value 

})
var u_pass
inputPassword.addEventListener("input", function(e){
    console.log(e.target.value)
    u_pass = e.target.value
})


inputName.addEventListener("keypress", function(e){
    var keycode = e.keyCode
    if(keycode === 13){
        addName()
        addPassword()
        
    }
})
inputPassword.addEventListener("keypress", function(e){
    keycode =e.keyCode
    if(keycode === 13){
        addName()
        addPassword()


    }
})

function addNameNode(){
    
}

function addName(){
    alert("clicked name")


    

    if(u_name !== undefined && u_name !== null && u_name !== ""){
        var add = document.createElement("li")
        var addText = document.createTextNode(u_name)//"item"+ (addElement.childElementCount + 1)
        add.appendChild(addText)
        add.id = "item"+ (addElement.childElementCount + 1)
        console.log(add.id)

        // var firstItem = addElement.firstElementChild

        // addElement.insertBefore(add, firstItem)
        addElement.appendChild(add)
    
        console.log(addElement.childElementCount)

        

    }
    
    else{
        alert("enter user name")

    }
    
    inputName.value = ""
    
    u_name = ""
    
    





    // console.log(add.appendChild(document.createTextNode("item")))

}

function addPassword(){
    alert("clicked password")
    if(u_pass !== undefined && u_pass !== null && u_pass !== ""){
        
    
        
        var addP = document.createElement("li")
        var addTextP = document.createTextNode(u_pass)
        addP.appendChild(addTextP)
        addP.id = "item"+(addElement.childElementCount + 1)
        console.log(addP.id)
        // var firstItem = addElement.firstElementChild
        
        // addElement.insertBefore(add, firstItem)
        addElement.appendChild(addP)
        console.log(addElement.childElementCount)

    }
    else{
        alert("enter user password")
    }
    
    
    
    inputPassword.value = ""
    
    u_pass = ""
    





    // console.log(add.appendChild(document.createTextNode("item")))


}

btnAddElement.addEventListener("click", addName)
btnAddElement.addEventListener("click", addPassword)

btnUpdateElement.addEventListener("click", function(){
    alert("update Element")
    var firstItem = addElement.firstElementChild


})


// --------------------------------------------------keyboard events-------------------------------------------------------------------
document.body.addEventListener("keydown", function(e){
    var keycode = e.keyCode
    if(keycode === 13){
        console.log("keycode for keyDown = " + keycode)

    }
    
})
document.body.addEventListener("keyUp", function(e){
    var keycode = e.keyCode
    if(keycode === 13){
        console.log("keyCode for keyUp = " + keycode)

    }
    
})
document.body.addEventListener("keyPress", function(e){
    var keycode = e.keyCode
    if(keycode === 13){

        console.log("keycode for keyPress = " + keycode)
    }
    
})
// --------------------------drumkit------------------------
var keyH = document.getElementById("d_h")
var keyJ = document.getElementById("d_j")
var keyK = document.getElementById("d_k")
var keyL = document.getElementById("d_l")
document.body.addEventListener("keydown", function(e){
    var keycode = e.keyCode
    console.log(keycode+ " pressed")
    if(keycode === 72){
        keyH.innerHTML = "<audio controls autoplay style="+"position: absolute; opacity: 0; z-index: -10;"+"><source src="+"/experiments/audio_files/tom.wav"+" type="+"audio/wav"+"></audio>"

    }
    if(keycode === 74){
        keyJ.innerHTML = "<audio controls autoplay style="+"position: absolute; opacity: 0; z-index: -10;"+"><source src="+"/experiments/audio_files/tink.wav"+" type="+"audio/wav"+"></audio>"

    }
    if(keycode === 75){
        keyK.innerHTML = "<audio controls autoplay style="+"position: absolute; opacity: 0; z-index: -10;"+"><source src="+"/experiments/audio_files/boom.wav"+" type="+"audio/wav"+"></audio>"

    }
    if(keycode === 76){
        keyL.innerHTML = "<audio controls autoplay style="+"position: absolute; opacity: 0; z-index: -10;"+"><source src="+"/experiments/audio_files/clap.wav"+" type="+"audio/wav"+"></audio>"

    }
    
    
    
    
    // var myInterval = setInterval(function(){
    //     if(keycode === 72){
       
    //         keyH.innerHTML = "<audio controls autoplay style="+"position: absolute; opacity: 0; z-index: -10;"+"><source src="+"/experiments/audio_files/tom.wav"+" type="+"audio/wav"+"></audio>"
    
    //     }

    // },1000)

    // clearInterval(myInterval)
    
    
})
document.body.addEventListener("keyup", function(e){
    var keycode = e.keyCode
    console.log(keycode+"pressed")
    if(keycode === 72){
        keyH.innerHTML = "H"
    }
    if(keycode === 74){
        keyJ.innerHTML = "J"
    }
    if(keycode === 75){
        keyK.innerHTML = "K"
    }
    if(keycode === 76){
        keyL.innerHTML = "L"
    }
})
// --------------------------------------------mouse events--------------------------------------------------------------------------
var mouseSelect = document.getElementById("btn_l")

mouseSelect.addEventListener("mousedown", function(){
    console.log("mouse down")


})
var mouseSelect = document.getElementById("btn_l")

mouseSelect.addEventListener("mouseup", function(){
    console.log("mouse up")


})

mouseSelect.addEventListener("dblclick", function(){
    console.log("double click event")
})

var overCount = 0
var mouseOverSelect = document.querySelector(".mouse_over")
mouseOverSelect.addEventListener("mouseover", function(){
    console.log("mouse over")
    var countElement = document.querySelector(".mouse_over > p")
    overCount += 1
    countElement.innerHTML = overCount
})

var moveCount = 0
var mouseMoveSelect = document.querySelector(".mouse_move")
mouseMoveSelect.addEventListener("mousemove", function(){
    console.log("mouse enter")
    var countElement = document.querySelector(".mouse_move > p")
    moveCount += 1
    countElement.innerHTML = moveCount
}) 

var enterCount = 0
var mouseEnterSelect = document.querySelector(".mouse_enter")
mouseEnterSelect.addEventListener("mouseenter", function(){
    console.log("mouse enter")
    var countElement = document.querySelector(".mouse_enter > p")
    enterCount += 1
    countElement.innerHTML = enterCount
})


//----------------------------------------------adding for form input----------------------------------------------------------------
// var addElement = document.getElementById("add_elements") 
// var btnAddElement = document.getElementById("btn_Add_Element")
// var firstItem = document.getElementById("first_item")
// var inputName = document.getElementById("input_name")
// var inputPassword = document.getElementById("input_password")


// var u_name
// inputName.addEventListener("input", function(e){
//     console.log(e.target.value)
//     // window.localStorage()
//     u_name = e.target.value
// })
// var u_pass
// inputPassword.addEventListener("input", function(e){
//     console.log(e.target.value)
//     u_pass = e.target.value

// })




// btnAddElement.addEventListener("click", function(){
//     alert("clicked")
//     var addN = document.createElement("li")
//     var addP = document.createElement("li")

//     // var addText = document.createTextNode("item"+ (addElement.childElementCount + 1))
//     var addName = document.createTextNode("name: "+ u_name)
//     var addPassword = document.createTextNode("password: "+ u_pass)
//     addN.appendChild(addName)
//     addP.appendChild(addPassword)
//     addN.id = "name"+ (addElement.childElementCount + 1)
//     addP.id = "pass"+ (addElement.childElementCount + 1)
//     console.log(addN.id)
//     console.log(addP.id)
    
//     // var firstItem = addElement.firstElementChild

//     // addElement.insertBefore(add, firstItem)
//     addElement.appendChild(addN)
//     addElement.appendChild(addP)
    
//     console.log(addElement.childElementCount)




//     // console.log(add.appendChild(document.createTextNode("item")))

// })

//------------------------------adding new item on the top of the new element----------------------------------
// var addElement = document.getElementById("add_elements") 
// var btnAddElement = document.getElementById("btn_Add_Element")
// var firstItem = document.getElementById("first_item")

// btnAddElement.addEventListener("click", function(){
//     alert("clicked")
//     var add = document.createElement("li")
//     var addText = document.createTextNode("item"+ (addElement.childElementCount + 1))
//     add.appendChild(addText)
//     add.id = "item"+ (addElement.childElementCount + 1)
//     console.log(add.id)
//     var firstItem = addElement.firstElementChild

//     addElement.insertBefore(add, firstItem)
//     // addElement.appendChild(add)
    
//     console.log(addElement.childElementCount)




//     // console.log(add.appendChild(document.createTextNode("item")))

// })

// var element = document.createElement("li")
// console.log(element)


// var element_text = document.createTextNode("item3")
// console.log(document.createTextNode("item 3"))
// console.log(element_text)

