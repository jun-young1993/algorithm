function solution(new_id){

    new_id = new_id.toLowerCase();
    
    // 
    // new_id = new_id.replace(/[]+/g,'');
    const 제거대상_특수문자 = '~!@#$%^&*()=+[{]}:?,<>/</>';
    const 제거대상_특수문자_배열 = 제거대상_특수문자.split('');
    
    // new_id = new_id.replace(/[^\w-_.]+/g,'');
    let stop_word = 0;
    
    const new_ids = new_id.split('');
    
    new_id = new_ids.filter((new_id_word,index) => {
        
        if(제거대상_특수문자_배열.indexOf(new_id_word) != -1){
            
            return false;
        }
        if(new_id_word == '.'){
            stop_word ++;
                 
            if(stop_word >= 2){
                return false;
            }            
        }else{
            stop_word = 0;
        }
        return true;
        
    }).join('');
    
    if(new_id[0] == '.'){
        new_id = new_id.slice(1)
    }
    
    if(new_id[new_id.length-1] == '.'){
        new_id = new_id.slice(0,new_id.length-1)
    }
    
    if(new_id == ''){
        new_id = 'a';
    }
    
    new_id = new_id.slice(0,15)
    
    if(new_id[new_id.length-1] == '.'){
        new_id = new_id.slice(0,new_id.length-1)
    }
    
    if(new_id.length <= 2){
        const last_word = new_id[new_id.length-1];
        while(true){
            if(new_id.length == 3){
                break;
            }
            new_id += last_word;
        }

    }
    
    return new_id;

}
const srt = "z-+.^.";

console.log(solution(srt));