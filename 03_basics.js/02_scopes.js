let a = 300 // outside the curly brasces it is called global scope 

if (true) {
    let a = 10;
    const b = 20;
    c = 30;
    // console.log("inner : ", a);
    
    
}  // inside the curly braces it is block scope 
// console.log(a);
// console.log(b);

function one (){
    const username = "reddy"

    function two(){
        const website = "google"
        console.log(username);
        
    }
    // console.log(website);
    two()
}
// one()

// +++++++++++++++++++++++++++++ intresting +++++++++++++++++++++++++++++

function addone (num){
    return num + 1
}
console.log( addone(5));



console.log( addtwo(5));
const addtwo = function addtwo (num){
    return num + 2
}  // this cant be executed it will give error

