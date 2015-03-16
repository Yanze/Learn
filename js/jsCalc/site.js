$(document).ready(function(){

  $(".numbers").on("click", function(){
    var pressedValue = $(this).text();
    var inputValue = $("#input").val();
    var res = applyRules(inputValue,pressedValue);
    $("#input").val(res);
  });

  $("#AC").on("click", function(){
    $("#input").val("0")
  });


});

function applyRules(inputValue,pressedValue){
 if(inputValue == "0"){
  inputValue = "";
}
var res;
if(inputValue.indexOf(".") != -1 && pressedValue == "."){
  res = inputValue;
}
else{
  res = inputValue + pressedValue;
}
  return res;
};
