const fs = require('fs');

const dev = `180`;
const input = (process.platform === 'linux' ?
                fs.readFileSync("/dev/stdin").toString().trim() :
                `${dev}`).split("\n");


let second = input[0];

const buttons = [300,60,10];
let countes = [];
for(let index = 0; index<buttons.length; index++){
	const currentButton = buttons[index];
	countes[index] = parseInt(second/currentButton);
	second = second%currentButton;
	if(index+1 == buttons.length){
		if(second != 0){
			countes = [-1];
		}
	}
}
console.log(countes.join(' '));
