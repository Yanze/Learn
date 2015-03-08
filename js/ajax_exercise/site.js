$(function(){
  $("#github_search").click(function(e){
    e.preventDefault();
    var username = $("#github_username").val();

    var github_url = "https://api.github.com/users/" + username;

  $.ajax(github_url)
  .done(function(info){
    $("#notFound").slideUp();
    $("#found").slideDown();
    $("#github_image").attr("src", info.avatar_url);
    $("#github_name").text(info.name);
    $("#github_location").text(info.location);
    if(info.company === null){
      $("#company").hide();
      $("#github_company").text("");
    }else{
      $("#company").show();
      $("#github_company").text(info.company);
    }

    //fetch names of the user's project

    var github_url_repos = "https://api.github.com/users/" + username + "/repos";

    $.ajax(github_url_repos)
    .done(function(x){
      var list = [];
      for(i = 0; i < x.length; i++){
        if(x[i].description !== ""){
          list.push(x[i].description);
        }
      }
      var res = list.join(",");
      $("#projects").text(res);


      console.log(x);
      console.log(res);
    })
    .fail(function(y){


    });

  })
  .fail(function(err){
    $("#found").slideUp();
    $("#notFound").slideDown();
  });

 });

});
