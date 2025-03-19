// if 
const isUserLoggedIn = true
const Temperature  = 41

// if (Temperature === 59) {
//     console.log("less than 50");
    
// } 
// else{
//     console.log("tempertaure is greater than 50 ")
// }


// const score  = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`user power : ${power}`);
    
// }


// const balance = 1000
 // if (balance > 500) console.log("test");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance< 750) {
//     console.log("less than 750");    
// } else if (balance < 900 ){
//     console.log("less than 750");
       
// }else {
//     console.log("less than 1200");
    
// }


const userLoggedIn = true
const debitcard = true
const loggedInfromGoogle = false
const loggedInfromGmail = true

if (userLoggedIn && debitcard) {  // && - and both the statements must be true 
    console.log("you are allowed for shopping");

}
if (loggedInfromGmail || loggedInfromGoogle) { // either one of the staements should eb true 
    console.log("you are logged in");
    
}