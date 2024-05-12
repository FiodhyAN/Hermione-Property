$(document).ready(function(){
    $('.slider.fullscreen').slider({
        interval: 3000,
    });

    let card_height = $('.card-testimoni').height() + 80;
    $('.slider.slider-testimoni').slider({
        height: card_height,
    });
  });