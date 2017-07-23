$(document).ready(function() {
  var $heart = $(".heart");
  $heart.click(function() {
    if ($(this).hasClass("heart-pumping")) {
      $(this).removeClass("heart-pumping");
    } else {
      $(this).addClass("heart-pumping");
    }
  });
});
