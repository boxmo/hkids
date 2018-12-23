
$(document).ready(function(){


  var slider = $(".carousel");


  var set_doodle = function(color) {
    var doodle = $("#doodle");
    if (color === false) {
      doodle.css('background-image', "");
      return
    }
    var doodle_path = '/img/rabisco/doodle/' + color + '.png';
    console.log(doodle_path);
    doodle.css('background-image', "url(" + doodle_path+ ")");
  }


  slider.slick({
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 800,
  });

  slider.on('wheel', (function(e) {
    e.preventDefault();

    if (e.originalEvent.deltaY > 0) {
      $(this).slick('slickNext');
    } else {
      $(this).slick('slickPrev');
    }
  }));


  $('.carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    var slide = nextSlide + 1;
    if(slide % 2 === 0) {
      set_doodle('marrom');
    } else {
      set_doodle(false);
    }


  });


});
