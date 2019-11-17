$("document").ready(function() {
  $("p").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
  });

  $("p").click(function() {
    $(".word").slideToggle();
  });

  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
  });

  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
  });
});
