jQuery(document).ready(function($) {
  $('#btn-know-more').click(function(event) {
    event.preventDefault();
    $('.full-bg').fadeToggle(200);
  });

  $('.btn-cancel').click(function(event) {
    $('.full-bg').fadeToggle(200);
  });


  $('#btn-know-more-2').click(function(event) {
    event.preventDefault();
    $('.full-bg-2').fadeToggle(200);
  });

  $('.btn-cancel-2').click(function(event) {
    $('.full-bg-2').fadeToggle(200);
  });


  // sliding-img-left
  $('#dot-1').click(function(event) {
    $('.slide-img-wrap').addClass('sliding').removeClass('sliding-2').removeClass('sliding-3').removeClass('sliding-left-animation');
  });
  $('#dot-2').click(function(event) {
    $('.slide-img-wrap').addClass('sliding-2').removeClass('sliding').removeClass('sliding-3').removeClass('sliding-left-animation');
  });
  $('#dot-3').click(function(event) {
    $('.slide-img-wrap').addClass('sliding-3').removeClass('sliding').removeClass('sliding-2').removeClass('sliding-left-animation');
  });

  // sliding-img-right
  $('#dot-4').click(function(event) {
    $('.slide-img-wrap').addClass('sliding').removeClass('sliding-2').removeClass('sliding-3').removeClass('sliding-left-animation-2');
  });
  $('#dot-5').click(function(event) {
    $('.slide-img-wrap').addClass('sliding-2').removeClass('sliding').removeClass('sliding-3').removeClass('sliding-left-animation-2');
  });
  $('#dot-6').click(function(event) {
    $('.slide-img-wrap').addClass('sliding-3').removeClass('sliding').removeClass('sliding-2').removeClass('sliding-left-animation-2');
  });


// dot-selected effect
  $('#dot-1').click(function(event) {
    $(this).addClass('dot-selected');
    $('#dot-2').removeClass('dot-selected');
    $('#dot-3').removeClass('dot-selected');
  });
  $('#dot-2').click(function(event) {
    $(this).addClass('dot-selected');
    $('#dot-1').removeClass('dot-selected');
    $('#dot-3').removeClass('dot-selected');
  });
  $('#dot-3').click(function(event) {
    $(this).addClass('dot-selected');
    $('#dot-1').removeClass('dot-selected');
    $('#dot-2').removeClass('dot-selected');
  });

  $('#dot-4').click(function(event) {
    $(this).addClass('dot-selected');
    $('#dot-5').removeClass('dot-selected');
    $('#dot-6').removeClass('dot-selected');
  });
  $('#dot-5').click(function(event) {
    $(this).addClass('dot-selected');
    $('#dot-4').removeClass('dot-selected');
    $('#dot-6').removeClass('dot-selected');
  });
  $('#dot-6').click(function(event) {
    $(this).addClass('dot-selected');
    $('#dot-4').removeClass('dot-selected');
    $('#dot-5').removeClass('dot-selected');
  });


});
