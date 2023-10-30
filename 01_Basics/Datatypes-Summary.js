// // Primitive

// // 7 types : String, Number , Boolean , null, undefined, Symbol, BigInt

// const score = 100;
// const scoreValue = 100.3 // both are Numbers in javascript not treated as floating number like other languages
// //Javascript is a dynamically typed language

// const isLoggedIn = false;
// const outsideTemp = null;
// let userEmail; //undefined

// const id = Symbol('123');
// const anotherId = Symbol('123');

// console.log(id === anotherId);

// const bigNumber = 3456788188289189192291892828128n;

// // Reference (Non Primitive)

// // Array, Objects, Functions

// const heroes = ["shaktiman","naagraj","doga"];
// let myObj = {
//     name: "jalaj",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("hello, jalaj");
// }

// console.log(typeof bigNumber);
// learn typeof null typeof is object

// Return type of variables in Javascript
/*
1) Primitive Datatypes 
 Number => number
 String => string
 Boolean => boolean
 null => object
 undefined => undefined
 Symbol => symbol
 BigInt => bigint

2)Non-Primitive Datatypes
 Arrays => Object
 Function => function
 Object => object
*/

/*

JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness. 
*/

//Stack(Primitive) gives copy of variable , Heap(Non-Primitive) gives reference of variable
// Example:-

//stack main copy ban jati hai toh changes jo hote hai voh sabke apne hote hai
// par heap main main reference ke through hota hai matlab agar object create hogaya toh sab use hi refer karenge aur agar ek bhi changes hoga toh sabme reflect hoga

let myYoutubename = "jalajdotcom";

let anothername = myYoutubename;

anothername = "chaiaurcode";
console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "jalajsingh231@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "abc@gmail.com";  // same refernce 
console.log(userOne.email);
console.log(userTwo.email);

/*
 Stack Memory               Heap Memory
                           [  {
                 |------>           email:"jalajsingh231@gmail.com"
                |          }         ]
                |           [   upi:"user@ybl"        ]
               |            [           ]
[userTwo] ------
[userOne]------->>>>>>---|--
[myYoutubename]
[anothername]
[myYoutubename]

*/
