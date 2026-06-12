function numberOfDivisors(n){
    let depth = 0;
    let k = n;
    let div = 1;
    for(var i=2;i<=k;i++){
        if(k%i===0){
            k=k/i;
            i--;
            depth++;
        }
        else {
            div *=(depth+1);
            depth=0;
        }
    }

    return div * (depth+1);
}

let n=1;

while(true){
    if(numberOfDivisors((n*(n+1))/2)>500){
        console.log((n*(n+1))/2);
        break;
    }
    n++;
}