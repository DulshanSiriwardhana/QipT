let factor = 1;

function isPrime(n) {
    if(n===2) return true;
    else if(n<2) return false;

    let max = Math.sqrt(n);

    for(var i = 2; i< max; i++){
        if(n%i===0){
            return false;
        }
        else {
            continue;
        }
    }

    return true;
}

let n = 600851475143;
let min = 1;

for(let i = 1; i< n; i++){
    if(isPrime(i)){
        if(n%i===0){
            min = i;
            n = n/i;
            i-1;
        }
    }
    if(n<=min) break;
}

console.log(Math.max(min, n));