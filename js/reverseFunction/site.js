$(document).ready(function(){


function reverseArray(monArray){
  return monArray.reverse();
};
console.log(reverseArray(["a", "b", "c"]));

function reverseArrayInPlace(arrayValue){
    return arrayValue.reverse();
}


var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

});
