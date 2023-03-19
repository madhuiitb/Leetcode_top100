/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let cache = {};
    let ele = [];
    if(nums.length === 1){
        return nums
    }
    for(let i=0; i<nums.length;i++){
        console.log(nums[i]);
        let temp = nums[i];
        if( temp in cache){
            cache[temp]++;
        }
        else{
            cache[temp]=0;
            ele.push(temp);
        }
        // if(nums[i] in cache){
        //     cache[nums[i]]++;
        // }
        // else{
        //     cache[nums[i]]=0;
        // }
    }
    let res = Number.MIN_VALUE;
    let resValue = 0;
    for(let i=0; i<ele.length;i++){
        let temp = cache[ele[i]];
        if(temp>res){
            res = temp;
            resValue = ele[i];
        }
      //  console.log("temp-> "+temp)
    }
  //  const {ele.0:firstObj, ele[1]:secondObj} = cache;
  //  console.log(cache);
    return resValue;  
};
