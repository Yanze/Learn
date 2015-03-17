  var calculator = {
    first:"",
    second:"",
    needClear: false,
    operators:"",
    applyRules:function(inputValue,pressedValue){
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


        if(calculator.needClear){
          calculator.needClear = false;
          res = pressedValue;
        }

        return res;

      }

    };

    $(document).ready(function(){

      $(".numbers").on("click", function(){
        var pressedValue = $(this).text();
        var inputValue = $("#input").val();
        var res = calculator.applyRules(inputValue,pressedValue);
        $("#input").val(res);
      });

      $("#AC").on("click", function(){
        $("#input").val("0")
      });


      $(".operator").on("click",function(){
       calculator.operators = $(this).text();
       calculator.first = $("#input").val();
       calculator.needClear = true;
     });

      $("#equal").on("click",function(){
        var res;
        calculator.second = $("#input").val();
       //operators
       if(calculator.operators == "+"){
         res = Number(calculator.first) + Number(calculator.second);
       }
       else if(calculator.operators == "-"){
         res = Number(calculator.first) - Number(calculator.second);
       }
       else if(calculator.operators == "*"){
         res = Number(calculator.first) * Number(calculator.second);
       }
       else if(calculator.operators == "/"){
         res = Number(calculator.first) / Number(calculator.second);
       }
       $("#input").val(res);
     });


    });












