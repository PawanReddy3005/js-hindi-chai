function SayMyName(){
    console.log("R");
    console.log("E");
    console.log("D");
    console.log("D");
    console.log("Y");    
}

// SayMyName();

// function addTwoNumbers(number1 , number2 ){ // when we take anything while making a function that value is called parameter.
//     console.log(number1 + number2);
// }
// addTwoNumbers(3,5) // when we call a function and there we pass a value that value is called arguments.

// const result = addTwoNumbers(3,5)
// console.log("result is : " , result);

function addTwoNumbers(number1 , number2 ){ 
    // let result  = number1 + number2;
    // return result    // method number 1 how to write a fucntion 
    // console.log("reddy"); // this line will not be printed because after return statement no line will get executed.

    // return number1 + number2 ; // method 2
    
}
const result = addTwoNumbers(3,5)
// console.log("result is : " , result);

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("please enter a valid name");
        

//     }
//     return `${username} just logged in `
// }
// console.log(loginUserMessage("Reddy"));
// console.log(loginUserMessage()); // if we sont pass any value it will give undefined 

// function calculateCartPrice(...num1){ // ... it is called rest operator it allows to print all the values that we pass and returns in a array format
//     return num1;

//  }
// console.log(calculateCartPrice(2 , 3 , 4 , 5 , 6 ,7));

const user ={
    username : "reddy",
    price : 170
}
function handleObejct(anyobject) {
    // console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);    
}
handleObejct(user)

const mynewArray = [100, 200, 300, 400, 500]
function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(mynewArray));


