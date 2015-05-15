function maskify(cc) {
  var lastFour = cc.slice(-4);
  var res = "";
  for (var i = 0; i < cc.length - 4; i++) {
    res += "#";
  }
  return res + lastFour;
}
console.log(maskify('4556364607935616'));
