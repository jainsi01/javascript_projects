// function greet(){
//     console.log("Hello");
// }
// function Hello(Hi){
//  Hi("Jainsi");
// }
// Hello(greet)


function greet(){
    return function(){
        console.log("Hello");
    }
}
greet()();

function greet() {
   console.log("Hello");
}

const x = greet;

x();
//IIFE function
(function(){
    console.log("Hello from IIFE");
}());

//primitive data types
let a = 10;
let str = "Hello";
let isAdmin = true;
let something = null;

