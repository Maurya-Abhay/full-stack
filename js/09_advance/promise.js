const firstPromise = new Promise(function (resolve, reject) {
    // write asyn task 
    // DB connection, cryptography, network connection
    setTimeout(function () {
        console.log("Hello async code");
        resolve();
    }, 1000)
})

firstPromise.then(function () {
    console.log("Thsi is then block code ")
})


new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("This is Asyn Two task");
        resolve();
    }, 1000)
}).then(function () {
    console.log("This is then two block")
})


const threePromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ name: "Abhay", email: "abhay@gmail.com" })
    }, 1000)
})

threePromise.then(function (user) {
    console.log(user)
})


const fourPromise = new Promise(function (resolve, reject) {

    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ name: "Abhay", email: "abhay@gmail.com" })
        } else {
            reject("Thsis is Error black")
        }
    }, 1000)
})

fourPromise.then(function (user) {
    console.log(user)
    return user.email;
}).then((name) => {
    console.log(name);
}).catch(function (error) {
    console.log(error)
}).finally(function () {
    console.log("All program completeed run without any error")
})



const fivePromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ name: "Abhay", pass: "1234567" });
        } else {
            reject("Thsis is Reject block")
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await fivePromise;
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive();


// async function getAllUsers() {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json()
//         console.log(data)
//     } catch(error) {
//         console.log(error)
//     }
// }

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users').then(function (response) {
    return response.json();
}).then(function (data) {
    console.log(data)
}).catch(function (error) {
    console.log(error);
})