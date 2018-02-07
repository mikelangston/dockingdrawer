function new_window(){
  $('a[href^="http"]').not('a[href^="'+$(location).attr('hostname')+'"]').attr('target', '_blank');
}

function amazon_store(){
  $('a[href="https://www.amazon.com/stores/page/CB80812F-6178-4DEB-8B7C-005E0D8ECF96"]').attr('target', '_blank');
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
  //new_window();
  amazon_store();
  exchange_return();
  lightbox.option({
    'wrapAround': true,
    'alwaysShowNavOnTouchDevices': true
  });
});
