
$(document).ready(function(){


  var slider = $(".carousel");

  var set_bgs = function() {
    $('.slick-active .placeholder').each(function(){
      var regex = RegExp('placeholder');
      var currentBg = $(this).css('background-image');
      if (regex.test(currentBg)) {
        var imgUrl = $(this).data('bg');
        var bg = "url(" + imgUrl + ")"
        var _this = $(this);

        var downloadImg = new Image();
        downloadImg.onload = function() {
          _this.css('background-image', bg);
        }
        downloadImg.src = imgUrl;

       } else {
         return
       }
    });
  }


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

  slider.on('init', function(slick, e){
    set_bgs()
  });

  slider.slick({
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 800,
    draggable: false,
    rows: 0,
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


  $('.carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    var slide = nextSlide + 1;
    if(slide % 2 === 0) {
      set_doodle('marrom');
    } else {
      set_doodle(false);
    }
  });

  slider.on('afterChange', function(){
    set_bgs()
  });



});
