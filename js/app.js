$(function() {
  const $menu = $(".navigation");
  $(window).scroll(function() {
    if($(this).scrollTop() > $('header .logo').height()) {
      $menu.addClass('fix');
    } else {
      $menu.removeClass('fix');
    }
  });

  $('.project').on('click', function() {
    const id = $(this).data('project');
    if ($('.project-info.active').length > 0) {
      $('.project-info.active').fadeOut(function() {
        $('.project-info.active').toggleClass('active');
        $('#' + id).fadeIn().toggleClass('active');
        $("html,body").animate({ scrollTop: $('#' + id).offset().top-$('.navigation').height() }, 1000);
      });
    } else {
      $('#' + id).fadeIn().toggleClass('active');
      $("html,body").animate({ scrollTop: $('#' + id).offset().top-$('.navigation').height() }, 1000);
    }
  });
});
