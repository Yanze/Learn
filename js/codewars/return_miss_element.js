//find missing element from 1 to 9 in an array;
function getMissingElement(superImportantArray){
 return superImportantArray.reduce(function(sum,value){return sum - value},45);
}
console.log([0,5,1,3,2,9,7,6,4]);
console.log([1,2,3,4,5,6,7,8,9]);
