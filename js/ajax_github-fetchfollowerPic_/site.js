$(document).ready(function(){
  $("#search").on("click","#submit", function(e){
    e.preventDefault();
    var userName = $("#inputUserName").val();
    var address = "https://api.github.com/users/"+ userName + "/followers";

    $.ajax( address,{
      success: function(response){
        $("#notFound").hide();
        $("#found").slideDown();
        $('.photos').empty();
        for(i = 0; i < response.length; i++){
           $('.photos').append("<img src='"+response[i].avatar_url+"'>");
        }

      },

      error: function(){
        $("#found").hide();
        $("#notFound").slideDown();
      }
    });
  });
});
