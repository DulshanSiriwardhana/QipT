function isPrime(n) {
    if(n===2) return true;
    else if(n<2 || n%2===0) return false;

    for(var i=3;i<=Math.sqrt(n);i+=2){
        if(n%i===0) return false;
    }
    
    return true;
}

let n = 0;
let index = 0;

while(true){
    n++;
    if(isPrime(n)) index++;
    if(index===10001) break;
}

console.log(n);