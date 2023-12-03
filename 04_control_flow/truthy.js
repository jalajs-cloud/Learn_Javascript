const userEmail = "jalajsingh.ai";  // truthy value is that jo maan liya jaye ki yeh correct hai

if(userEmail){
    console.log("Got User email");
}
else{
    console.log("Don't have user email");
}

// falsey values 
/*
false , 0 , -0 , BigInt 0n
, "" , null , undefined , NaN */

//truthy values
/*
"0" , "false" , " ",[],{},function(){} 
*/

// false == 0  // true
//false == '' //true
//0 == '' //true

if(userEmail.length === 0)
{
    console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0)
{
console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10
//console.log(val1);

// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 10
console.log(val1);

// Terniary Operator
// condition ? true : false 
const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");

//val2 = null ?? undefined;
val2 = undefined ?? null;
console.log(val2);
