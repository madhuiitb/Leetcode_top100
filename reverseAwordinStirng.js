/**
151. Reverse Words in a given String

Given an input string s, reverse the order of the words.

 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let newStrArray = s.split(' ');
    let len = newStrArray.length;
    let result = "";
  // console.log(newStrArray)
    for(let i=0;i<len;i++) {
      //  console.log(newStrArray[i])
       // result.unshift(newStrArray[i]);
       if(newStrArray[i].length > 0 ) {
           if(result.length > 0) {
            result = newStrArray[i] +" "+ result;
       }
       else{
           result = newStrArray[i] + result;
       } 
       }
    }

   return result
};
