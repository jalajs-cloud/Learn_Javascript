const name = "jalaj";
const repoCount = 50;

console.log(name + repoCount + "Value");
//This is called as String Interpolation {new method for string concatenation}
console.log(`Hello my name is ${name} and my repo count is ${repoCount}}`);

// By using new String('') we can create object or key pair values like 0:'j',1:'a',2:'l' & so on. & use many inbuilt methods.

const gameName = new String('jalaj-jks-com');
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4); // we cannot give negative range to substring , if we have it ignores negative and start from 0.
console.log(newString);

const anotherString = gameName.slice(-5,4);
console.log(anotherString);

const newString1 = "      jalaj    ";
console.log(newString1);
console.log(newString1.trim()); // remove spaces from start and last

const url = "https://jalaj.com/jalaj%20kumar";
console.log(url.replace('%20','-'));

console.log(url.includes('jalaj'));

console.log(gameName.split('-'));

//learn string methods.

//use back tick method to concat method and use $ sign for print & new string method for define.



