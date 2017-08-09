$(document).ready(function(){

  $(".menu-link").click(function(elm) {
    elm.preventDefault();
    $("header nav").toggle();

    var icon = $(".menu-link img");
    var iconSrc = icon.attr("src");
    var menu = "assets/img/icon-menu.svg";
    var close = "assets/img/icon-close.svg";

    if (iconSrc === menu) {
      icon.attr("src", close);
    } else {
      icon.attr("src", menu);
    }

  });

});
