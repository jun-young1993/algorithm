// 개인정보 수집 유효기간

function getDays(date){
    const [year, month, day] = date.split('.');
    return ((parseInt(year) * 12) * 28) + (parseInt(month) * 28) + parseInt(day);
    
}

/**
 * 
 * @param {string} today YYYY.MM.DD
 * @param {string[]} terms 
 * @param {string[]} privacies 
 * @returns 
 */
function solution(today, terms, privacies) {
    const result = [];
    const termMap = {};
    
    terms.forEach((term) => {
        const [type, expireMonth] = term.split(' ');
        termMap[type] = expireMonth;
    });

    
    privacies.forEach((privace, index) => {
        const [createDate, type] = privace.split(' ');
        console.log('==========================================');
        console.log('INDEX => ',index+1);
        console.log('today',getDays(today));
        console.log('created date', getDays(createDate))    
        console.log('month day',parseInt(termMap[type] * 28))   ;
        console.log('result',(getDays(today) - (getDays(createDate) + parseInt(termMap[type] * 28))));
        console.log('==========================================');
        if(((getDays(createDate) + parseInt(termMap[type] * 28)) - getDays(today)) <= 0) result.push(index+1);
        
    });

    return result;
}

// const args = [
//     "2022.05.19",
//     ["A 6", "B 12", "C 3"],
//     ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
// ]
// [1, 3]

const args = [
    "2020.01.01",
    ["Z 3", "D 5"],
    ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]
];
// [1,4,5]

console.log(solution(...args));