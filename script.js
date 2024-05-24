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
  $(".indicator-wrapper-testimoni").prepend('<i class="material-icons icon-indicator" style="margin-right: -7px;  border: 1px solid rgba(198, 198, 198, 1); border-radius: 50%; color: rgba(94, 94, 94, 1);">chevron_left</i>');
  $(".indicator-wrapper-testimoni").append('<i class="material-icons icon-indicator" style="margin-left: 10px; border: 1px solid rgba(198, 198, 198, 1); border-radius: 50%; color: rgba(94, 94, 94, 1);">chevron_right</i>');

  $('.carousel.carousel-lobby').carousel({
    dist: 0,
    indicators: true,
    padding: 20
  });
  $('.carousel.carousel-lobby .indicators').wrap('<div class="indicator-wrapper" style="display:flex; justify-content: center; margin-top: 20px;"></div>');
  $(".indicator-wrapper").prepend('<i class="material-icons icon-indicator" style="position: absolute; top: 305px; left: 60px; border: 1px solid rgba(198, 198, 198, 1); border-radius: 50%; color: rgba(94, 94, 94, 1);">chevron_left</i>');
  $(".indicator-wrapper").append('<i class="material-icons icon-indicator" style="position: absolute; top: 305px; right: 60px; border: 1px solid rgba(198, 198, 198, 1); border-radius: 50%; color: rgba(94, 94, 94, 1);">chevron_right</i>');

  $('.carousel.carousel-swimming-pool').carousel({
    dist: 0,
    indicators: true,
    padding: 20
  });
  $('.carousel.carousel-swimming-pool .indicators').wrap('<div class="indicator-wrapper" style="display:flex; justify-content: center; margin-top: 20px;"></div>');
  $(".indicator-wrapper").prepend('<i class="material-icons icon-indicator" style="position: absolute; top: 305px; left: 60px; border: 1px solid rgba(198, 198, 198, 1); border-radius: 50%; color: rgba(94, 94, 94, 1);">chevron_left</i>');
  $(".indicator-wrapper").append('<i class="material-icons icon-indicator" style="position: absolute; top: 305px; right: 60px; border: 1px solid rgba(198, 198, 198, 1); border-radius: 50%; color: rgba(94, 94, 94, 1);">chevron_right</i>');

  $('.carousel.carousel-pocket-garden').carousel({
    dist: 0,
    indicators: true,
    padding: 20
  });
  $('.carousel.carousel-pocket-garden .indicators').wrap('<div class="indicator-wrapper" style="display:flex; justify-content: center; margin-top: 20px;"></div>');
  $(".indicator-wrapper").prepend('<i class="material-icons icon-indicator" style="position: absolute; top: 305px; left: 60px; border: 1px solid rgba(198, 198, 198, 1); border-radius: 50%; color: rgba(94, 94, 94, 1);">chevron_left</i>');
  $(".indicator-wrapper").append('<i class="material-icons icon-indicator" style="position: absolute; top: 305px; right: 60px; border: 1px solid rgba(198, 198, 198, 1); border-radius: 50%; color: rgba(94, 94, 94, 1);">chevron_right</i>');

  $('.carousel.carousel-gym').carousel({
    dist: 0,
    indicators: true,
    padding: 20
  });
  $('.carousel.carousel-gym .indicators').wrap('<div class="indicator-wrapper" style="display:flex; justify-content: center; margin-top: 20px;"></div>');
  $(".indicator-wrapper").prepend('<i class="material-icons icon-indicator" style="position: absolute; top: 305px; left: 60px; border: 1px solid rgba(198, 198, 198, 1); border-radius: 50%; color: rgba(94, 94, 94, 1);">chevron_left</i>');
  $(".indicator-wrapper").append('<i class="material-icons icon-indicator" style="position: absolute; top: 305px; right: 60px; border: 1px solid rgba(198, 198, 198, 1); border-radius: 50%; color: rgba(94, 94, 94, 1);">chevron_right</i>');

  $('.carousel.carousel-access-mall').carousel({
    dist: 0,
    indicators: true,
    padding: 20
  });
  $('.carousel.carousel-access-mall .indicators').wrap('<div class="indicator-wrapper" style="display:flex; justify-content: center; margin-top: 20px;"></div>');
  $(".indicator-wrapper").prepend('<i class="material-icons icon-indicator" style="position: absolute; top: 305px; left: 60px; border: 1px solid rgba(198, 198, 198, 1); border-radius: 50%; color: rgba(94, 94, 94, 1);">chevron_left</i>');
  $(".indicator-wrapper").append('<i class="material-icons icon-indicator" style="position: absolute; top: 305px; right: 60px; border: 1px solid rgba(198, 198, 198, 1); border-radius: 50%; color: rgba(94, 94, 94, 1);">chevron_right</i>');

  $('.carousel.carousel-vending-machine').carousel({
    dist: 0,
    indicators: true,
    padding: 20
  })
  $('.carousel.carousel-vending-machine .indicators').wrap('<div class="indicator-wrapper" style="display:flex; justify-content: center; margin-top: 20px;"></div>');
  $(".indicator-wrapper").prepend('<i class="material-icons icon-indicator" style="position: absolute; top: 305px; left: 60px; border: 1px solid rgba(198, 198, 198, 1); border-radius: 50%; color: rgba(94, 94, 94, 1);">chevron_left</i>');
  $(".indicator-wrapper").append('<i class="material-icons icon-indicator" style="position: absolute; top: 305px; right: 60px; border: 1px solid rgba(198, 198, 198, 1); border-radius: 50%; color: rgba(94, 94, 94, 1);">chevron_right</i>');

  $('.carousel.carousel-parking-area').carousel({
    dist: 0,
    indicators: true,
    padding: 20
  });
  $('.carousel.carousel-parking-area .indicators').wrap('<div class="indicator-wrapper" style="display:flex; justify-content: center; margin-top: 20px;"></div>');
  $(".indicator-wrapper").prepend('<i class="material-icons icon-indicator" style="position: absolute; top: 305px; left: 60px; border: 1px solid rgba(198, 198, 198, 1); border-radius: 50%; color: rgba(94, 94, 94, 1);">chevron_left</i>');
  $(".indicator-wrapper").append('<i class="material-icons icon-indicator" style="position: absolute; top: 305px; right: 60px; border: 1px solid rgba(198, 198, 198, 1); border-radius: 50%; color: rgba(94, 94, 94, 1);">chevron_right</i>');

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
