const fs = require('fs');

const dev = `55-50+40`;
const input = (process.platform === 'linux' ?
                fs.readFileSync("/dev/stdin").toString().trim() :
                `${dev}`).split("\n");

const tmp = input[0].split('-');
const result = [];
for(let index = 0; index < tmp.length; index++){
    const tmp2 = tmp[index].split('+');
    let tmp3 = 0;
    if(tmp2.length == 1){
        result.push(Number(tmp2[0]));
       
    }else{
        for(let index2 =0; index2<tmp2.length; index2++){

            tmp3 += Number(tmp2[index2]);
        }
        result.push(tmp3)
        
    }
    
    if(result.length == 2){
        result[0] = result[0] - result[1]
        result.pop()
    }
    
}
console.log(result[0]);



// let allPlus = 0;
// let allMinus = 0;
// for(let minusIndex = 0; minusIndex < plus.length; minusIndex++){
//     const number = plus[minusIndex].split('-')
//     if(number.length == 1){
//         allPlus +=  Number(number[0]);
//         console.log('plus',Number(number[0]))
//     }else{
//         allPlus += Number(number[0]);
//         console.log('plus',Number(number[0]))
//         for(let index = 1; index<number.length; index++){
//             allMinus += Number(number[index])
//             console.log('mius',Number(number[index]))
//         }
//     }
// }

// if(allMinus >= allPlus){
//     console.log(allMinus - allPlus)
// }else{
//     console.log(allPlus - allMinus)
// }
// // let total = 0;
// str.forEach((minus)=>{
//     const minuses = minus.split('-')
//     minuses
// })a

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

