/** 
 * 숫자 자리수 구하기
 * @param {} number 
 * @returns 
 */
function getNumberSize(number) {
	let count = 1;
	while (number >= 10) {
		number = number / 10
		count++;
	}
	return count;
}

getNumberSize(12345678);



function getNumberByIndex(number, index) {
	let x = 1;

	for (let i = 1; i < index; i++) {
		x = x * 10;
	}

	return parseInt(number / x) % 10;
}


getNumberByIndex(12345678, 1)


function getNumberByIndex2(number, index) {

}
