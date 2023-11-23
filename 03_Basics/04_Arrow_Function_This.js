const user = {
    username : "jalaj",
    price : 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage();
user.username="sam";
user.welcomeMessage();

console.log(this);  // gives {} empty object

//global object is window object in browser console

function chai(){
    let username = "jalaj";
    console.log(this.username);  //this keyword works in object not in particular function gives undefined
}

chai();


const chai1 = function() {
    let username = "jalaj";
    console.log(this.username);  
}

chai1();


//Arrow Functions
const chai2 = () => {
    let username = "jalaj";
    console.log(this.username);  
}

chai2();

const addTwoui = (num1,num2) => {
    return num1 + num2;
}


console.log(addTwoui(2,3));

//implicit(main maan leta hun) return , explicit is using return keyword
const addTwou = (num1,num2) =>  (num1 + num2);
//{} curly braces use to return likhna jarurai hai implicit main nhi
const addTwouj = (num1,num2) =>  ({username : "jalaj"}); //() parenthesis wrap up is a must in function
