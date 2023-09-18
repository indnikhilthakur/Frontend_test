console.log("script")
var fullName = $("#full_name").val();
console.log(fullName)
console.log(fullName.length)
var passwordU = $("#password1").val();
console.log(passwordU)
var selectCity = $("#city option:selected").text();
console.log(selectCity)

$("#full_name").change(function(){
    var enteredFullName = $("#full_name").val()
    console.log(enteredFullName)
})

$("#city").change(function(){
    var newOption = $("#city option:selected").val()
    console.log(newOption)
} )

$("#email_id").change(function(){
    var newEmail = $("#email_id").val()
    console.log(newEmail)
} )

$("#password1").change(function(){
    var newpassword1 = $("#password1").val()
    console.log(newpassword1)
} )

$("#password2").change(function(){
    var newpassword2 = $("#password2").val()
    console.log(newpassword2)
} )

// $("input[name='gender']").change(function(){
//     var radioGender = $("input[name='gender]:checked").val()
// })

$("input[name='gender']").change(function(){
    var radioGender = $("input[name='gender']:checked").parent().text()
    console.log(radioGender)
})
function validate(){
    
    var fullName = $("#full_name").val();
    console.log(fullName)

    var error = $("#error")
}


// var error = $("#error")
// console.log(error)

$("#full_name").change(function(){
    var enteredFullName = $("#full_name").val()
    console.log(enteredFullName)
})

// var fullName = $("#full_name").val();

// function validate(){
//     if(fullName.length !== 0){
//         $("#full_name").change(function(){
//             var enteredFullName = $("#full_name").val()
//             document.write(enteredFullName)
//         })
        
//     }
//     else{
//         "please enter name"
//     }    
        
// }
// validate()

//---------------------------------practice simple functions-----------------------------------
$("#btnHide").click(function(){
    // $(".div").hide()
    $(".div").css("display", "none")
    console.log("click")
})
$("#btnShow").click(function(){
    $(".div").show()
    console.log("click")
})
// console.log(bhide)

var jInnerHtml = $("#para").html()//innerHTML
console.log(jInnerHtml)
var changeInnerHtml = $("#para").html("changed JQuery with html")
console.log(changeInnerHtml)

var jinnerText = $("#para").text()//innerTEXT
console.log(jinnerText)
var changeInnerText = $("#para").text("changed JQuery with text")
console.log(changeInnerText)

//-----------attr(href,src,target etc.)--------
var jattrHref = $("#hrefLink").attr("href")//get targated attribute here href
console.log(jattrHref)
// $("#hrefLink").attr("href", "/test_html.html")//change href link directly
$("#btnChangeImg").click(function(){
    $("#bgImg img").attr("src", "https://drive.google.com/uc?export=view&id=1fZDlHHxEuP_COokXs7eeRUZ65yDksV8l")
    $("#btnChangeImg").hide()
    console.log("click")
})

$("#btnToggleImg").click(function(){
    $("#bgImg img").attr("src", "https://drive.google.com/uc?export=view&id=1fZDlHHxEuP_COokXs7eeRUZ65yDksV8l")
    
    console.log("click")
})
empty()
remove()

$("#registration .formElement #submit").click(function(){
    var fullName = $("#fullName").val()
    if(fullName.length == 0){
        document.write("Enter valid name")
        console.log("no")
    }
    else{
        $("#full_name").change(function(){
            var enteredFullName = $("#full_name").val()
            console.log(enteredFullName)
        })
        console.log("no")

    }
    

})

//------------------------------------
// $(document).ready(function(){
//     $("#registration").submit(function(e){
//         e.preventDefault(){
//             var selectFullName = $("#full_name").val()

//             $(".error").remove();
            
//             if(selectFullName < 1){
//                 $("#full_name").after(<apan class="error">This field is required</apan>)
//             }

//         }

//     })
// })