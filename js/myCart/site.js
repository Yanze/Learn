$(document).ready(function(){

  //color picker
  var dropdownMenu = $("#dropdownMenu");
  var color;
  var allShowArearValue;
  $("#colorChoosen li a").on("click", function(){
    color = $(this).text();
    dropdownMenu.text(color);
  });

  var price;
  var qty;
  $("#add").on("click", function(event){
    event.preventDefault();

    if(!$("#myForm").valid()){
      return;
    }

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
    if(isNaN(price)){
      confirm("Please enter a valid number.");
      $("#showPrice").html(null);
    }
    else{
      $("#showPrice").html("$" + price);
    }

    //quantity
    qty = $("#qty").val();
    if(isNaN(qty)){
      confirm("Please enter a valid number.");
      $("#showQty").text(null);
    }
    else{
      $("#showQty").text(qty);
    }

    //show total price
    var total = price * qty;
    $("#totalPrice").html("$" + total);

  });

  //delete
  $("#close").on("click", function(){
    $("#showArea").remove();

  });

  //form validate
  $("#myForm").validate();

});

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
  else if(color == "Black color"){
    $("#showArea label").css("color","black");
  }
};







