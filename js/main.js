$(document).ready(function() {
  $("#appear").click(function() {
    $("img").show();
  });
  $("#disappear").click(function() {
    $("img").hide();
  });
  $("#toggle").click(function() {
    if ($("img").css("display") === "inline") {
      $("img").css("display", "none")
    } else {
      $("img").css("display", "inline");
    }
  });
  $("#fade").click(function() {
    $("img").toggleClass("fade");
  });

  $("img").hover(function(){
    $(this).attr("src", "img/wonka.jpg");
    }, function(){
    $(this).attr("src", "img/nedstark.jpg");
  });

  $("#append").click(function() {
    $("ul").append("<li><b> New Item </b></li>")
  });

  $("#final").click(function() {
    $("body").append("<div id='overlay'></div>");
  })
})
