function solution(id_list, report, kill_count) {
    const answer = new Array(id_list.length);
    answer.fill(0);
    const report_list = {};
    id_list.forEach(id => {
        report_list[id] = [];
    });
    report.forEach((report_ids) => {
        const [source_id, target_id]  = report_ids.split(' ');
        if(report_list[target_id].indexOf(source_id) == -1){
            report_list[target_id].push(source_id);
        }
    })
    for(target_id in report_list){
        const user_ids = report_list[target_id];
        if(user_ids.length >= kill_count)  {
            user_ids.forEach((source_id) => {
                answer[id_list.indexOf(source_id)] = answer[id_list.indexOf(source_id)] + 1;
            })
          }
    }
    
    // report_list.forEach((user_ids ) =>  {
    //     if(user_ids.length >= kill_count){
    //         user_ids
    //     }
    // })
    return answer;
}

const args = [
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
]
// [2, 1, 1, 0]

console.log(solution(...args));