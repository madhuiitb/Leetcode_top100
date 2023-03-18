/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    
    let cache = {};
    const newFib = function(n){
        if(n in cache){
            return cache[n];
        }
        else{
            if(n<2){
                cache[n]=n;
                return cache[n];
            }
            else{
                cache[n] = newFib(n-1)+newFib(n-2);
                return cache[n];
            }
        }
    }

    return newFib(n);
};
