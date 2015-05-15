function keysAndValues(data){
  var letter = [];
  var num = [];
  for(var key in data){
    letter.push(key);
    num.push(data[key]);
  }
  return [letter,num];
}
console.log(keysAndValues({a: 1, b: 2, c: 3})); // [["a","b","c"],[1,2,3]]
