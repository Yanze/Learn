$(function() {
  //transform
  // var logo = $('#logo');
  // $({
  //   t: 0
  // }).animate({
  //   t: 200
  // }, {
  //   duration: 3000,
  //   step: function(now) {
  //     logo.css('transform', 'translate(0px, ' + now + 'px)');
  //   }
  // });

 //scale
 var logo = $('#logo');
  $({t : 0}).animate(
    {
      t:1
    },
    {
      duration: 3000,
      step: function(now){
        logo.css('transform', 'scale(' + now + ', ' + now + ')');
      }
    });
});
