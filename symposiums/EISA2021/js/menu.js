var txt;
var url;
var jump = 0;
var ptr = 0;
var ptr2 = 0;

$('#site-menu').on('show.bs.collapse', function (e) {
  txt = $("#toggle").text();
  $("#toggle").text("MENU");
})

$('#site-menu').on('hide.bs.collapse', function (e) {
  if(jump!=0){ $("#toggle").text("MENU - " + jump); }
  else { $("#toggle").text(txt); }
})

$('.jump-page').click(function() {
  if($(window).width() < 768) {
    jump = $(this).text();
    if(ptr==0){ $('#toggle').click(); }
    else{ ptr = 0; $("#toggle").text("MENU - Authors"); }
    return true;
  }
});

$('.ptr').click(function() {
  ptr = 1;
  $('#li-author').click();
  $('html,body').animate({scrollTop: $("#sp").offset().top}, 600);
  return false;
});

$('.ptr2').click(function() {
  ptr = 1;
  $('#li-author').click();
  $('html,body').animate({scrollTop: $("#ai").offset().top}, 600);
  return false;
});

$('.ptr3').click(function() {
  ptr = 1;
  $('#li-author').click();
  $('html,body').animate({scrollTop: $("#id").offset().top}, 600);
  return false;
});