
const user = {
    username: "Abhay",
    phone: 234567890,

    welcome: function(){
        console.log(`${this.username}, Hello user`)
        console.log(this)
    } 

}

user.welcome()
user.username = "Aman"
user.welcome()
console.log(this)

// function demo() {
//     const username = "Demo"
//     console.log(this)
// }

// demo()

// function demo() {
//     const username = "Demo"
//     console.log(this.username)
// }

// demo()


const demo = () => {
    const username = "Demo"
    console.log(this.username)
}

demo()

// Explicit arrow function
const arrowfun = (num1, num2) => {
    return num1 + num2
}
console.log(arrowfun(10,40))

// implecit arrow function

// const twofun = (num3, num4) => num3 + num4
// console.log(twofun(60, 70))

// const twofun = (num3, num4) => (num3 + num4)
// console.log(twofun(60, 70))

const twofun = () => ({username: "Abhay"})
console.log(twofun())