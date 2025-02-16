const name = "pawanreddy"
const repocount = 50
// console.log(name +  repocount + " value"
console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gamename = new String('pawanreddy')
// console.log(gamename[1]);
// console.log(gamename.length);
// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(3));
// console.log(gamename.indexOf('y'));
const newstring = gamename.substring(0, 3)
// console.log(newstring);
// const anotherstring  = gamename.slice(2,5) //it will start from index 2 and it will go upto 5-1 = 4 character
// console.log(anotherstring);
const anotherstring = gamename.slice(-8, 5) // it will start from last to 8 index which is w and for 5 it will start from p as 0 and go upto 5-1 string which is n so the output will be wan 
console.log(anotherstring)

const newstringone = "   reddy   "
console.log(newstringone)
console.log(newstringone.trim())

const url = "https://pawanreddy%20.com"
console.log(url.replace('%20','-'))
console.log(url.includes('idli'))

