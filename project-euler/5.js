function lcm2(a,b){
    var gcd = 1;
    for(let i=1;i<=a;i++){
        if(a%i===0 && b%i===0){
            gcd = i;
        }
    }

    return (a*b)/gcd;
}

function lcm_one_to_n(n) {
    if(n===1) return 1;

    return lcm2(n, lcm_one_to_n(n-1));
}

console.log(lcm_one_to_n(20));