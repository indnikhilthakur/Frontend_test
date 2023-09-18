$(document).ready(function() {

    $('#first_form').submit(function(e) {
      e.preventDefault();
      var fullName= $('#full_name').val();
      
      var email = $("#email").val();
      var password = $('#password').val();
      var confermPassword = $("#conferm_password").val()
      // var radioGender = $("input[name='gender']:checked")
  
      $(".error").remove();
  
      if (fullName.length < 1) {
        $("#full_name").after('<span class="error">This field is required</span>');

      }
     
      if (email.length < 1) {
        $('#email').after('<span class="error">This field is required</span>');
      } 
      // else {
      //   var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
      //   var validEmail = regEx.test(email);
      //   if (!validEmail) {
      //     $("#email").after('<span class="error">Enter a valid email</span>');
      //   }
      // }
      if (password.length < 8) {
        $('#password').after('<span class="error">Password must be at least 8 characters long</span>');
      }
      if (confermPassword.length < 8 || password != confermPassword) {
        $('#conferm_password').after('<span class="error">Password did not match</span>');
      }
      // if (radioGender == false) {
      //   $("#gender").after('<span class="error">This field is required</span>');

      // }

      $("#full_name").change(function(){
      var name = $("#full_name").val()
      sessionStorage.setItem("fullName", name);
      console.log(name)
    })
    });
    //-----------------------------------------------
  //   $("#full_name").change(function(){
  //     var enteredFullName = $("#full_name").val()
  //     sessionStorage.setItem("full_name", enteredFullName);
  //     console.log(enteredFullName)
  // })


     var name = $("#full_name").val()
     sessionStorage.setItem("fullName", name)
     console.log(name)

    

    // $("#full_name").change(function(){
    //   var name = $("#full_name").val()
    //   sessionStorage.setItem("fullName", name);
    //   console.log(name)
    // })
     var mail = $("#email").val()
     sessionStorage.setItem("email", mail)
     console.log(mail)

     var pass = $("#password").val()
     sessionStorage.setItem("password", pass)
     console.log(pass)

     var cpass = $("#conferm_password").val()
     sessionStorage.setItem("cpassword", cpass)
     console.log(cpass)
  
  });
// $("#full_name").change(function(){
//     var enteredFullName = $("#full_name").val()
//     sessionStorage.setItem("full_name", enteredFullName);
//     console.log(enteredFullName)
// })
// $("#email").change(function(){
//     var newEmail = $("#email").val()
//     console.log(newEmail)
// })
// $("#city").change(function(){
//     var newOption = $("#city option:selected").val()
//     console.log(newOption)
// } )



// $("#password").change(function(){
//     var newpassword1 = $("#password").val()
//     console.log(newpassword1)
// } )

// $("conferm_password").change(function(){
//     var newpassword2 = $("#conferm_password").val()
//     console.log(newpassword2)
// } )

// $("input[name='gender']").change(function(){
//     var radioGender = $("input[name='gender']:checked").parent().text()
//     console.log(radioGender)
// })

// $("#telephone").change(function(){
//     var telephoneNo = $("#telephone").val()
//     console.log(telephoneNo)
// })

// $("date").change(function(){
//     var inputDate = $("#date").val()
//     console.log(inputdate)
// })

// $("file").change(function(){
//     var inputFile = $("#file").val()
//     console.log(inputFile)
// })

// // var fullName = $("#full_name").val();
// // var storage = sessionStorage.setItem("full_name", "fullName")
// // sessionStorage.setItem("full_Name")
// // console.log(storage["fullName"])


// var fullName = $("#full_name").val();
// sessionStorage.setItem("full_name", fullName);
// let personName = sessionStorage.getItem("full_name");
// // document.getElementById("demo").innerHTML = personName;
// $("#demo").html(personName)
