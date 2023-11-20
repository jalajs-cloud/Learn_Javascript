const tinderUser = new Object() //singleton object
const tinderUser1 = {} //non singleton object


tinderUser1.id = "123abc";
tinderUser1.name = "jalaj";
tinderUser1.isLoggedIn = false;

console.log(tinderUser);
console.log(tinderUser1);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname: {
            firstname : "jalaj",
            lastname : "singh"
        }

    }
}
// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a",2: "b"};
const obj2 = {3: "a",4:"b"};
const obj3 = {obj1,obj2};
console.log(obj3);
const obj4 = Object.assign({},obj1,obj2);
console.log(obj4);
const obj5 = {...obj1,...obj2};
console.log(obj5);

const users = [
    {
        id : 1,
        email : "j@gmail.com"
    },
    {
        id : 2,
        email : "h@gmail.com"
    }
]
users[1].email
console.log(tinderUser1);
console.log(Object.keys(tinderUser1));
console.log(Object.values(tinderUser1));
console.log(Object.entries(tinderUser1));

console.log(tinderUser1.hasOwnProperty('isLoggedIn'));






