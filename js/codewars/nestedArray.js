function diagonalSum(matrix) {
  return matrix.reduce(function(initial, curre, i){
    return initial + curre[i];
  },0);
}


// another way
function diagonalSum(matrix) {
  var res = [];
  for (var i = 0; i < matrix.length; i++) {
    var current = matrix[i];
    for (var j = 0; j < current.length; j++) {
      res.push(current[j + i]);
      break;
    }
  }
  return res.reduce(function (initial, curr) {
    return initial + curr
  });
}
