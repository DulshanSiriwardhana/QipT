function getNumericalSum(n){
    if(n.length===1) return parseInt(n);

    return parseInt(n[0]) + getNumericalSum(n.substring(1));
}

function multiply2(n, add=0){
    if(n.length===1) return (2*parseInt(n) + add).toString();

    var reminder = (parseInt(n[n.length-1])*2 + add)%10;
    var cost = (parseInt(n[n.length-1])*2 + add - reminder)/10;

    return multiply2(n.substring(0, n.length-1), cost) + reminder;
}

function pow2(n){
    if(n==1) return "2";

    return multiply2(pow2(n-1));
}

console.log(getNumericalSum(pow2(1000)));