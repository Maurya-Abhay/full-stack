// 1.JS creates Global excution context 
// 2.Next it creates memory phase
// 3.Memory phase - In this phase,the variables are set to undefined 
//   until the execution phase(next phase) and the functions are set to their definitions.
// 4.Next it creates the execution phase
// 5.Execution phase - In this phase,the variables are initialsed to given values and 
//   when the function s are called,it creates a memory phase and execution phase for the function 
//   just like the main one.

// For live demo:
// browser > inspect > Sources
// create a snippet with few functions and visually experience the call stack.

const var1 = 10
const var2 = 20
function test(var1, var2) {
    result = var1 + var2
    return result
}

let total1 = test(var1, var2)
let total2= test(30, 26)
console.log(total1)
console.log(total2)