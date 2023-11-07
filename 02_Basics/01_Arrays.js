// array

const myArr = [0,1,2,3,4,5];

console.log(myArr[0]);  // shallow copy & deep copy

const myHeroes = ["shaktiman","naagraj"];
const myArr2 = new Array(1,2,3,4);
console.log(myArr2[0]);


//Array Methods

myArr2.push(6);
console.log(myArr2);
myArr2.pop();
console.log(myArr2);

myArr2.unshift(9); // add elements to first
console.log(myArr2);

myArr2.shift(); //remove first element
console.log(myArr2);


console.log(myArr2.includes(9)); //gives -1 if not find
console.log(myArr2.indexOf(9));

const newArr = myArr2.join();
console.log(myArr2);
console.log(newArr);
console.log(typeof newArr);


//slice , splice

console.log("A",myArr2);
const myn1 = myArr2.slice(1,3);
console.log(myn1);

console.log("B",myArr2);

const myn2 = myArr2.splice(1,2);
console.log("C",myArr2);
console.log(myn2);  

//Main difference between splice and slice is , splice maipulates original array remove given start and end index element