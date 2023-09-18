function loadFile(){
    // console.log("working")

    // var xmlHttp = new XMLHttpRequest()//post
    // xmlHttp.onload = function(){
    //     console.log("response:", JSON.parse(this.responseText))
    //     // console.log("status:", this.status)
    // }
    
    // // xmlHttp.open("get", "/experiments/ajax_test/text_file.txt")
    // // xmlHttp.open("get", "/experiments/ajax_test/data.json")
    // // xmlHttp.open("get", "https://jsonplaceholder.typicode.com/users")

    // // xmlHttp.open("post", "https://jsonplaceholder.typicode.com/posts/1/comments")
    
    // xmlHttp.open("post", "https://jsonplaceholder.typicode.com/posts")
    // xmlHttp.setRequestHeader("Content-type", "application/json; charset=UTF-8")
    // let data = {title: 'foo', body: 'bar', userId: 1}
    // xmlHttp.send(JSON.stringify(data))





    var xmlHttp = new XMLHttpRequest()//get
    xmlHttp.onload = function(){
        // console.log("response:", JSON.parse(this.responseText))
        // console.log("status:", this.status)

        let users = JSON.parse(this.responseText)
        let userData = ""
        users.forEach((user) => {
            let str = `<h1>${user.name}</h1>
                <p>${user.email}</p>
                <br/>
                <hr>
                <br/>`
            userData = userData + str
        })
        console.log("userData: ", userData)
        // document.getElementById("conatinerTaxt").innerHTML = userData
        $("#containerText").http("userData")
        
    }
    
    // xmlHttp.open("get", "/experiments/ajax_test/text_file.txt")
    // xmlHttp.open("get", "/experiments/ajax_test/data.json")
    // xmlHttp.open("get", "https://jsonplaceholder.typicode.com/users")
    xmlHttp.open("get", "https://jsonplaceholder.typicode.com/comments")

    // xmlHttp.open("post", "https://jsonplaceholder.typicode.com/posts/1/comments")
    
    // xmlHttp.open("post", "https://jsonplaceholder.typicode.com/posts")
    // xmlHttp.setRequestHeader("Content-type", "application/json; charset=UTF-8")
    // let data = {title: 'foo', body: 'bar', userId: 1}
    xmlHttp.send()
    // console.log("fast")




}