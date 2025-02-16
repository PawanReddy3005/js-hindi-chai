const myarrays = [1,2,3,4,5]
const myheros = ["ironman" , "superman"]

const myarray2 = new Array(1,2,3,4,5)
// console.log(myarray2[1]);

// array methods

// myarray2.push(6)
// myarray2.pop()
// console.log(myarray2);

// myarray2.unshift(9)
// myarray2.shift()

// console.log(myarray2.includes(7));
// const newarray = myarray2.join()
// console.log(newarray);
// console.log(myarray2);

// slice and splice 
console.log("A" , myarray2);
const myn2 = myarray2.slice(1,3)

console.log(myn2);
console.log("B" , myarray2);

const myn3 = myarray2.splice(1,3)  // it manipulates the original aaray but slice doesnot
console.log("C" , myarray2);
console.log(myn3);




