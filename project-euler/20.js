function multiply(k=1,x, add=0){
    if(x.length===1) return (k* parseInt(x) + add).toString();

    var reminder = (k* parseInt(x[x.length-1]) + add) % 10;
    var cont = (k* parseInt(x[x.length-1]) + add -reminder) /10;

    return multiply(k,x.substring(0,x.length-1) , cont) + reminder.toString();
}

function digitSum(n){
    if(n.length===1) return parseInt(n);

    return parseInt(n[n.length-1])+ digitSum(n.substring(0, n.length-1));
}

function factorial(n){
    if(n===1) return '1';

    return multiply(n, factorial(n-1));
}

console.log(digitSum(factorial(100)));