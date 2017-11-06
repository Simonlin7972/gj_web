jQuery(document).ready(function($) {
  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 200,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 900,
    //grab the "back to top" link
    $back_to_top = $('.cd-top');

  //hide or show the "back to top" link
  $(window).scroll(function() {
    ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if ($(this).scrollTop() > offset_opacity) {
      $back_to_top.addClass('cd-fade-out');
    }
  });

  // slider popup
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


  //smooth scroll to top
  $back_to_top.on('click', function(event) {
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0,
    }, scroll_top_duration);
  });
});

// fadeIn effect

$(function() {
  $(window).scroll(function() {

    $('.fadeInBlock').each(function(i) {

      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
      bottom_of_window = bottom_of_window + 200;

      if (bottom_of_window > bottom_of_object) {

        $(this).addClass('push-up');
      }
    });

  });
});


$(function() {
  $(window).scroll(function() {
    $('.fadeInDelay').each(function(i) {

      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
      bottom_of_window = bottom_of_window + 200;

      if (bottom_of_window > bottom_of_object) {

        $(this).addClass('push-up-delay');
      }
    });

  });
});

// faq page
$(function(){

  $('#qaContent ul').addClass('accordionPart').find('li div:nth-child(1)').addClass('qa_title').hover(function(){
    $(this).addClass('qa_title_on');
  }, function(){
    $(this).removeClass('qa_title_on');
  }).click(function(){

    var $qa_content = $(this).next('div.qa_content');
    if(!$qa_content.is(':visible')){
      $('#qaContent ul li div.qa_content:visible').slideUp();
    }
    $qa_content.slideToggle();
  }).siblings().addClass('qa_content').hide();
});

$( function() {
  $( "#tabs" ).tabs();
} );
