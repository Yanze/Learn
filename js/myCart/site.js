var input = {
  name:"",
  img_url:"",
  price:"0",
  description:"",
  color:"",
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
  }//end of the function change color
}; // end of object input


$(document).ready(function(){

  $("#add").click(function(event){
    event.preventDefault();

    if(!$("#myForm").valid()){
      return;
    }

    $("#showZone").slideDown();
    $("#FinalTotalPrice").slideDown();
    //show name
    input.name = $("#name").val();

    //upload image
    input.img_url = $("#imgLink").val();
    if(input.img_url == ""){
        input.img_url = "https://s-media-cache-ak0.pinimg.com/236x/d0/c3/8b/d0c38b6db20fbbe5dd8a1b757a17133b.jpg";
    }

    //description
    input.description = $("#description").val();

    //text color
    input.color = $('#colorChoosen').val();
    input.changeColor(input.color);

    var changeTextColor = $("#dropdownMenu").text();
    var colorResult = input.changeColor(changeTextColor);

    //price
    input.price = $("#price").val();

    //quantity
    input.qty = $("#qty").val();

    //show total price
    input.total = input.price * input.qty;


    //clear select option fields
    $('#colorChoosen option').prop('selected', function() {
      return this.defaultSelected;
    });
    addDiv(input);

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


  //add dynamically div
  function addDiv(monObj){
    var zone = $("#showZone");
    zone.append("<div id='showArea' class='container col-lg-8'><div class='col-lg-4'><img id='img' src='"+ input.img_url +"'></div><form class='form-horizonta'><div class='form-group'><label for='name'>Name:</label><label id= 'showName'>"+ input.name +"</label></div><div class='form-group'><label>Description:</label><label id= 'showName'>"+ input.description +"</label></div><div class='form-group'><label>Price:</label><label id= 'showPrice'>"+ input.price +"<label></div><div class='form-group'><label>Qty:</label><label id='showQty'>"+ input.qty +"</label></div><div class='form-group total'><label>Total price:</label><label id='totalPrice'>"+ input.total +"</label></div><form></div>");
  }

}); // end of the document ready function










