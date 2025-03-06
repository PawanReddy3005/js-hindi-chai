const marvel_heros  = ["thor" , "ironaman" , "wanda"]
const dc_heros  = ["superman" , "batman" , "flash"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const another_array = [1 , 2 , 3 , 4, [5 , 6 , 7] ,  [8 , 9 , 5, [5 , 6, 7]]]
const new_array = another_array.flat(Infinity)
// console.log(new_array);

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1 , score2 , score3));