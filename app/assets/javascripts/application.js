// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require_tree .

jQuery(document).foundation();

$(document).ready(function () {
  $('#modal').html('<a class="close-reveal-modal">&#215;</a>');
  $(this).on('close.fndtn.reveal', '[data-reveal]', function () {
    var modal = $(this);
    modal.html('<a class="close-reveal-modal">&#215;</a>');
  });
  $('a').click(function() {
    var elementClicked = $(this).attr("href");
    $('.top-bar').find('.active').removeClass('active');
    $(this).parent('li').addClass('active');
    var destination = $(elementClicked).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination-60}, 500 );
    return false;
  });
});
