let n=0;
let a = 0;
let b = 1;
let count = 1;

while(n<1000){
    b = a+b;
    a = b-a;
    if(b.toString().length>n){
        n++;
        console.log({n:n, b:b});
    }
    count++;
}

console.log(count);