$(document).ready(function() {
  $("p").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
  });

  $("p").click(function() {
    $(".word").slideToggle();
  });
});
