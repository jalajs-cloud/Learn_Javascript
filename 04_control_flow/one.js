// if
const isUserLoggedIn = true;

if(2 === "2"){
    console.log("executed");

}
const temperature = 60;
if(temperature < 50)
{
    console.log("less than 50");
}
else
{
    console.log("not less than 50");
}

//< , > , <= , == , !=

const score = 200;
if(score > 100)
{
    const power = "fly"
    console.log(`User power : ${power}`);
}

const balance = 1000

// if(balance > 500) console.log("test"); //implicit scope
// can alse do if(balance > 500) console.log("test") , console.log("heloo"); //not good type

if(balance < 500)
{
    console.log("less than 500");
}
else if(balance < 750)
{
    console.log("less than 750");
}
else if(balance < 900){
    console.log("less than 750");
}

const userloggedin = true;
const debitcard = true;
const loggedinfromgoogle = false;
const loggedinfromemail = true;

if(userloggedin && debitcard){
    console.log("Allow to buy course");
}

if(loggedinfromemail || loggedinfromgoogle)
{
    console.log("User logged in");
}
