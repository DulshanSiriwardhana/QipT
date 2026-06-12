function properDivisors(n, k=parseInt(Math.sqrt(n))){
    if(k===1) return 1;

    return n%k===0? n/k + k+ properDivisors(n, k-1) : properDivisors(n, k-1);
}

var sum = 0;

for(var i=2;i<10000;i++){
    var div = properDivisors(i);
    var div_div = properDivisors(div)

    if(div_div===i && div!=i) sum+=i;
}

console.log(sum);