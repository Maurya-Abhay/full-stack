// Immediately Invoked Function Expressions (IIFE)
// IIFE is used to run Immediately of any fuction and not affest any bloble variable 


(function login(){
    console.log("DB connected")
})();

( (name) => {
    console.log(`Databse connected ${name}`)
})("Abhay7")