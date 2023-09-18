console.clear()
const doc = document
console.log("Doc: ", doc)

const mainContainer = document.getElementById("main-container")
console.log("mainContainer: ", mainContainer)

const inner = document.getElementsByClassName("inner")
console.log("inner: ", inner)

// const inner = document.getElementById("inner")//null
// console.log("inner: ", inner)

const innerOne = document.getElementsByName("inner_one")
console.log("inner_one_div ",innerOne)

const tagname = document.getElementsByTagName("div")
console.log("tagname: ", tagname)

const innerQueryS = document.querySelector(".inner")
console.log("inner: ", innerQueryS)

console.log("--------------------------------")
var innerQueryS2 = document.querySelector(".main-container .inner h2")
console.log("inner: ", innerQueryS2)
const innerQuerySA = document.querySelectorAll(".inner")
console.log("inner: ", innerQuerySA)

const mainContainerInnerHtml =document.getElementById("main-container")//take inter html content into temporary variable
let innerHtml = mainContainerInnerHtml.innerHTML//html content is save into variable
//mainContainer.innerHTML = "<h1>DOM</h1>"//change html content of the variable cause changing content of the main container//content changes to heading dom
console.log("main_container", mainContainerInnerHtml)//temporary variable content
console.log("main_containerHtml", innerHtml)//innerHtml content from main container
console.log("main-container", mainContainer)//main container ccontent


 let mArry = [1,2,3,4,5]
 console.log(mArry)
 console.log(mArry.length)
 var num
 function test(){
    for(num = 0; num <= mArry.length -1; num++){
        console.log(mArry[num])
    }
 }

 console.log(test())

console.log("-------------------------------------update html document------------------------------")
//var selectContainer = document.getElementsByClassName("container")
//let testContainer = selectContainer.innerHTML
//console.log(selectContainer)

//console.log(selectContainer.innerHTML)
//selectContainer.innerHTML = "<p>Updated html document</p>"

var selectBody = document.getElementById("body");
// var changebgImg = document.getElementById("bgImg")
// console.log(changebgImg.src)
console.log(selectBody)
console.log(selectBody.innerHTML)
var updateBody = selectBody.innerHTML
//selectBody.innerHTML = "<P>Updated html document</p>"
// const selectCount = document.getElementsByTagName("h1")
// console.log(selectCount)
// console.log(selectCount.innerHTML)
//console.log(selectCount.innerText)






console.log("-------------------------------------------------------------------------------")
selectCountId = document.getElementById("count")
var countdown = selectCountId.innerHTML
console.log(countdown)

var changebgImg = document.getElementById("bgImg")
// var bgImg = changebgImg
console.log(changebgImg.src)
// document.write(changebgImg)
console.log(changebgImg)
changebgImg.className = "imgClass"
console.log(changebgImg)

setInterval(function(){
    countdown = countdown > 0 ? countdown - 1 : 0;
    selectCountId.innerHTML = countdown;
    

    
    var bgImg = countdown % 2 == 0 ? "/ai-ml copy.png" : "dashboard_view/image2.jpg";
    changebgImg.src = bgImg;
    // if (countdown % 2 === 0){
    //     return changebgImg.src = "/ai-ml copy.png"
    // }
    // else if(countdown % 2 !== 0 ){
    //     return changebgImg.src = "dashboard_view/image2.jpg"
    // }
    // else{
    //     return

    // }

    console.log("Interval Running")



},2000)
console.log("-------------------------------------------------------------------------")

// setInterval(function(){
    
//     // if (selectCountId.innerHTML > 0 ){
//     //     selectCountId.innerHTML = selectCountId.innerHTML-1
     

//     // }
    
//     selectCountId.innerHTML > 0 ?
//     selectCountId.innerHTML -= 1 : 0//ternery conditional operator
//     if(selectCountId.innerHTML % 2 === 0 ){
//         // const changeImg = document.getElementById("body")

//         // changeImg.style.backgroundImage = "/Python-language.png"
//         //  changebgImg.src ="/Python-language.png"

//     }



// },1000)


//var selectImg =document.getElementById("img")

console.log("-----------------------------update styles of html elements using js-----------------------------------")
var selectTextElement = document.getElementsByClassName("text")
selectTextElement.Id = "textId"
console.log(selectTextElement)
selectText = selectTextElement.innerTEXT
console.log(selectText)


var selectTextById = document.getElementById("textId")
console.log(selectTextById)

var selectTextByQuerySelector = document.querySelector(".container .text")
console.log(selectTextByQuerySelector)

var text = selectTextByQuerySelector.innerHTML
console.log(text)

var textOnly = selectTextByQuerySelector.innerTEXT//style as font color and fontSize
console.log(textOnly)
selectTextByQuerySelector.style.color = "blue"
selectTextByQuerySelector.style.fontSize = "80px"

var styleSelectCounter = document.getElementById("counter")
var count = styleSelectCounter.innerHTML
// count = 5 
console.log(count)

var interval = setInterval(function(){
    
    
    if(count >= 0){
        var resizeFont = count *100
        console.log(resizeFont)
        styleSelectCounter.innerHTML = count
        styleSelectCounter.style.color = "darkgreen"
        styleSelectCounter.style.fontSize =  resizeFont + "px"
        // styleSelectCounter.style.transform = translate(400px,4000px)
        count = count - 1
        
    }

    if(count < 0){
        clearInterval(interval);
    }
    

    
    
    console.log(count)

},1000)
// -----------------------------------------------------------------------------
var btnOne = document.getElementById("btn-one")
var btnTwo = document.getElementById("btn-two")
var btnThree = document.getElementById("btn-three")
var innerOneSelect = document.getElementById("inner-one")
var innerTwoSelect = document.getElementById("inner-two")
var innerThreeSelect = document.getElementById("inner-box")
var mainContainerSelect = document.getElementById("main-container")

btnThree.onclick = function(){  //method1 using event onclick |event handelling
    alert("btn 3 clicked")
    btnThree.style.backgroundColor = "coral"
    mainContainerSelect.style.backgroundColor = "grey"
    
}
//------------------

function onBtnOneClick(){  //method2 using addevent listener |event handelling
    alert("btn 1 clicked")
    innerOneSelect.style.backgroundColor = "azure"

    // var random = Math.random() * 256
    // var randomColor = Math.floor(random)
    // alert(randomColor)

    // alert("rgb(" + Math.floor(Math.random()*255) +","+ Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")")
    mainContainerSelect.style.backgroundColor = "rgb(" + Math.floor(Math.random()*255) +","+ Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")"
    // alert(random)
    

}

//btnOne.onclick = onBtnOneClick()

btnTwo.addEventListener("click", function(){
    alert("function called btn 2 clicked")
    innerTwoSelect.style.backgroundColor = "aquamarine"
    innerThreeSelect.style.borderRadius = "20px"




})

btnOne.addEventListener("click", onBtnOneClick)
//---------------
//----------------addclass------------------------------------
var classAddRem = document.getElementById("heading")
console.log(classAddRem)
classAddRem.classList.add("shadowTwo")//ass class
classAddRem.classList.remove("shadowTwo")//remove class
console.log(classAddRem.classList)

//-----------add remove class on count-------------------
var btnShadowSelect = document.getElementById("btnShadow")

function changeFont(){
    alert("clicked")
    classAddRem.classList.add("shadowTwo")

    setInterval(function(){
        classAddRem.classList.remove("shadowTwo")
    },2000)
}

btnShadowSelect.addEventListener("click", changeFont)


// 





//--------------------------------------------------------------------------------

// const addBG = document.getElementById("btn_one")
// const removeBG = document.getElementById("btn_two")
// const toggleBG =document.getElementById("btn_three")

// function addBGColorHandeler(){
//     //console.log(addBGColorHandeler,event)
//     const innerBox = document.getElementById("inner-one")
//     innerBox.style.backgroumdColor="blue"
// }
// //addBG.addEventListener("click", addBGColorHandeler)

//---------------------------------------------------------------------------------
// const mainContainer = document.getElementById("main-container")
// let innerHtml = mainContainer.innerHTML
// mainContainer.innerHTML = "<h1>DOM</h1>"
// console.log("innerHtml: ", innerHtml)

// let innerText = mainContainer.innerText
// mainContainer.innerText = "<h1>DOM</h1>"
// console.log("innerText: ", innerText)

// const addBg = document.getElementById("btn-one")
// const removeBg = document.getElementById("btn-two")
// const toggleBg = document.getElementById("btn-three")

//---------------------------------------
// function addBgHandler(event) {
//     // console.log("AddBgHandler", event)
//     const innerOne = document.getElementById("inner-one")

//     // innerOne.style.backgroundColor = "red"
//     // innerOne.style.color = "white"
//     // innerOne.style.borderColor = "pink"

//     innerOne.classList.add("addClass")
// }

// function removeBgHandler() {
//     const innerOne = document.getElementById("inner-one")
//     // innerOne.style.backgroundColor = ""
//     // innerOne.style.color = ""
//     // innerOne.style.borderColor = ""
//     innerOne.classList.remove("addClass")
// }


//-----------------------------------------------
// function toggleBgHandler (){
//     const innerOne = document.getElementById("inner-one")
// innerOne.classList.toggle("addClass")
// }

// addBg.addEventListener("click", addBgHandler)
// removeBg.addEventListener("click", removeBgHandler)
// toggleBg.addEventListener("click", toggleBgHandler)

// -----------------------------------------------------------------------
