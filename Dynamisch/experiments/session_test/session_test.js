function clickCounter() {
    if (sessionStorage.clickcount) {
      sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
    } else {
      sessionStorage.clickcount = 1;
      }
    document.getElementById("demo").innerHTML = sessionStorage.clickcount;
  }

  function afterClick(){
    if(sessionStorage.afterclicking){
        sessionStorage.afterclicking = Number(sessionStorage.afterclicking) + 1;

    }
    else{
        sessionStorage.afterclicking = 1;
    }
    // $("#clicks").html("sessionStorage.afterclicking")
    document.getElementById("clicks").innerHTML = sessionStorage.afterclicking;
    

  }
