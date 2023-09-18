
// --------------------------callback----------------------------------
function myFuncOne (){
    console.log("ConsoleOne")
}
function myFuncTwo (){
    console.log("ConsoleTwo")
}
function myFuncThree (){
    console.log("ConsoleThree")
}
function timeoutFunc(){
    console.log("TimeoutFunc")
}
function timeoutFunc2(){
    console.log("TimeoutFunc2")
}

myFuncOne()
myFuncTwo()

setTimeout(timeoutFunc, 5000)

myFuncThree()
setTimeout(timeoutFunc2, 5000)

// -------------------------------------promise(resolve, reject)----------------------------------
function myFunc(y) {
    return new Promise((resolve, reject) => {
        let x = 0
        // let y = 0
        setTimeout(() => {
            if (x > y) {
                console.log("Resolve")
                return resolve(x > y)
            } else {
                console.log("Reject")
                return reject(x > y)
            }
        }, 3000)
    })
}

function myPromise() {
    console.log("Before")
    myFunc(-100).then((data) => {
        console.log("Data: ", data)
        return data
    }).then((d) => {
        console.log("D: ", d)
    }).catch((err) => {
        console.log("Error: ", err)
    })
}
myPromise()

async function myPromise2() {
    console.log("Before")
    try {
        let data = await myFunc(100)
        console.log("Data: ", data)
    } catch (err) {
        console.log("Error: ", err)
    }finally{
        console.log("Finally")
    }
}
myPromise2()