$(document).ready(function () {
  $(".slider.fullscreen").slider({
    interval: 3000,
    transition: 800,
  });

  let card_height = $(".card-testimoni").height() + 80;
  $(".slider.slider-testimoni").slider({
    height: card_height,
  });

  $(".slider.slider-testimoni .indicators").wrap(
    '<div class="indicator-wrapper-testimoni" style="display:flex; justify-content: center; margin-top: 10px;"></div>'
  );
  $(".indicator-wrapper-testimoni").prepend('<i class="material-icons icon-indicator icon-prev-testimoni" style="margin-right: -7px;  border: 1px solid rgba(198, 198, 198, 1); border-radius: 50%; color: rgba(94, 94, 94, 1);">chevron_left</i>');
  $(".indicator-wrapper-testimoni").append('<i class="material-icons icon-indicator icon-next-testimoni" style="margin-left: 10px; border: 1px solid rgba(198, 198, 198, 1); border-radius: 50%; color: rgba(94, 94, 94, 1);">chevron_right</i>');
  $('.icon-prev-testimoni').on('click', function(){
    $('.slider.slider-testimoni').slider('prev');
  })
  $('.icon-next-testimoni').on('click', function(){
    $('.slider.slider-testimoni').slider('next');
  })

  let carousel_padding;
  function adjustCardLayout() {
    let card = $('.card-room');
    let fab = $('.btn-floating');
    if($(window).width() < 992){
      card.removeClass('horizontal');
      fab.addClass('btn-medium');
      carousel_padding = 50;
    } else {
      card.addClass('horizontal');
      fab.addClass('btn-large');
      carousel_padding = 20;
    }
  }

  adjustCardLayout();

  $('.carousel.carousel-lobby').carousel({
    dist: 0,
    indicators: true,
    padding: carousel_padding
  });
  $('.carousel.carousel-lobby .indicators').wrap('<div class="indicator-wrapper-lobby indicator-wrapper"></div>');
  $(".indicator-wrapper-lobby").prepend('<i class="material-icons icon-indicator icon-prev icon-prev-lobby">chevron_left</i>');
  $(".indicator-wrapper-lobby").append('<i class="material-icons icon-indicator icon-next icon-next-lobby">chevron_right</i>');
  $('.icon-prev-lobby').on('click', function(){
    $('.carousel.carousel-lobby').carousel('prev');
  })
  $('.icon-next-lobby').on('click', function(){
    $('.carousel.carousel-lobby').carousel('next');
  })

  $('.carousel.carousel-swimming-pool').carousel({
    dist: 0,
    indicators: true,
    padding: 20
  });
  $('.carousel.carousel-swimming-pool .indicators').wrap('<div class="indicator-wrapper-swimming-pool indicator-wrapper"></div>');
  $(".indicator-wrapper-swimming-pool").prepend('<i class="material-icons icon-indicator icon-prev icon-prev-swimming-pool">chevron_left</i>');
  $(".indicator-wrapper-swimming-pool").append('<i class="material-icons icon-indicator icon-next icon-next-swimming-pool">chevron_right</i>');
  $('.icon-prev-swimming-pool').on('click', function(){
    $('.carousel.carousel-swimming-pool').carousel('prev');
  })
  $('.icon-next-swimming-pool').on('click', function(){
    $('.carousel.carousel-swimming-pool').carousel('next');
  })

  $('.carousel.carousel-pocket-garden').carousel({
    dist: 0,
    indicators: true,
    padding: 20
  });
  $('.carousel.carousel-pocket-garden .indicators').wrap('<div class="indicator-wrapper-pocket-garden indicator-wrapper"></div>');
  $(".indicator-wrapper-pocket-garden").prepend('<i class="material-icons icon-indicator icon-prev icon-prev-pocket-garden">chevron_left</i>');
  $(".indicator-wrapper-pocket-garden").append('<i class="material-icons icon-indicator icon-next icon-next-pocket-garden">chevron_right</i>');
  $('.icon-prev-pocket-garden').on('click', function(){
    $('.carousel.carousel-pocket-garden').carousel('prev');
  })
  $('.icon-next-pocket-garden').on('click', function(){
    $('.carousel.carousel-pocket-garden').carousel('next');
  })

  $('.carousel.carousel-gym').carousel({
    dist: 0,
    indicators: true,
    padding: 20
  });
  $('.carousel.carousel-gym .indicators').wrap('<div class="indicator-wrapper-gym indicator-wrapper"></div>');
  $(".indicator-wrapper-gym").prepend('<i class="material-icons icon-indicator icon-prev icon-prev-gym">chevron_left</i>');
  $(".indicator-wrapper-gym").append('<i class="material-icons icon-indicator icon-next icon-next-gym">chevron_right</i>');
  $('.icon-prev-gym').on('click', function(){
    $('.carousel.carousel-gym').carousel('prev');
  })
  $('.icon-next-gym').on('click', function(){
    $('.carousel.carousel-gym').carousel('next');
  })

  $('.carousel.carousel-access-mall').carousel({
    dist: 0,
    indicators: true,
    padding: 20
  });
  $('.carousel.carousel-access-mall .indicators').wrap('<div class="indicator-wrapper-access-mall indicator-wrapper"></div>');
  $(".indicator-wrapper-access-mall").prepend('<i class="material-icons icon-indicator icon-prev icon-prev-access-mall">chevron_left</i>');
  $(".indicator-wrapper-access-mall").append('<i class="material-icons icon-indicator icon-next icon-next-access-mall">chevron_right</i>');
  $('.icon-prev-access-mall').on('click', function(){
    $('.carousel.carousel-access-mall').carousel('prev');
  })
  $('.icon-next-access-mall').on('click', function(){
    $('.carousel.carousel-access-mall').carousel('next');
  })

  $('.carousel.carousel-vending-machine').carousel({
    dist: 0,
    indicators: true,
    padding: 20
  })
  $('.carousel.carousel-vending-machine .indicators').wrap('<div class="indicator-wrapper-vending-machine indicator-wrapper"></div>');
  $(".indicator-wrapper-vending-machine").prepend('<i class="material-icons icon-indicator icon-prev icon-prev-vending-machine">chevron_left</i>');
  $(".indicator-wrapper-vending-machine").append('<i class="material-icons icon-indicator icon-next icon-next-vending-machine">chevron_right</i>');
  $('.icon-prev-vending-machine').on('click', function(){
    $('.carousel.carousel-vending-machine').carousel('prev');
  })
  $('.icon-next-vending-machine').on('click', function(){
    $('.carousel.carousel-vending-machine').carousel('next');
  })

  $('.carousel.carousel-parking-area').carousel({
    dist: 0,
    indicators: true,
    padding: 20
  });
  $('.carousel.carousel-parking-area .indicators').wrap('<div class="indicator-wrapper-parking-area indicator-wrapper"></div>');
  $(".indicator-wrapper-parking-area").prepend('<i class="material-icons icon-indicator icon-prev icon-prev-parking-area">chevron_left</i>');
  $(".indicator-wrapper-parking-area").append('<i class="material-icons icon-indicator icon-next icon-next-parking-area">chevron_right</i>');
  $('.icon-prev-parking-area').on('click', function(){
    $('.carousel.carousel-parking-area').carousel('prev');
  })
  $('.icon-next-parking-area').on('click', function(){
    $('.carousel.carousel-parking-area').carousel('next');
  })

  $('.btn-room-order').on('click', function(){
    // link to whatsapp with the data-kamar
    let kamar = $(this).data('kamar');
    let url = `https://wa.me/6285718070442?text=Halo%20saya%20ingin%20pesan%20kamar%20${kamar}`;
    window.open(url, '_blank');
  })

  $('.fixed-action-btn').floatingActionButton();

  $('.fixed-action-btn').hide();

  $(window).scroll(function(){
    if($(window).scrollTop() > $(window).height() / 2){
      $('.fixed-action-btn').fadeIn();
    } else {
      $('.fixed-action-btn').fadeOut();
    }
  })
  $('#btnScrollToTop').on('click', function(){
    $('html, body').animate({scrollTop: 0}, 800);
  })

  $('#btn_pesan').on('click', function(){
    $('html, body').animate({scrollTop: $('#room').offset().top}, 800);
  })

  $('#btn_about').click(function(){
    $('html, body').animate({scrollTop: $('#about').offset().top}, 800);
  })
});
