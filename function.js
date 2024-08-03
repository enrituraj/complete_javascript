function sayMyname(){
    console.log("j");
    console.log("o");
    console.log("h");
    console.log("n");

}

// sayMyname()
// parameter
function addTwoNo(num1,num2) {
    return num1 + num2
}
// argument
const res = addTwoNo("3",null)
// console.log(res);


function loginUserMessage(username="sam"){
    // if (username === undefined) {
    //     console.log("please enter username");
    //     return
    // }
    if (!username) {
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("john"));
// console.log(loginUserMessage());

// rest operator

function CalculateCartprice(val1,val2,...num1){
    return num1
}

// console.log(CalculateCartprice(2000,400,500));


const user = {
    username:"history",
    prices:199
}

function handleObject(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
}


// handleObject(user)
// // handleObject({
//     username:"sayMyname",
//     price:44
// })


const myNewArr = [200,400,100,3000]

function handleArr(arr){
    return arr[2]
}
// console.log(handleArr(myNewArr));
console.log(handleArr([1,5,6,45]));