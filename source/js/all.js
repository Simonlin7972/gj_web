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

  //smooth scroll to top
  $back_to_top.on('click', function(event) {
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0,
    }, scroll_top_duration);
  });

});

// faq page
$(function() {
  $('#qaContent ul').addClass('accordionPart').find('li div:nth-child(1)').addClass('qa_title').hover(function() {
    $(this).addClass('qa_title_on');
  }, function() {
    $(this).removeClass('qa_title_on');
  }).click(function() {

    var $qa_content = $(this).next('div.qa_content');
    if (!$qa_content.is(':visible')) {
      $('#qaContent ul li div.qa_content:visible').slideUp();
    }
    $qa_content.slideToggle();
  }).siblings().addClass('qa_content').hide();
});

$(function() {
  $("#tabs").tabs();
});
