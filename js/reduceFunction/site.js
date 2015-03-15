
var sum = function(element){
    var total = element.reduce(function(a,b){
    return a+b;
    });
    return total;
}

var list = [1,2,3];
console.log(sum(list));
