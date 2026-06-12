// function routing(x,y){
//     if(x===0 || y===0) return 1;
    
//     return routing(x-1, y) + routing(x,y-1);
// }

// console.log(routing(20,20));

// combinatorics 20 rights 20 downs
// 40!/((20!)^2)

var routes = 1;
var k = 2;

for(var i=21;i<=40;i++){
    routes*=(i%2===0 ? 2: i);
    if((routes%k===0) && (k <=10)){
        routes/=k;
        k++;
    }
}

console.log(routes);