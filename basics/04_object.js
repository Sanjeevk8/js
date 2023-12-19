// const tinderUser = new Object(); //singleton
const tinderUser = {}; // non-singleton

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{        
            firstname: "sanjeev",
            lastname: "yadav"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}
const obj4 = {5: "c", 6:"d"}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course ={
    coursename: "js",
    price: "999",
    courseInstructor: "hitesh"
}
// console.log(course.courseInstructor);
const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);