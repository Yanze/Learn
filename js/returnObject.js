function createDict(keys, values) {
  var dict = {};
  for (var i = 0; i < keys.length; i++) {
    if (values[i] == null) {
      dict[keys[i]] = null;
    } else {
      dict[keys[i]] = values[i];
    }
  }
  return dict;
}


console.log(createDict(['a', 'b', 'c', 'd'], [1, 2, 3]));
