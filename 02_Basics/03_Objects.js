// singleton  

// object literals
//Object.create

const mySym = Symbol("key1");

const jsUser = {
    name : "jalaj",
    "fullname":"jalaj kumar singh",
    [mySym] : "mykey1", //[] for symbol //interview
    age: 23,
    location: "Delhi",
    email: "jalajsingh231@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser.fullname);
console.log(jsUser["fullname"]);
console.log(jsUser.mySym);
console.log(typeof jsUser.mySym);
console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]);

jsUser.email = "jalaj@chatgpt.com";
//Object.freeze(jsUser); // freeze means we cannot change key value pairs in object if once defined.
jsUser.email = "jalaj@micrsoft.com";
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js User");
}

jsUser.greeting2 = function(){
    console.log(`Hello js User, ${this.name}`);
}



console.log(jsUser.greeting());
console.log(jsUser.greeting2());

//Notes:- 
//1) We access objects with . but in some cases we have to use [] and for SYMBOL we have to define [mySum] as key[key] and access with [].
//2)freeze is used to stop changes to be made in object