function collatz(n, depth=0){
    if(n===1) return depth+1;
    return n%2===0 ? collatz(n/2, depth+1) : collatz(3*n+1, depth+1);
}

var start = 1;
var max_chain = 1;

for(var i=1;i<1000000;i++){
    var chain = collatz(i);
    if(max_chain < chain) {
        max_chain = chain;
        start = i;
    }
}

console.log(start);