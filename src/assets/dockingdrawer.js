function new_window(){
  $('a[href^="http"]').not('a[href^="'+$(location).attr('hostname')+'"]').attr('target', '_blank');
}

function photo_gallery(){

}

$(document).ready(function(){
  new_window();
  lightbox.option({
    'wrapAround': true,
    'alwaysShowNavOnTouchDevices': true
  });
});
