// singleton object
// const tinderUser = {}
const tinderUser = new Object();
tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email:"some@gmial.com",
    fullnames:{
        user_fullname:{
            fristname:"john",
            lastname:"deo"
        }
    }
}
// ? option chaining
// console.log(regularUser.fullname?.user_fullname.fristname);

const obj1 = {
    1:"abc",
    2:"sdf"
}
const obj2 = {
    3:"abc",
    4:"sdf"
}
const obj4 = {
    5:"abc",
    6:"sdf"
}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2,...obj4}

// console.log(obj3);

const users = [
    {
        id:1,
        email:"j@gmail.com",
    },
    {
        id:2,
        email:"jo@gmail.com",
    },
    {
        id:3,
        email:"john@gmail.com",
    },
]

// users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course = {
    courseName:"js",
    price:1000,
    instructor:"john"
}
// console.log(course.instructor);

const { instructor:courseInstor } = course
// console.log(courseInstor);


// const Navbar = ({company}) =>{
// }
// Navbar(company = "logo")

// {
//     "name":"john",
//     "couseName": "js",
//     "price": 1000
// }

// [
//     {
//         id:1,
//         email:"j@gmail.com",
//     },
//     {
//         id:2,
//         email:"jo@gmail.com",
//     },
//     {
//         id:3,
//         email:"john@gmail.com",
//     },
// ]

