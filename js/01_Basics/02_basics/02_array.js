const cricketHero = ["Mahi", "Kohli", "Rohit"]
const bollyHero = ["Akshay", "Vicky", "palvi", "Rasi"]

// cricketHero.push(bollyHero)
// console.log(cricketHero)

const newarr = cricketHero.concat(bollyHero)
console.log(newarr)

const allHero = [...cricketHero, ...bollyHero]
console.log(allHero)

const rendomArray = [10, 20, 30, [50, 60, [60, 80]]]

const simpleArray = rendomArray.flat(Infinity)
console.log(simpleArray)

console.log(Array.isArray("Abhay"))
console.log(Array.from("Abhay"))

let num1 = 100;
let num2 = 200;
let num3 = 300;

console.log(Array.of(num1, num2, num3))