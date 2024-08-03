// literal and by constructor
// when literal not signton
// Object.create

// const myArr = ['j','o']
// console.log(myArr[0],myArr[1]);
// object literals

const mySym = Symbol("key1")


const jsUser = {
  name: "jhon",
  [mySym]:"key1",
  "full name": "john deo",
  age: 20,
  location: "jaipur",
  email: "john@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["mon", "sat"],
};

// console.log(jsUser.email);
// square notation
// console.log(jsUser["full name"]);
// console.log(jsUser['name']);

// console.log(jsUser[mySym]);



// Object.freeze(jsUser)
jsUser.email = "john@twitter.com"
// console.log(jsUser.email);

// console.log(jsUser);





jsUser.greeting = function(){
    console.log("hello js user");
}
jsUser.greeting2 = function(){
    console.log(`hello js user you email is ${this.email}`);
}

// console.log(jsUser.greeting());
// console.log(jsUser.greeting2());