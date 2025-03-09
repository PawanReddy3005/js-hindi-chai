// const tinderUser = new object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "reddy"
tinderUser.isloggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "pawanreddy@gmail.com",
    fullname : {
        userFullname : {
            userfirstname : "pawan",
            userlastname : "reddy"
        }

    }
}
// console.log(regularUser.fullname.userFullname.userfirstname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({} ,obj1 , obj2)
const obj3 = {...obj1, ...obj2} // this syntax will be used further 
// console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));





