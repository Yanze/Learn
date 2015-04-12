var input = {
  name:"",
  img_url:"",
  price:0,
  description:"",
  qty:0,
  total:0,
  finalTotal:0,
   //add dynamically div
   addDiv: function(divId, color){
     var zone = $(divId);
     zone.append("<div style='color:"+ color +";' id='showArea' class='newDiv container col-lg-8'><a class='close'>&times;</a><img id='img' src='"+ this.img_url +"'><label for='name'>Name:</label><label id= 'showName'>"+ this.name +"</label><br><label>Description:</label><label>"+ this.description +"</label><br><label>Price:</label><label>"+ this.price +"</label><br><label>Qty:</label><label>"+ this.qty +"</label><br><label>Total price:</label><label id='totalPrice'>"+ this.total +"</label></div>");
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
    input.addDiv("#showZone", color);

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

  $(document.body).on("click", ".close",function(){
      $(this).closest(".newDiv").remove();
  });



}); // end of the document ready function









