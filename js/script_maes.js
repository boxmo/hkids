
$(document).ready(function(){
  var anchor = window.location.hash;


  var slider = $(".carousel");

  slider.slick({
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 800,
  });

  slider.on('wheel', (function(e) {
    e.preventDefault();
    console.log(e);

    if (e.originalEvent.deltaY > 0) {
      $(this).slick('slickNext');
    } else {
      $(this).slick('slickPrev');
    }
  }));


});
