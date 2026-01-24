// singleton
// Object.create

// object literals

const myKey = Symbol("key01")

const myData = {
    name: "Abhay",
    "full_name": "Abhay Prasad",
    age: 18,
    [myKey]: "key123",
    phone: 1234567890,
    email: "abhay@gmail.com",
    password:2357890,
    isLoggedIn: false,
    lastLogingDay: ["Sunday", "Monday"]
}

console.log(myData.email)
console.log(`Hello ${myData.name} your email ${myData.email} and passowrd is ${myData.password}`)
console.log(myData["email"])

console.log(typeof myData[myKey])
console.log(myData[myKey])

myData.email = "abhay@google.com"
// Object.freeze(myData)
myData.email = "abhay@zoho.com"

console.log(myData)

myData.myFunOne = function(){
    console.log("Hello everyone!")
}

myData.myFunTwo = function(){
    console.log(`Hello ${this.name}`)
}

myData.myFunOne()
myData.myFunTwo()