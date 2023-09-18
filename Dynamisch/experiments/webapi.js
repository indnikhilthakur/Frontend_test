function myFunction(){
    const inpobj= document.getElementById("id1");
    if (!inpobj.checkValidity()){
        document.getElementById("demo").innerHTML=inpobj.validationMessage;
    }
    else{
        document.getElementById("demo").innerHTML="Input OK";
    }
}

// function myFunction(){
//     const inpobj= document.getElementById("id1");
//     let text;
//     if (inpobj.validity.rangeOverflow){
//         text="value too large";
//     }
//     else{
//         text="Input Ok";
//     }
//     document.getElementById("demo").innerHTML=text;
// }

// function myFunction(){
//     const inpobj= document.getElementById("id1");
//     let text;
//     if (inpobj.validity.rangeUnderflow){
//         text="value too small";
//     }
//     else{
//         text="Input Ok";
//     }
//     document.getElementById("demo").innerHTML=text;
// }