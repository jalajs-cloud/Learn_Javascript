function calculateCartPrice(...num1){ //... rest operator is used to get unknown how many arguments
    return num1;

}

function calculateCartPrice1(val1,val2,...num2){ //val1 will take 289 , val2 take 499 and num2 will take rest
    return num2;
}
console.log(calculateCartPrice1(289,499,700,1999,134,1234));

console.log(calculateCartPrice(200,400,500));

const user = {
    username: "jalaj",
    price: "199"
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user);

handleObject({
    username: "sam",
    price: "399"
})

const myNewArray = [200,400,500,100];
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));