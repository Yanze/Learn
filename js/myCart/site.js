var input = {
  price:"0",
  qty:"0",
  total:"0",
  changeColor: function(color){
    if(color == "Red color"){
      $("#showArea label").css("color","red");
    }
    else if(color == "Orange color"){
      $("#showArea label").css("color","orange");
    }
    else if(color == "Pink color"){
      $("#showArea label").css("color","pink");
    }
    else if(color == "Default"){
      $("#showArea label").css("color","black");
    }
  }
};


$(document).ready(function(){

  $("#add").on("click", function(event){
    event.preventDefault();

    if(!$("#myForm").valid()){
      return;
    }

      //text color
      var colorchosed = $('#colorChoosen').val();
      input.changeColor(colorchosed);


      $("#showArea").slideDown();
      $("#FinalTotalPrice").slideDown();
    //show name
    var inputNameValue = $("#name").val();
    $("#showName").text(inputNameValue);
    //upload image
    var img_url = $("#imgLink").val();
    if(img_url !== ""){
      $("#img").attr("src", img_url).show();
    }

    //description
    var description = $("#description").val();
    $("#showDescription").text(description);

    var changeTextColor = $("#dropdownMenu").text();
    var colorResult = input.changeColor(changeTextColor);

    //price
    input.price = $("#price").val();
    $("#showPrice").html("$" + input.price);


    //quantity
    input.qty = $("#qty").val();
    $("#showQty").text(input.qty);


    //show total price
    input.total = input.price * input.qty;
    $("#totalPrice").html("$" + input.total);

    //clear select option fields
    $('#colorChoosen option').prop('selected', function() {
      return this.defaultSelected;
    });


  }); //end of the add on click

   //clear the input fields
   $("#myForm").on("click", "#add", function(){
    $(this).closest("form").find("label, input,textarea").val("");
  });

  //form validate
  $("#myForm").validate({
    rules:{
      price:{
        number: true
      },
      qty:{
        number:true
      }
    }
  });
}); // end of the document ready function










