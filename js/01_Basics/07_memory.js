// Primitive Types:
// 1. Stored in stack.
// 2. Passed or assigned by value (call by value).
// 3. Changes to copies don't affect the original.

// Reference Types:
// 1. Stored in heap; accessed via references (stored in stack).
// 2. Changing the value through another reference affects the original.

let myName = "AbhayPrasad";
let mySecondName = myName;
mySecondName = "AbhayKushwaha";

console.log(myName);
console.log(mySecondName);

let objOne = {
    email:"abhay@edtech.com"
}

let objTwo = objOne;
objTwo.email = "abhay@saitm.ac.in";

console.log(objOne.email);
console.log(objTwo.email);