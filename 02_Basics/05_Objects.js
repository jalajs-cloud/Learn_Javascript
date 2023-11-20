//destructuring of objects
const course = {
    coursename : "js in hindi",
    price: "999",
    courseInstructor : "jalaj"
}

// course.courseInstructor

const {courseInstructor: instructor} = course
console.log(courseInstructor);
console.log(instructor);

// const navbar = ({company}) => {  //desctructuring

// }

// navbar(company = "jalaj")


// json format
// {
//     "name" : "jalaj",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }

[
    {},
    {},
    {}
]