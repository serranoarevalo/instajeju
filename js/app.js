$(document).ready(function() {
  var $heart = $(".heart"),
    $ellipsis = $(".fa-ellipsis-h"),
    $overlay = $(".overlay");
  $heart.click(function() {
    $(this).toggleClass("fa-heart-o heart-pumping fa-heart");
  });

  $ellipsis.click(function() {
    $overlay.fadeIn(1000);
  });

  //fadeOut
});
