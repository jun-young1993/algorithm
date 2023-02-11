const fs = require('fs');

const dev = `3
1 1 3
10 30 20`;
const input = (process.platform === 'linux' ?
                fs.readFileSync("/dev/stdin").toString().trim() :
                `${dev}`).split("\n");

const length = input[0];
const first = input[1].split(" ");
const second = input[2].split(" ");

solution(length, first, second);


function solution(length, first, second) {
    // bubble sorting
    let minValue = 0;
    for(let i=0; i < length; i++) {
        
   
        let swap;
        let swap2;
        for(let j = 0; j < length - 1 - i; j++){
            let current = Number(first[j])
            let next = Number(first[j+1])
            if(current > next){
                swap = current
                first[j] = next
                first[j+1] = swap
            }

            let current2 = Number(second[j])
            let next2 = Number(second[j+1])
            
            if(current2 < next2){
                swap2 = current2
                second[j] = next2
                second[j+1] = swap2
            }

            if((length - 1 - i ) == j+1){
                minValue += Number(first[j+1]) * Number(second[j+1])
                
            }
            
        }
        
    
    }
    minValue += Number(first[0]) * Number(second[0])
    
    console.log(minValue)
    
    // for(let index=0; index < length; index++) {
    //     console.log(first[index],second[index])
    // }
}
