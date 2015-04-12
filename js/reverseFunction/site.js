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



//reverse string
function reverse(string){
    var res = string.split("").reverse().join("");
    return res;
};
var x = reverse("hello");

//reverse string 2
function reverse2(str){
  var res="";
  for(i = str.length-1; i >= 0; i--){
      res += str[i];
  }
 return res;
}

});
