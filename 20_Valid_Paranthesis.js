/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const len = s.length;
    if(len===0){
        return true;
    }
    if(len===1){
        return false
    }
    if(len>1){
        const stackArray = [];
        for(let i=0; i<len;i++){
            let tempStart = s[i];
            if(tempStart==='(' || tempStart==='{' || tempStart==='['){
                stackArray.push(tempStart);
            }else{
               // console.log("1-> "+stackArray)
                let tempClose = stackArray.pop();
               // console.log("2-> "+stackArray)
                if(tempStart===')' && tempClose !=='('){
                    return false;
                }
                else if(tempStart===']' && tempClose !=='['){
                   // console.log("False")
                    return false;
                }
                else if(tempStart==='}' && tempClose !=='{'){
                    return false;
                }
            }
        }
       // console.log(stackArray.length);
        if(stackArray.length===0){
            return true;
        }
        else{
            return false;
        }
    }
};
