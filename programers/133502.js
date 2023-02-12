function solution(ingredient) {
    let answer = 0;
    let hambuger_map = [];
    let reverse = false;
    
    ingredient.forEach((ingred,ingerd_index) => {
        hambuger_map.push(ingred);
        // if(hambuger_map.length == 5){
        //     hambuger_map.shift();
        // }
        if(hambuger_map.length >= 4){
            hambuger_check = hambuger_map;
            hambuger_ingred = hambuger_check.slice(-4);
            
            if(hambuger_ingred.join('') == '1231'){
                hambuger_map.pop();
                hambuger_map.pop();
                hambuger_map.pop();
                hambuger_map.pop();
                // hambuger_map = hambuger_map.splice(-4);
                answer++;
                // reverse=true;
                // return false;
            }
        }   
    })
    
    
    
    
        return answer;
    
    
        
    
    
    
    
    
}

console.log(solution(	[1, 2, 1, 2, 3, 1, 3, 1, 2, 3, 1, 2, 3, 1]));
