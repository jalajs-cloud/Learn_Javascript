// for of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,5,4];

for (const num of arr) {
    console.log(num);
    
}

const greetings = "Hello world";

for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

//Maps

const map = new Map();
map.set('IN',"India");
map.set('USA','United States of America');
map.set('FR','FRANCE');
//console.log(map);

for (const [key,value] of map) {
    console.log(key , ':-', value);   
}

const myObject = {
    'Game1' : 'NFS',
    'Game2' : 'GTA'
}

for (const [key,value] of myObject) {
    console.log(key , ':-', value);    
}
// objects - for in loop
// arrays - for of loop
