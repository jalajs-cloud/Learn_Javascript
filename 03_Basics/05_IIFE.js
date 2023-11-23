// Immediately Invoked Function Expression (IIFE)

function chai() {
    console.log(`DB CONNECTED`);
}
chai();


(function chai() {
    console.log(`DB CONNECTED`);
})();   // if you don't use ; semicolon in iife end it does not know end so if we use again other iife function it will not work , so to end first iife function we have to use ; semicolon 
//IIFE Function invoked ()() global scope ke pollution se hoti problem  , to uske variable ya jo bhi declaration hai uske pollution ko remove karne ke liye use hoti hai iife

(()=>{
    console.log(`DB CONNECTED TWO`)
})();


((name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
})('Jalaj')
