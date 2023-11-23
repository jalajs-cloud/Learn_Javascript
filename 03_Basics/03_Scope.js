// var c = 300;  //global scope
// let a = 300;
// if(true)
// {  //block scope
// let a = 10;
// const b = 20;
// var c = 30;
// console.log("Inner: ",a);
// }


// //scope is different in browser console log and in vs code terminal using node

// console.log(a);
// //console.log(b);
// console.log(c);


function one(){
    const username = "jalaj";

    function two(){
        const website = "youtube";
        console.log(username);
    }
  //  console.log(website);

    two();
}

one();

if(true)
{
    const username = "jalaj";
    if(username === "jalaj")
    {
        const website = "jalaj";
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);

// +++++++++++++interesting++++++++++++++++


console.log(addOne(5));

function addOne(num){
    return num + 1;
}



addTwo(5);
const addTwo = function(num)
{
    return num + 2;
}
