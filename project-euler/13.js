
const fs = require('node:fs');

var text = fs.readFileSync('13.txt', 'utf8');

text = text.split("\n");

var sum=0;

for(var i=0;i<text.length;i++){
    sum += parseInt(text[i].substring(0,13));
}

console.log(sum.toString().substring(0,10));