let a = 1;
let b = 1;

let sum = 0;

while(a<=4000000){
    b = a+b;
    a = b-a;

    if(a%2===0){
        sum += a;
    }
}

console.log(sum);