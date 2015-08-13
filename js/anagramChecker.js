function anagram(a, b) {
  if (a.length != b.length) {
    return false;
  }
  var counter = {};
  for (var i = 0; i < a.length; i++) {
    var cur1 = a[i];
    for (var i = 0; i < b.length; i++) {
      var cur2 = b[i];
      if (counter[cur1]) {
        counter[cur1]++;
      }
      if (counter[cur2]) {
        counter[cur1]--;
      }
    }
  }

  for (key in counter) {
    if (counter[key] != 0) {
      return false;
    }
  }
  return true;
}

var a = "eyee";
var b = "eeye";
console.log(anagram(a, b));

//sencond way
function anagram2(a, b) {
    if (a.length != b.length) {
        return false;
    }
       return a.split("").sort().join("") === b.split("").sort().join("");
}
