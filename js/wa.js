(function($) {
  "use strict";

  /* Loading */
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    loading: true,
    loadingParentElement: 'html',
    loadingClass: 'animsition-loading-1',
    loadingInner: '<div class="cp-spinner cp-meter"></div>',
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: ['animation-duration', '-webkit-animation-duration'],
    overlay: false,
    overlayClass: 'animsition-overlay-slide',
    overlayParentElement: 'html',
    transition: function(url) {
      window.location.href = url;
    }
  });

  /* Back to Top Scroll */
  var windowH = $(window).height() / 2;

  $(window).on('scroll', function() {
    if ($(this).scrollTop() > windowH) {
      $("#myBtn").css('display', 'flex');
    } else {
      $("#myBtn").css('display', 'none');
    }
  });

  $('#myBtn').on("click", function() {
    $('html, body').animate({
      scrollTop: 0
    }, 300);
  });

  /* Smooth Scroll to "ID" */
  $('a[href*="#"]').on('click', function(e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 300, 'linear');
  });

  /* Play video */
  var srcOld = $('.video-mo-01').children('iframe,embed').attr('src');

  $('[data-target="#modal-video-01"]').on('click', function() {
    $('.video-mo-01').children('iframe,embed')[0].src;

    setTimeout(function() {
      $('.video-mo-01').css('opacity', '1');
    }, 300);
  });

  $('[data-dismiss="modal"]').on('click', function() {
    $('.video-mo-01').children('iframe,embed')[0].src = srcOld;
    $('.video-mo-01').css('opacity', '0');
  });

  /* Fixed Header Animation */
  var header = $('header');
  var logo = $(header).find('.logo img');
  var linkLogo1 = $(logo).attr('src');
  var linkLogo2 = $(logo).data('logofixed');

  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 5 && $(this).width() > 992) {
      $(logo).attr('src', linkLogo2);
      $(header).addClass('header-fixed');
    } else {
      $(header).removeClass('header-fixed');
      $(logo).attr('src', linkLogo1);
    }

  });

  /* Show side-bar */
  $('body').append('<div class="overlay-sidebar trans-0-4"></div>');
  var ovlSideBar = $('.overlay-sidebar');
  var btnShowSidebar = $('.btn-show-sidebar');
  var btnHideSidebar = $('.btn-hide-sidebar');
  var sidebar = $('.sidebar');

  $(btnShowSidebar).on('click', function() {
    $(sidebar).addClass('show-sidebar');
    $(ovlSideBar).addClass('show-overlay-sidebar');
  })

  $(btnHideSidebar).on('click', function() {
    $(sidebar).removeClass('show-sidebar');
    $(ovlSideBar).removeClass('show-overlay-sidebar');
  })

  $(ovlSideBar).on('click', function() {
    $(sidebar).removeClass('show-sidebar');
    $(ovlSideBar).removeClass('show-overlay-sidebar');
  })


})(jQuery);
