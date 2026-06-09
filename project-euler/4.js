function isPalindrom (n) {
    var n_str = n.toString();

    if( n_str === n_str.split('').reverse().join('')) return true;
    return false;
}

let a = 999;
let b = 100;
let max = a*b;
for(var i = a;i>=b;i--){
    for(var j = i;j>=b;j--){
        if(i*j < max) break;
        if(isPalindrom(i*j)){
            b = j;
            max = i*j;
            break;
        }
    }
}

console.log(max);