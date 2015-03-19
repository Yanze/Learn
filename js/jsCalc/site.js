  var calculator = {
    first:"0",
    second:"0",
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


        if(this.needClear){
          this.needClear = false;
          res = pressedValue;
        }

        return res;
      },
      factorial: function(inputData){
        var res = 1;
        for(i = inputData; i > 0 ; i--){
          res *= i;
        }
        return res;
      },
      calculate: function(operator){
        if(this.operators == "+"){
         res = Number(this.first) + Number(this.second);
       }
       else if(this.operators == "-"){
         res = Number(this.first) - Number(this.second);
       }
       else if(this.operators == "*"){
         res = Number(this.first) * Number(this.second);
       }
       else if(this.operators == "/"){
         res = Number(this.first) / Number(this.second);
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

    $("#factorial").on("click", function(){
      calculator.first = $("#input").val();
      var res = calculator.factorial(calculator.first);
      $("#input").val(res);
    });


    $("#equal").on("click",function(){
      calculator.second = $("#input").val();
      var finalAnswer = calculator.calculate();
      $("#input").val(res);
    });

  });












