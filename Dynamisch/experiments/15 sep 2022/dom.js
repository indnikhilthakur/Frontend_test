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
var changebgImg = document.getElementById("bgImg")
console.log(changebgImg.src)
console.log(selectBody)
console.log(selectBody.innerHTML)
var updateBody = selectBody.innerHTML
//selectBody.innerHTML = "<P>Updated html document</p>"
// const selectCount = document.getElementsByTagName("h1")
// console.log(selectCount)
// console.log(selectCount.innerHTML)
//console.log(selectCount.innerText)
selectCountId = document.getElementById("count")
console.log(selectCountId.innerHTML)
//countInner = selectCountId.innerHTML

setInterval(function(){
    
    // if (selectCountId.innerHTML > 0 ){
    //     selectCountId.innerHTML = selectCountId.innerHTML-1
     

    // }
    selectCountId.innerHTML > 0 ?
    selectCountId.innerHTML -= 1 : 0//ternery conditional operator
    if(selectCountId.innerHTML % 2 == 0 ){
        // const changeImg = document.getElementById("body")

        // changeImg.style.backgroundImage = "/Python-language.png"
        //  changebgImg.src ="/Python-language.png"

    }



},1000)


//var selectImg =document.getElementById("img")



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