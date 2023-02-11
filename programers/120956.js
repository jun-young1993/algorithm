



/**
 * 
 * @param {string[]} babbling - 1<= babbling.length <= 100, 1<= babbling[i] <= 5
 * @returns 
 */
function solution(babbling) {
    let wordCount = 0;

    const words = ["aya", "ye", "woo", "ma"];
    const textSperector = ' ';
    babbling.forEach((babble) => {
        let babbleText = babble;
        words.forEach((word) => {
            
            const splitWord = babbleText.split(word).map((word) => {
                return word.trim();
            })
            
            if(splitWord.length >= 2){
                
                babbleText = splitWord.join(textSperector);
                
                if(babbleText == textSperector){
                    
                    wordCount++;
                    
                }
            }
        })
        
    })
    
    return wordCount;
}




// const test = ["aya", "yee", "u", "maa", "wyeoo"];
const test = ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"];


console.log(solution(test));