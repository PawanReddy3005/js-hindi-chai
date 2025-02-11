const accountId = 12345
let accountmail = "reddy@gmail.com"
var accountpassword  = "reddy1234"
accountcity = "jaipur"
let accountstate;

accountmail = "red@gmail.com"
accountpassword = "12345"
accountcity = "delhi"

// account = 2 its not allowed

/*
not to use var because of issue in block scope and functional scope 
*/
console.log(accountId)
console.table([accountId , accountmail , accountpassword , accountcity , accountstate])