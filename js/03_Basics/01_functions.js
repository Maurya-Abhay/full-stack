function userDetails() {
    console.log("Abhay")
    console.log("abhay@gmail.com")
    console.log("234567890")
}

userDetails()

// passing parameter in funtion
function addTwoNumber(num1, num2) {
    // let result = num1 + num2
    // return result
    return num1 + num2
}

// passing argument by calling funtion
const store = addTwoNumber(10, 20)
console.log("Result: " + store)

function userLogedStatus(name = "Test") {
    if(!name) {
        console.log("please enter your name")
        return
    }
    return `${name} your are logedin`
}

console.log(userLogedStatus())


//using rest add multiples bvaluen in one paramenter 
function cardCalculate(...num){
    return num
}

console.log(cardCalculate(100, 200, 400))


// passing object in fuction
function myObject(num){
    console.log(num.email)
}
myObject({
    name: "Abhay",
    email: "abhay@gmail.com"
})

// passing Array in fuction

function myArray(num){
    console.log(num[1])
}

myArray([100, 200, 300, 400])