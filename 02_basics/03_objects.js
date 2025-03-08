// singleton

// object literals

const mysym = Symbol ("key 1")
const jsUser = {
    name : "reddy" ,
    "full name " : "R. Pawan kumar reddy",
    [mysym] : "mykey1",
    age : 18 ,
    location : "bhubaneswar" , 
    email : "pawanreddy3005@gmail.com" ,
    isloggedIn : false , 
    lastloggedInday : ["monday" , "tuesday"]

}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name "])
// console.log(jsUser[mysym])

jsUser.email = "pawanreddy@chatgpt.com"  // this is the way to change the value 
// console.log(jsUser.email) 

// Object.freeze(jsUser) // this is used to freeze. no values can be changed after this.
jsUser.email = "pawanreddy@idli.com"
// console.log(jsUser["email"])

jsUser.greetings = function(){
    console.log("hello my name is reddy ");
}

console.log(jsUser.greetings())
console.log(jsUser.greetings)

jsUser.greetings2 = function(){
    console.log(`hello my name is reddy , ${this.name}` );
}
console.log(jsUser.greetings2())


