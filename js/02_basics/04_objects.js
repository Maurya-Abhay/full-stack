// 1. singleton object
// const userData = new Object();

// 2. nono-Singleton object
const userData = {}

userData.id = "CPR001"
userData.name = "Abhay"

console.log(userData)

const regularUser = {
    email: "abhay@gmail.com",
    personalDetails: {
        fullName: {
            firstName: "Abhay",
            lastName: "Prasad"
        }
    }
}

console.log(regularUser)
console.log(regularUser.personalDetails.fullName.firstName)


const obj1 = {
    name: "Abhay",
    phone: 1234567890
}

const obj2 = {
    emai: "abhay@gmail.com",
    address: "Nagra"
}

// const obj3 = Object.assign([], obj1 , obj2)

const obj3 = {...obj1, ...obj2}

console.log(obj3)

const backendData = [
    {
        id: "1234567",
        email: "asd@gmail.com"
    },
    {
        name: "Asdf",
        address: "asd@gmail.com"
    },
    {
        id: "123456789",
        email: "demo@gmail.com"
    }
]

console.log(backendData[0].email)


console.log(userData)
console.log(Object.keys(userData))
console.log(Object.values(userData))
console.log(userData.hasOwnProperty('name'))
console.log(userData.hasOwnProperty('email'))


// Object de-structure

const course = {
    courseName: "HTML",
    coursePrice: 1000,
    courseTecher: "Abhay"
}

const {courseTecher: Techer} = course

console.log(Techer)

// json API formet

// {
//     "name": "Abhay",
//     "email": "abhay@demo.com",
//     "age": 20
// }

// [
//     {...},
//     {...},
//     {...}
// ]