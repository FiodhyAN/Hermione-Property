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
  $(".indicator-wrapper-testimoni").prepend('<i class="material-icons" style="margin-right: -7px;  border: 1px solid black; border-radius: 50%;">chevron_left</i>');
  $(".indicator-wrapper-testimoni").append('<i class="material-icons" style="margin-left: 10px; border: 1px solid black; border-radius: 50%;">chevron_right</i>');

  $('.carousel.carousel-lobby').carousel({
    dist: 0,
    indicators: true,
    padding: 20
  });
  $('.carousel.carousel-lobby .indicators').wrap('<div class="indicator-wrapper" style="display:flex; justify-content: center; margin-top: 20px;"></div>');
  $(".indicator-wrapper").prepend('<i class="material-icons" style="position: absolute; top: 305px; left: 60px; border: 1px solid black; border-radius: 50%;">chevron_left</i>');
  $(".indicator-wrapper").append('<i class="material-icons" style="position: absolute; top: 305px; right: 60px; border: 1px solid black; border-radius: 50%;">chevron_right</i>');

  $('.carousel.carousel-swimming-pool').carousel({
    dist: 0,
    indicators: true,
    padding: 20
  });
  $('.carousel.carousel-swimming-pool .indicators').wrap('<div class="indicator-wrapper" style="display:flex; justify-content: center; margin-top: 20px;"></div>');
  $(".indicator-wrapper").prepend('<i class="material-icons" style="position: absolute; top: 305px; left: 60px; border: 1px solid black; border-radius: 50%;">chevron_left</i>');
  $(".indicator-wrapper").append('<i class="material-icons" style="position: absolute; top: 305px; right: 60px; border: 1px solid black; border-radius: 50%;">chevron_right</i>');

  $('.carousel.carousel-pocket-garden').carousel({
    dist: 0,
    indicators: true,
    padding: 20
  });
  $('.carousel.carousel-pocket-garden .indicators').wrap('<div class="indicator-wrapper" style="display:flex; justify-content: center; margin-top: 20px;"></div>');
  $(".indicator-wrapper").prepend('<i class="material-icons" style="position: absolute; top: 305px; left: 60px; border: 1px solid black; border-radius: 50%;">chevron_left</i>');
  $(".indicator-wrapper").append('<i class="material-icons" style="position: absolute; top: 305px; right: 60px; border: 1px solid black; border-radius: 50%;">chevron_right</i>');

  $('.carousel.carousel-gym').carousel({
    dist: 0,
    indicators: true,
    padding: 20
  });
  $('.carousel.carousel-gym .indicators').wrap('<div class="indicator-wrapper" style="display:flex; justify-content: center; margin-top: 20px;"></div>');
  $(".indicator-wrapper").prepend('<i class="material-icons" style="position: absolute; top: 305px; left: 60px; border: 1px solid black; border-radius: 50%;">chevron_left</i>');
  $(".indicator-wrapper").append('<i class="material-icons" style="position: absolute; top: 305px; right: 60px; border: 1px solid black; border-radius: 50%;">chevron_right</i>');

  $('.carousel.carousel-access-mall').carousel({
    dist: 0,
    indicators: true,
    padding: 20
  });
  $('.carousel.carousel-access-mall .indicators').wrap('<div class="indicator-wrapper" style="display:flex; justify-content: center; margin-top: 20px;"></div>');
  $(".indicator-wrapper").prepend('<i class="material-icons" style="position: absolute; top: 305px; left: 60px; border: 1px solid black; border-radius: 50%;">chevron_left</i>');
  $(".indicator-wrapper").append('<i class="material-icons" style="position: absolute; top: 305px; right: 60px; border: 1px solid black; border-radius: 50%;">chevron_right</i>');

  $('.carousel.carousel-vending-machine').carousel({
    dist: 0,
    indicators: true,
    padding: 20
  })
  $('.carousel.carousel-vending-machine .indicators').wrap('<div class="indicator-wrapper" style="display:flex; justify-content: center; margin-top: 20px;"></div>');
  $(".indicator-wrapper").prepend('<i class="material-icons" style="position: absolute; top: 305px; left: 60px; border: 1px solid black; border-radius: 50%;">chevron_left</i>');
  $(".indicator-wrapper").append('<i class="material-icons" style="position: absolute; top: 305px; right: 60px; border: 1px solid black; border-radius: 50%;">chevron_right</i>');

  $('.carousel.carousel-parking-area').carousel({
    dist: 0,
    indicators: true,
    padding: 20
  });
  $('.carousel.carousel-parking-area .indicators').wrap('<div class="indicator-wrapper" style="display:flex; justify-content: center; margin-top: 20px;"></div>');
  $(".indicator-wrapper").prepend('<i class="material-icons" style="position: absolute; top: 305px; left: 60px; border: 1px solid black; border-radius: 50%;">chevron_left</i>');
  $(".indicator-wrapper").append('<i class="material-icons" style="position: absolute; top: 305px; right: 60px; border: 1px solid black; border-radius: 50%;">chevron_right</i>');
});
