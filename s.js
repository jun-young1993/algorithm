/**
 * 숫자 자리수 구하기
 * @param {} number 
 * @returns 
 */
 function getNumberSize(number){
    let count =1;
    while(number >= 10){
       number = number/10
       count++;
    }
    return count;
 }
 
 getNumberSize(12345678);
 
 
 /**
  * 1의자리 수 부터 해당 수 가져오기
  * @param {*} number 
  * @param {*} index 
  * @returns 
  */
 function getNumberByIndex(number,index){
    let x = 1;
 
    for(let i=1; i<index; i++){
       x = x*10;
    }
    
    return parseInt(number/x)%10;
 }
 
 
 getNumberByIndex(12345678,1);
 
 /**
  * 역순으로 해당 자리 수 가져오기
  * @param {*} number 
  * @param {*} index 
  */
 function getNumberByIndex2(number,index){
    let count =1;
    let tmpNumber = number;
    while(tmpNumber >= 10){
        tmpNumber = tmpNumber/10
       count++;
    }
    
    let pointer = (count - index);
    let x = 1;
    for(let i=0; i<pointer; i++){
        x = x*10;
     }

     return parseInt(number/x)%10;
 }

 getNumberByIndex2(12345678,7);


 function getCharByIndex(str,index){
     return parseInt(str.charAt(index))
 }

 console.log(getCharByIndex('123456',2));
