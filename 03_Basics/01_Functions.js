function sayMyName(){
    console.log("J");
    console.log("A");
    console.log("L");
    console.log("A");
    console.log("J");
}

sayMyName();

// function addTwoNumbers(number1,number2){  //number1 and number2 are parameters
//     console.log(number1 + number2);
// }

// const result = addTwoNumbers(2,3); // 2 and 3 are arguments
// console.log("Result: ",result);

function addTwoNumbers(number1,number2){  //number1 and number2 are parameters
//     let result = number1 + number2;
//     return result;
//     console.log("Jalaj"); //anything after return will not execute
    return number1 + number2;
}

const result = addTwoNumbers(4,5);
// console.log("Result: ",result); 

function logInUserMessage(username = "sam")  //if you want to avoid undefined then username will be atleast sam not undefined
{
    if(!username){   // !username is same as username === undefined
        console.log("Please enter a username");
        return;

    }
    return `${username} just logged in`;
}

console.log(logInUserMessage("jalaj"));
console.log(logInUserMessage()); //when you pass nothing to function but it requires some argument then it will return undefined