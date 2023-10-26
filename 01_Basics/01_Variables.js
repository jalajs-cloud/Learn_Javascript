const accountId = 144553;
let accountEmail = "jalajsingh231@gmail.com";
var accountPassword = "12345";
accountCity = "New_Delhi"

let accountState; //result in undefined

//accountId = 2;


accountEmail = "jalajsingh345@gmail.com"

accountPassword = "14567"

accountCity = "Bengaluru"

console.log(accountId);


/*
Prefer not to use var because of issue in
 block scope and functional scope
*/

console.table([accountEmail,accountId,accountPassword,accountCity,accountState]);