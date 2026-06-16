let nums = [0,1,2,3,4,5,6,7,8,9];
let answer = 0;

let reminder = 1000000-1;
let n = 10;
let prev = 0;

function factorial(n){
    if(n===1 || n===0) return 1;

    return n*factorial(n-1);
}

while(n>0){
    var _factorial_ = factorial(n-1);
    var p = parseInt((reminder-prev)/_factorial_);
    answer=10*answer + nums[p];
    nums = nums.slice(0,p).concat(nums.slice(p+1,));
    prev += p*_factorial_;
    n--;
}

console.log(answer);