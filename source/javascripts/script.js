$(document).ready(function() {

  $("nav ul li a").hover(function() {
    $(this).parent().addClass("border-hover", 1000, "easeOutBounce");
  });

  $("nav ul li a").mouseleave(function() {
    $(this).parent().removeClass("border-hover");
  });

  $("nav ul li a, #home a").click(function() {
    var anchor;
    anchor = $(this).attr("href").replace("#", "");
    $("html, body").animate({
      scrollTop: $("#" + anchor).offset().top - $('.nav').height()
    }, 800, "swing");
  });

  $(".skills").click(function() {
    $('.loader-fill').each(function( index ) {
      var fullWidth = $('.loader-full').width() + 25;
      var fillWidth = fullWidth * (parseInt($(this).text()) / 100);
      $(this).animate({width: fillWidth+"px"}, 1500);
    });
  });

  console.log($('.timeline').width());
  // $('.pointer_left').css("left", $('.timeline').width()/2 + "px");
  // $('.pointer_right').css("right", $('.timeline').width()/2 + "px");
});


