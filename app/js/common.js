$(function() {

	var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
  });
  $("#my-menu").mmenu({
         "offCanvas": {
            "position": "right"
         },
         "extensions": [
            "theme-dark",
   
            "fx-listitems-slide"
         ]
      });

});
