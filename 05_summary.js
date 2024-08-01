// primitive or non-primitive
// callByValue and callByRef

// primitive or callby value type 
// 7type 

/**
 * 
 * string
 * number
 * boolean
 * null
 * undefined
 * symbol
 * bigint
 * 
 */

// to master javascript just master in 
// object 
// web browser event


// reference type call by ref

/**
 * 
 * array
 * object
 * function
 * 
 */

// javascript is dynamic typed

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined
const id = Symbol('145')
const anotherId = Symbol('145')
// console.log(id==anotherId);

const bigNumber = 45464879n
// console.log(typeof bigNumber);



const hero = ['nagraj','shaktiman',"doga"]
const obj = {
    name:"ritu",
    age: 14
}

const myfun = function(){
    console.log("hello world!");
}

// myfun()

// console.log(typeof hero);



// stack and heap

// primitive use stack  -copy

// non_primitive use heap - ref

let myYoutubename = "jhon"

let anotherName = myYoutubename
anotherName = "ritu"

// console.log(anotherName,myYoutubename);



let userOne = {
    email:"user@gmail.com",
    upi:"user@ybl"
}
let userTwo = userOne

userOne.upi = "user@axl"

console.log(userTwo);
