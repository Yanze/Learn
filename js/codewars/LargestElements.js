function largest(n,xs){
  return xs.sort(function(a, b) {return a - b;}).slice(xs.length-n);
}

console.log(largest(7,[9,1,50,22,3,13,2,63,5]));//[3, 5, 9, 13, 22, 50, 63]
console.log(largest(2,[9,1,50,22,3,13,2,63,5]));// [50, 63]
