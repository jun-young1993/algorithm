
const fs = require('fs');

const dev = `1`;
const input = (process.platform === 'linux' ?
                fs.readFileSync("/dev/stdin").toString().trim() :
                `${dev}`).split("\n");


const change = [500,100,50,10,5,1];

let price = 1000 - parseInt(input[0]);
let count = 0 ;

for(let index = 0; index<change.length; index++){
    const currentChange = change[index]

    if(price < currentChange){
        continue;
    }else{
        
        count += parseInt(price/currentChange);
        price = parseInt(price%currentChange);




        if(price == 0){
            break;
        }
    }
}

console.log(count)

