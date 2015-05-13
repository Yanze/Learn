function all( arr, fun ){
  for(var i = 0; i < arr.length; i++){
    if(!fun(arr[i])){
      return false;
    }
  }
  return true;
}

// 2nd way

function all( arr, fun ){
  return arr.every(fun);
}
console.log(all([1,2,3,4,5], function(v){return v<9}));
console.log(all([1,2,3,4,5], function(v){return v>9}));

