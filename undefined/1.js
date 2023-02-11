const fs = require('fs');

const dev = `1`;
const input = (process.platform === 'linux' ?
                fs.readFileSync("/dev/stdin").toString().trim() :
                `${dev}`).split("\n");



const pi = '1415926535re846';
function solution(input){
    console.log(input);
}

solution(input[0]);