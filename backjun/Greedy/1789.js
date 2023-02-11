const fs = require('fs');

const dev = `1`;
const input = (process.platform === 'linux' ?
                fs.readFileSync("/dev/stdin").toString().trim() :
                `${dev}`).split("\n");


let sumNumber = Number(input[0]);
let startNumber = 1;
let count = 1;

while(true){
	
	const number = (count *(count + 1)) / 2
	
	if(number > sumNumber){
		console.log(count-1);
		break;
	};
	
	count++;	
}

