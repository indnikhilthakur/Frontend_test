// let personName = sessionStorage.getItem("full_name");
// document.getElementById("result").innerHTML = personName;
// // $("#result").html(personName)

$(document).ready(function(){
    let name = sessionStorage.getItem("fullName")
    document.write(name,"<br/>")

    let mail = sessionStorage.getItem("email")
    document.write(mail, "<br/>")

    let pass = sessionStorage.getItem("password")
    document.write(pass, "<br/>")

    let cpass= sessionStorage.getItem("cpassword")
    document.write(cpass, "<br/>")
    
})