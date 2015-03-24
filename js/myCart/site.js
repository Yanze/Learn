var input = {
  name:"",
  img_url:"",
  price:0,
  description:"",
  qty:0,
  total:0,
  finalTotal:0,
   //add dynamically div
  addDiv: function(){
   var zone = $("#showZone");
   zone.append("<div id='showArea' class='container col-lg-8'><div class='col-lg-4'><img id='img' src='"+ this.img_url +"'></div><form id='form'><div class='form-group'><label for='name'>Name:</label><label id= 'showName'>"+ this.name +"</label></div><div class='form-group'><label>Description:</label><label id= 'showName'>"+ this.description +"</label></div><div class='form-group'><label>Price:</label><label id= 'showPrice'>"+ this.price +"<label></div><div class='form-group'><label>Qty:</label><label id='showQty'>"+ this.qty +"</label></div><div class='form-group total'><label>Total price:</label><label id='totalPrice'>"+ this.total +"</label></div><form></div>");
 }// end of the function add div
}; // end of object input


$(document).ready(function(){

  $("#add").click(function(event){
    event.preventDefault();

    if(!$("#myForm").valid()){
      return;
    }

    $("#showZone").slideDown();
    $("#FinalPrice").slideDown();
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
    var color = $('#colorChoosen').val();
    changeColor(color);


    //price
    input.price = $("#price").val();

    //quantity
    input.qty = $("#qty").val();

    //show total price
    input.total = input.price * input.qty;

    //final total price
    input.finalTotal += input.total;
    $("#FinalTotalPrice").html("<labe>"+ input.finalTotal +"</label>");

    //clear select option fields
    $('#colorChoosen option').prop('selected', function() {
      return this.defaultSelected;
    });

    //function add div
    input.addDiv();

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
  function changeColor(color){
    if(color == "Red color"){
      $("#form label").css("color","red");
    }
    else if(color == "Orange color"){
      $("#form label").css("color","orange");
    }
    else if(color == "Pink color"){
      $("#form label").css("color","pink");
    }
    else if(color == "Default"){
      $("#form label").css("color","black");
    }
  };//end of the function change color









