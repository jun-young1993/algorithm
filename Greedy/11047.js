
const fs = require('fs');

const dev = `10 4200
1
5
10
50
100
500
1000
5000
10000
50000`;
const input = (process.platform === 'linux' ?
                fs.readFileSync("/dev/stdin").toString().trim() :
                `${dev}`).split("\n");




function solution(input){
    const count = parseInt(input[0].split(" ")[0]);
    let total = parseInt(input[0].split(" ")[1]);
    let totalCoinCount = 0;

    for(let index = count; index >= 1; index--){
        // 가장 근처 값 찾기
        const currentCoinValue = input[index];
        if(currentCoinValue <= total){
            
            totalCoinCount += parseInt(total/currentCoinValue);
            
            total = total%currentCoinValue;
            
            if(total == 0){
                break;
            }
        }
    }
    
    return totalCoinCount;
}

console.log(solution(input))
