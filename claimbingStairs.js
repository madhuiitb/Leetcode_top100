/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    //console.log(cache)
    // return cache.n;
    let cache = {};
    let num = n; 
    const subProblem = function(num){
      //  let cache = {};
        console.log(cache)
        if( num in cache){
            return cache[num];
        }
        else{
            if(num <= 2){
                cache[num] = num;
                return cache[num];
            }
            else{
                cache[num] = subProblem(num-1) + subProblem(num-2);
                return cache[num];
            }
        }
    }
    return subProblem(n);
};

    
