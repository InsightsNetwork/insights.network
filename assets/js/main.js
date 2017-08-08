$(document).ready(function(){

  $(".menu-link").click(function(elm) {
    elm.preventDefault();
    $("header nav").toggle();
  });

});
