// 1번 지표	라이언형(R), 튜브형(T)
// 2번 지표	콘형(C), 프로도형(F)
// 3번 지표	제이지형(J), 무지형(M)
// 4번 지표	어피치형(A), 네오형(N)
function solution(survey, choices) {
    var answer = '';
    const type_map = {
        'R' : 0,
        'T' : 0,
        'C' : 0,
        'F' : 0,
        'J' : 0,
        'M' : 0,
        'A' : 0,
        'N' : 0,
    };
    const type_index_map = {}
    let index = 0;
    for(key in type_map){
        type_index_map[key] = parseInt(index/2);
        index++;
    }
    
    const result = ['R','C','J','A'];
    survey.forEach((surve, survey_index) => {
        const [ disagree,agree] = surve.split('');
        if(choices[survey_index] <= 3 || choices[survey_index] >= 5 ){
            if(choices[survey_index] <= 3){
                let jumsu = 0;
                
                switch(parseInt(choices[survey_index])){
                    case 1 :
                        jumsu = 3;
                    break;
                    case 2 :
                        jumsu = 2;
                    break;
                    case 3 :
                        jumsu = 1;
                    break;
                    default :
                }
                type_map[disagree] += jumsu;
                // 비동의
            }else if(choices[survey_index] >= 5 ){
                type_map[agree] += choices[survey_index] - 4;
                // 동의
            }
            
            const type_index2 = type_index_map[agree];
            const default_map = ['R','C','J','A'];
            if(type_map[agree] > type_map[disagree]){
                result[type_index2] = agree;
            }else if(type_map[agree] < type_map[disagree]){
                result[type_index2] = disagree;
            }else{
                result[type_index2] = default_map[type_index2];
            }

            
        }
        

    })
    
    return result.join('');
}
const args = [
    //첫번째 단어가 비동의
    ["TR", "RT", "TR"],
	[7, 1, 3]
];

console.log(solution(...args));