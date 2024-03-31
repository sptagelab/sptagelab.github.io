var bg = jQuery(".site-background");
jQuery(window).resize(resizeBackground);
function resizeBackground() {
  if(navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry)/)) {
    bg.height(screen.height);
  }
}
resizeBackground();

/*
var bg = jQuery(".site-background");
jQuery(window).resize(resizeBackground);
function resizeBackground() {
  if(navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry)/)) {
    bg.height(screen.height);
    $("#text1").text("window.innerHeight: " + window.innerHeight);
    $("#text2").text("jQuery(window).height(): " + jQuery(window).height());
    $("#text3").text("$(window).height(): " + $(window).height());
    $("#text4").text("screen.height: " + screen.height);
  }
}
resizeBackground();
*/