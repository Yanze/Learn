  var first;
  var second;
  var needClear = false;
  var operators;


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


    $(".operator").on("click",function(){
     operators = $(this).text();
     first = $("#input").val();
     needClear = true;
   });

    $("#equal").on("click",function(){
      var res;
     second = $("#input").val();
       //operators
       if(operators == "+"){
         res = Number(first) + Number(second);
       }
       else if(operators == "-"){
         res = Number(first) - Number(second);
       }
       else if(operators == "*"){
         res = Number(first) * Number(second);
       }
       else if(operators == "/"){
         res = Number(first) / Number(second);
       }
       $("#input").val(res);
     });


  });

  function applyRules(inputValue,pressedValue){
    //reset input value
    if(inputValue == "0"){
      inputValue = "";
    }

  // use only once dot
  var res;
  if(inputValue.indexOf(".") != -1 && pressedValue == "."){
    res = inputValue;
  }
  else{
    res = inputValue + pressedValue;
  }


  if(needClear){
    needClear = false;
    res = pressedValue;
  }

  return res;

};











