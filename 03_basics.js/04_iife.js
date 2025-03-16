// IMMEDIATELY INVOKED FUCTION EXPRESSION IN JS

(function reddy(){
    // this is called name iife 
    console.log(`DB CONNECTED`);
    
})
();  // if we are writing two iife we ahve to use semicolon otherwise it will give error 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
} ) ("reddy")

