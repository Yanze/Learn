$(document).ready(function(){

  var price;
  var qty;
  $("#add").on("click", function(event){
    event.preventDefault();

    if(!$("#myForm").valid()){
      return;
    }

      //text color
    var colorchosed = $('#colorChoosen').val();
    changeColor(colorchosed);


    $("#showArea").slideDown();
    $("#FinalTotalPrice").slideDown();
    //show name
    var inputNameValue = $("#name").val();
    $("#showName").text(inputNameValue);
    //upload image
    var img_url = $("#imgLink").val();
    $("#uploadedPic").attr("src", img_url).show();
    //description
    var description = $("#description").val();
    $("#showDescription").text(description);

    var changeTextColor = $("#dropdownMenu").text();
    var colorResult = changeColor(changeTextColor);

    //price
    price = $("#price").val();
    $("#showPrice").html("$" + price);


    //quantity
    qty = $("#qty").val();
    $("#showQty").text(qty);


    //show total price
    var total = price * qty;
    $("#totalPrice").html("$" + total);

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

}); // end of the ready function

function changeColor(color){

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
};







