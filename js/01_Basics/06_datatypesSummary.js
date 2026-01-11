// There are two types of datatype 

// 1. Primitive (call by value)
// There are 7 types of Primitive datatypes: String, Number, Boolean, null, undefined, Symbol , BigInt

const myName = "Abhay"; 
const age = 18;
const ammount = 50000.43;
const logedIn = true;
let outSideTemp = null;
let emailAddress;

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id == anotherId);

console.log(typeof myName);
console.log(typeof age);
console.log(typeof ammount);
console.log(typeof logedIn);
console.log(typeof outSideTemp);
console.log(typeof emailAddress);
console.log(typeof id);

// 2. Non-Primitive datatype (call by refrence): Array, Objects, Functions

const arr = ["Abhay", "Mukesh", "Harshita"];

let obj = {
    name:"Abhay",
    age:20,
    number:234567890
}

const myFunction = function(){
    console.log("Hello Abhay");
}


console.log(typeof arr);
console.log(typeof obj);
console.log(typeof myFunction);

// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

// For example, in JavaScript, you can do the following:

// let x = 10; // x is now a number
// x = "Hello"; // x is now a string
// x = true; // x is now a boolean
// On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

// Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

// int x = 10; // x is a variable of type int
// String name = "John"; // name is a variable of type String
// JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object