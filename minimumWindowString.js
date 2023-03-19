/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let hashArray = new Array(256);
  for(let i=0;i<256;i++){
    hashArray[i] = 0;
  }

  let count = 0;
  for(let i=0;i<t.length;i++){
   // console.log("pat-> "+t[i]+"\n car-> "+t[i].charCodeAt(0));
   // console.log("hash -> "+hashArray[t[i].charCodeAt(0)]);
    if(hashArray[t[i].charCodeAt(0)]===0){
        count++;
    }
    hashArray[t[i].charCodeAt(0)]++;
   // console.log("count -> "+count);
   //  console.log("hash inc -> "+hashArray[t[i].charCodeAt(0)])
  }

  let j=0;
  let i=0;
  let result = Number.MAX_VALUE;
  let start_index = 0;
  while(j<s.length){
   // console.log("char-> "+s[j]);
  //  console.log("char count-> "+hashArray[s[j].charCodeAt(0)]);
    hashArray[s[j].charCodeAt(0)]--;
    if(hashArray[s[j].charCodeAt(0)]===0){
      count--;
   //   console.log("Count inside-> "+count);
    }
  //  console.log("count -> "+count);
    if(count===0){
      while(count===0){
        if(result > j-i+1){
          result = Math.min(result, j-i+1);
          start_index = i;
        }

        hashArray[s[j].charCodeAt(0)]++;
        if(hashArray[s[j].charCodeAt(0)] > 0){
          count++;
        }
        i++;
      }
    }
    j++;
  }
  if(result !== Number.MAX_VALUE){
   // console.log("start-> "+start_index+"result->"+result+"char at result-> "+s[result])
    let resStr = s.slice(start_index,result);
  //  console.log("slice-> "+resStr);
    return resStr;
   // return s.join(" ").substring(start_index, start_index + result);
  }
  else{
    return "";
  }  
};
