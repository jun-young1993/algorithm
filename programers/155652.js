
function solution(s, skip, index) {
    var answer = '';
    const alphabates = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n",'o','p','q','r','s','t','u','v','w','x','y','z'];
    const skips = skip.split('');
    const skip_alphabates = alphabates.filter((alphabat) => {
        return (skips.indexOf(alphabat) == -1);
    })
    
    return s.split('').map((word) => {
        const word_index = skip_alphabates.indexOf(word);
        let replace_index = index+word_index;
        

        if(replace_index >= skip_alphabates.length){
            replace_index %=  skip_alphabates.length;    
        }


        
        
        return skip_alphabates[replace_index];
    }).join('');
    
    
    
}

const args = ["aukks","wbqd",5];

console.log(solution(...args));