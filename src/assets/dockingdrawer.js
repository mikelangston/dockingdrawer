function new_window(){
  $('a[href^="http"]').not('a[href^="'+$(location).attr('hostname')+'"]').attr('target', '_blank');
}

function exchange_return(){
  $('.exchange-btn').click(function(e){
    e.preventDefault();
    $('.overlay.exchange-content').show();
  });
  $('.return-btn').click(function(e){
    e.preventDefault();
    $('.overlay.return-content').show();
  });
  $('.close').click(function(){
    $('.overlay').hide();
  });
}


$(document).ready(function(){
  new_window();
  exchange_return();
  lightbox.option({
    'wrapAround': true,
    'alwaysShowNavOnTouchDevices': true
  });
});
