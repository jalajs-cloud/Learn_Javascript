const marvel_heros = ["thor","Ironman","spiderman"];
const dc = ["superman","flash","batman"];

// marvel_heros.push(dc);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const newarr = marvel_heros.concat(dc);
console.log(newarr); // concat return new array wheras push pushes element in existing array

const all = [...marvel_heros, ...dc]; //spread operator works as a concat function(prefer this because can concat multiple arrays while in concat you can concat only two arrays).
console.log(all); 

const anot = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_anot = anot.flat(Infinity); //gives single array by converting it into one array and infinity is used if you don't know about depth of array
console.log(real_anot); 

console.log(Array.isArray("Jalaj"));
console.log(Array.from("Jalaj"));
console.log(Array.from({name : "jalaj"})); // gives empty array if not worked [].

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3)); //converts to array
