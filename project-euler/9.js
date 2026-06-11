var a = 3;
var b = 4;
var s = 1000;

var stop = false;

for(b = 4; b<s/2; b++){
    for(a = 3; a<b; a++){
        var c = s - a - b;
        if(a*a + b*b === c*c) {
            stop = true
            break;
        }
    }

    if(stop) break;
}

console.log(a*b*(s-a-b));