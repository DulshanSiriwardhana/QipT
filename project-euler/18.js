const fs = require('node:fs');

const text = fs.readFileSync('18.txt', 'utf8').split('\n');

function getMaxPathSum(array){
    if(array.length===1) return parseInt(array[0]);
    if(array.length===2) return parseInt(array[0])+Math.max(parseInt(array[1].split(' ')[0]),parseInt(array[1].split(' ')[1]));

    var most_recent = array[array.length-2].split(' ');
    var last = array[array.length-1].split(' ');

    var updated = [];

    for(var i=0;i<array.length-1;i++){
        updated[i] = (parseInt(most_recent[i])+Math.max(parseInt(last[i]), parseInt(last[i+1]))).toString();
    }

    array[array.length-2] = updated.join(' ');

    var new_array = array.slice(0,array.length-1);

    console.log(new_array);

    return getMaxPathSum(new_array);
}

console.log(getMaxPathSum(text));