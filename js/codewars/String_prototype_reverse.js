//Create reverse function for the String prototype
String.prototype.reverse = function(){
  var res = [];
  for(var i = this.length-1; i >= 0; i--){
    res.push(this[i]);
  }
  return res.join("");
}

//second way
String.prototype.reverse = function(){
  return this.split('').reverse().join('');
}

// "String".reverse(); --> returns "gnirtS"
