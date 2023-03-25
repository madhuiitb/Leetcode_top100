/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentSum = 0;
    let maxSum = nums[0];
   // console.log(maxSum)
    let lenArr = nums.length;
    for(let i=0;i<lenArr;i++){
        let tempSum = currentSum + nums[i];
        if(nums[i] > tempSum){
            currentSum = nums[i];
        }else{
            currentSum = tempSum;
        }
       // console.log(currentSum)
        if(currentSum > maxSum){
            maxSum=currentSum;
        }
    }
    return maxSum;
};
