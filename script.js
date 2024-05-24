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

  $('.carousel.carousel-lobby').carousel({
    dist: 0,
    indicators: true,
    padding: 20
  });
  $('.carousel.carousel-lobby .indicators').wrap('<div class="indicator-wrapper" style="display:flex; justify-content: center; margin-top: 20px;"></div>');
  $(".indicator-wrapper").prepend('<i class="material-icons icon-indicator icon-prev-lobby" style="position: absolute; top: 305px; left: 60px; border: 1px solid rgba(198, 198, 198, 1); border-radius: 50%; color: rgba(94, 94, 94, 1);">chevron_left</i>');
  $(".indicator-wrapper").append('<i class="material-icons icon-indicator icon-next-lobby" style="position: absolute; top: 305px; right: 60px; border: 1px solid rgba(198, 198, 198, 1); border-radius: 50%; color: rgba(94, 94, 94, 1);">chevron_right</i>');
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
  $('.carousel.carousel-swimming-pool .indicators').wrap('<div class="indicator-wrapper" style="display:flex; justify-content: center; margin-top: 20px;"></div>');
  $(".indicator-wrapper").prepend('<i class="material-icons icon-indicator icon-prev-swimming-pool" style="position: absolute; top: 305px; left: 60px; border: 1px solid rgba(198, 198, 198, 1); border-radius: 50%; color: rgba(94, 94, 94, 1);">chevron_left</i>');
  $(".indicator-wrapper").append('<i class="material-icons icon-indicator icon-next-swimming-pool" style="position: absolute; top: 305px; right: 60px; border: 1px solid rgba(198, 198, 198, 1); border-radius: 50%; color: rgba(94, 94, 94, 1);">chevron_right</i>');
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
  $('.carousel.carousel-pocket-garden .indicators').wrap('<div class="indicator-wrapper" style="display:flex; justify-content: center; margin-top: 20px;"></div>');
  $(".indicator-wrapper").prepend('<i class="material-icons icon-indicator icon-prev-pocket-garden" style="position: absolute; top: 305px; left: 60px; border: 1px solid rgba(198, 198, 198, 1); border-radius: 50%; color: rgba(94, 94, 94, 1);">chevron_left</i>');
  $(".indicator-wrapper").append('<i class="material-icons icon-indicator icon-prev-pocket-garden" style="position: absolute; top: 305px; right: 60px; border: 1px solid rgba(198, 198, 198, 1); border-radius: 50%; color: rgba(94, 94, 94, 1);">chevron_right</i>');
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
  $('.carousel.carousel-gym .indicators').wrap('<div class="indicator-wrapper" style="display:flex; justify-content: center; margin-top: 20px;"></div>');
  $(".indicator-wrapper").prepend('<i class="material-icons icon-indicator icon-prev-gym" style="position: absolute; top: 305px; left: 60px; border: 1px solid rgba(198, 198, 198, 1); border-radius: 50%; color: rgba(94, 94, 94, 1);">chevron_left</i>');
  $(".indicator-wrapper").append('<i class="material-icons icon-indicator icon-next-gym" style="position: absolute; top: 305px; right: 60px; border: 1px solid rgba(198, 198, 198, 1); border-radius: 50%; color: rgba(94, 94, 94, 1);">chevron_right</i>');
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
  $('.carousel.carousel-access-mall .indicators').wrap('<div class="indicator-wrapper" style="display:flex; justify-content: center; margin-top: 20px;"></div>');
  $(".indicator-wrapper").prepend('<i class="material-icons icon-indicator icon-prev-access-mall" style="position: absolute; top: 305px; left: 60px; border: 1px solid rgba(198, 198, 198, 1); border-radius: 50%; color: rgba(94, 94, 94, 1);">chevron_left</i>');
  $(".indicator-wrapper").append('<i class="material-icons icon-indicator icon-next-access-mall" style="position: absolute; top: 305px; right: 60px; border: 1px solid rgba(198, 198, 198, 1); border-radius: 50%; color: rgba(94, 94, 94, 1);">chevron_right</i>');
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
  $('.carousel.carousel-vending-machine .indicators').wrap('<div class="indicator-wrapper" style="display:flex; justify-content: center; margin-top: 20px;"></div>');
  $(".indicator-wrapper").prepend('<i class="material-icons icon-indicator icon-prev-vending-machine" style="position: absolute; top: 305px; left: 60px; border: 1px solid rgba(198, 198, 198, 1); border-radius: 50%; color: rgba(94, 94, 94, 1);">chevron_left</i>');
  $(".indicator-wrapper").append('<i class="material-icons icon-indicator icon-nex-vending-machine" style="position: absolute; top: 305px; right: 60px; border: 1px solid rgba(198, 198, 198, 1); border-radius: 50%; color: rgba(94, 94, 94, 1);">chevron_right</i>');
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
  $('.carousel.carousel-parking-area .indicators').wrap('<div class="indicator-wrapper" style="display:flex; justify-content: center; margin-top: 20px;"></div>');
  $(".indicator-wrapper").prepend('<i class="material-icons icon-indicator icon-prev-parking-area" style="position: absolute; top: 305px; left: 60px; border: 1px solid rgba(198, 198, 198, 1); border-radius: 50%; color: rgba(94, 94, 94, 1);">chevron_left</i>');
  $(".indicator-wrapper").append('<i class="material-icons icon-indicator icon-next-parking-area" style="position: absolute; top: 305px; right: 60px; border: 1px solid rgba(198, 198, 198, 1); border-radius: 50%; color: rgba(94, 94, 94, 1);">chevron_right</i>');
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
