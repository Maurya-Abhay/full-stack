// 1. var
// Function scoped
// Global if declared outside a function
// Can be re-declared and reassigned

// 2. let
// Block scoped
// Local to { }
// Can be reassigned, not re-declared in same scope

// 3. const
// Block scoped
// Local to { }
// Cannot be reassigned

if (true) {
    var a = 10
    let b = 20
    const c = 30
    console.log(a)
    console.log(b)
    console.log(c)
}

console.log(a)
// console.log(b) //not accesable
// console.log(c) //not accesable


function outer() {
    const name = "Hello"

    function inner() {
        const email = "test@gmail.com"
        console.log(name)
    }

    inner()

    // console.log(email)
}
// console.log(name) 
outer()


if(true) {
    const name = "Abhay"

    if(name  === "Abhay") {
        const email = "abhay@gmail.com"
        console.log(name)
    }

    // console.log(email)
}

// console.log(name)


console.log(addNumber(10))
function addNumber(num) {
    return num + 1
}


// console.log(myFun(13))
const myFun = function(num1) {
    return num1 + 2
}


console.log(myFun(13))