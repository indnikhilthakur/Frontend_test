// function abbrev_name(subName){
//     subName = subName.slice(0,6)
//     console.log(subName+".")
  
//   }
//   subName = "John Doe"
//   abbrev_name(subName)
  
//   // subName = "John Doe"
//   // // nameUpper = subName.toUpperCase()
//   // subName = subName.slice(0,6)
//   // console.log(subName+".")

//-----------------------main--------------------------------
  function abbrev_name(subName){
    // subName = subName.slice(0,6)
    // console.log(subName+".")
  
    var arr = []
    var abbrName = []
    arr = subName.split("")
    console.log(arr)
    arr.forEach(function(item, index){
      var inde = 0  
      if(item === " "){
    
          console.log(index)
          inde = index + 2
        }
        abbrName = arr.splice(0,inde)
    })
    console.log(abbrName)
    abbr_Name = abbrName.join("")
    console.log(abbr_Name+".")
  
  }
  subName = "John Doe"
  abbrev_name(subName)
  // var arr = []
  // var abbrName = []
  // arr = subName.split("")
  // console.log(arr)