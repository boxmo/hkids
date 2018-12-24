
$(document).ready(function(){
  var anchor = window.location.hash;


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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  slider.on('wheel', (function(e) {
    e.preventDefault();

    if (e.originalEvent.deltaY > 0) {
      $(this).slick('slickNext');
    } else {
      $(this).slick('slickPrev');
    }
  }));

  if (anchor.length) {
    var slide = map[anchor];
    $('.carousel').slick('slickGoTo', slide);
    change_cicle(slide);
  }

  $('.carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    var slide = nextSlide + 1;
    if(slide % 2 === 0) {
      set_doodle('rosa_bebe');
    } else {
      set_doodle(false);
    }


  });


});
