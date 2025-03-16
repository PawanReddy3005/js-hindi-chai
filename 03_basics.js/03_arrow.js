const user = {
    username : "Reddy",
    price : 500,

    WelcomeMessage : function(){
        // console.log(`${this.username} , welcome to this website`);  // this is used to refer to the current context.
        // console.log(this);
        
        
    }

}
// user.WelcomeMessage()
// user.username = "Pawan"
// user.WelcomeMessage()
// this only works in an object this does not work in a function

// +++++++++++++++++++++++ arrow function +++++++++++++++++++++++++++++++

// const calculate  = (num1 ,num2) => {        // => this is called arrow function 
//     return num1 + num2 
// }

// const calculate  = (num1 ,num2) =>  num1 + num2         // this is called implicit return 
const calculate  = (num1 ,num2) =>  ({username : "reddy"})       // if we are returning an object we have to wrap it with parenthesis and inside it as usal with curly braces as we are returning an object.

console.log(calculate(3,5));
