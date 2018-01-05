function new_window(){
  $('a[href^="http"]').not('a[href^="'+$(location).attr('hostname')+'"]').attr('target', '_blank');
}

$(document).ready(function(){
  new_window();
});
