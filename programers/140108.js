function solution(s) {
    let answer = 0;
    
    
    const countMap = [0,0];
    const words = s.split('');
    const queueWords = words;
    
    let firstWord = words[0];
    // console.log(words);
    for(let wordIndex = 0; wordIndex<words.length; wordIndex++){
        const word = words[wordIndex];
        
        if(firstWord == word){
            countMap[0] += 1;
        }else{
            countMap[1] += 1;
        }
        

        // words.shift();
        if(countMap[0] == countMap[1] && (words.length >= wordIndex + 1)){
            answer++;
            firstWord = words[wordIndex+1];
            countMap[0] = 0;
            countMap[1] = 0;
            
            
        }else{
            //  다른경우인데 마지막이면 하나 추가
            if((words.length == wordIndex+1)){
                answer++;
            }
        }
        

    }
    
        return answer;
    
    
}
const s = 
console.log(solution("aaabbaccccabba"));