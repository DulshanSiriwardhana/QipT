function isPrime(n){
    if(n===2) return true;
    else if(n<2) return false;

    else if(n%2===0) return false;

    for(var i=3; i<=Math.sqrt(n); i+=2){
        if(n%i===0) return false;
    }

    return true;
}

var sum = 2;

for(var i=3;i<2000000;i++){
    if(isPrime(i)) sum+=i;
}

// function belowPrimeSum(n){
//     if(n<2) return 0;
//     if(n===3) return 5;
//     if(isPrime(n)) return n + belowPrimeSum(n-2);

//     return belowPrimeSum(n-1);
// }

// var border = 2000000;

console.log(sum);