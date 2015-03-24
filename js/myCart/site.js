var input = {
  name:"",
  img_url:"",
  price:"0",
  description:"",
  color:"",
  qty:"0",
  total:"0",
  finalTotal:"",
  changeColor: function(){
    if(this.color == "Red color"){
      $("#form label").css("color","red");
    }
    else if(this.color == "Orange color"){
      $("#form label").css("color","orange");
    }
    else if(this.color == "Pink color"){
      $("#form label").css("color","pink");
    }
    else if(this.color == "Default"){
      $("#form label").css("color","black");
    }
  },//end of the function change color
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
    input.changeColor();


    //price
    input.price = $("#price").val();

    //quantity
    input.qty = $("#qty").val();

    //show total price
    input.total = input.price * input.qty;

    //final total price
    input.finalTotal += Number(input.total);
    $("#FinalTotalPrice").text(input.finalTotal);


    //clear select option fields
    $('#colorChoosen option').prop('selected', function() {
      return this.defaultSelected;
    });
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
      },
    }
  });


}); // end of the document ready function










