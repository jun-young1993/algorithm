const fs = require('fs');

const dev = `55-50+40`;
const input = (process.platform === 'linux' ?
                fs.readFileSync("/dev/stdin").toString().trim() :
                `${dev}`).split("\n");

const str = input[0].split('+');
let total = 0;
// str.forEach((minus)=>{
//     const minuses = minus.split('-')
//     minuses
// })a
console.log(55-90)
// for(let index = 0; index<str.length; index++){
//     let minus = str[index].split('-')
  
//         // console.log(tmp)
  
//     let sortMinus = minus.sort((a,b)=> a - b)
//     let tmp = sortMinus[0];
//     // console.log(minus)
//     for(let index2=1; index2<minus.length; index2++){
//         tmp -= Number(minus[index2])
//     }
 
//     total += Number(tmp);¡
// }
// console.log(total)

