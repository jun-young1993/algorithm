
const fs = require('fs');

const dev = `5
30
33
35
20
12`;
const input = (process.platform === 'linux' ?
                fs.readFileSync("/dev/stdin").toString().trim() :
                `${dev}`).split("\n");


input.shift();

input.sort((a,b)=>b-a)

let maxWeight = 0;
for(let index=0; index<input.length; index++){
    const ropeCount = index+1;
    const currentMaxWeight = Number(input[index]) * ropeCount;
    if(maxWeight < currentMaxWeight){
        maxWeight = currentMaxWeight;
    }
    
}

console.log(maxWeight)