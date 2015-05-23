var capitals = function (word) {
  var indexes = [];
  for(var i = 0 ; i < word.length;i++){
    if(word[i] === word[i].toUpperCase()){
      indexes.push(word.indexOf(word[i]));
    }
  }
  return indexes;
};

console.log(capitals('CodEWaRs')); //[0, 3, 4, 6]
