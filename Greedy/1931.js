const fs = require('fs');

const dev = `11
1 4
3 5
0 6
5 7
3 8
5 9
6 10
8 11
8 12
2 13
12 14`;
const input = (process.platform === 'linux' ?
                fs.readFileSync("/dev/stdin").toString().trim() :
                `${dev}`).split("\n");

solution(input)


function solution(input){
  

    const total = Number(input.shift());
    const schedule = input.map((numString) => {
        return numString.split(' ').map((num) => {
            return Number(num)
        })
    }).sort((a,b) => {
        return a[1] - b[1] || a[0] - b[0];
    })

    let count = 0;
    let currentEnd = 0;
    schedule.forEach(([start ,end]) => {
        if(start < currentEnd){
            return;
        }

        count ++ ;
        currentEnd = end
    })
    console.log(count)
    // .sort((a,b) => {
    //     console.log(a)
    //     return a[1] - b[1] || a[0] - b[0];
    // });
    

    return;
    for(let index=1; index <= total; index++){
        const currentTime = input[index].split(" ");
        let first = parseInt(currentTime[0]);
        let last = parseInt(currentTime[1]);
        let tmpMaxCount = 0;
        // console.log(`start ${first} ~ ${last}`)
        for(let checkIndex = 1; checkIndex <= total; checkIndex ++){
            if(index == checkIndex){
                continue;
            }
            const checkCurrentTime = input[checkIndex].split(" ");
            const checkFirst = parseInt(checkCurrentTime[0]);
            const checkLast = parseInt(checkCurrentTime[1]);
            // console.log(`${checkFirst} ~ ${checkLast}`)
                // 1시 ~ 4시 라면 
                // 회의 일정 3~5시
                // console.log(`(${last} < ${checkFirst}) && (${last} < ${checkLast})`)
            if((last < checkFirst) && (last < checkLast)){
                last = checkLast
                tmpMaxCount += 1;
                // console.log(`change ${first} ~ ${last}`)
                continue;
            }

            if((first > checkFirst) && (first > checkLast)){
                first = checkFirst
                tmpMaxCount += 1;
                // console.log(`change ${first} ~ ${last}`)
                continue;
            }

            
        }
        // console.log(tmpMaxCount)
        if(maxCount < tmpMaxCount) maxCount = tmpMaxCount
        // console.log(maxCount)
        // break;
    }

    console.log(maxCount+1)
}