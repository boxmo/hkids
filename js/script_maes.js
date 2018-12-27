
$(document).ready(function(){

  var slider = $(".carousel");
  var sliderMobile = $("#carousel-maes-mobile");

  slider.carousel({
    interval: false
  })

  sliderMobile.carousel({
    interval: false
  })

  slider.on('mousewheel', function(e) {
    if(e.originalEvent.wheelDelta /120 > 0) {
      $(this).carousel('prev');
    } else {
      $(this).carousel('next');
    }
  });

  sliderMobile.on('mousewheel', function(e) {
    if(e.originalEvent.wheelDelta /120 > 0) {
      $(this).carousel('prev');
    } else {
      $(this).carousel('next');
    }
  });

});
