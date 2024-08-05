$(document).ready(function () {
    $(".slider-main").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: ".slider-thumb",
    });

    $(".slider-thumb").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: ".slider-main",
      dots: true,
      centerMode: true,
      focusOnSelect: true,
    });
    $(".slider-main").on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        var currentAudio = $(
          ".slider-main .slick-current .audio-player"
        )[0];
        if (currentAudio) {
          currentAudio.pause();
        }
      }
    );

    $(".slider-main").on(
      "afterChange",
      function (event, slick, currentSlide) {
        var currentAudio = $(
          ".slider-main .slick-current .audio-player"
        )[0];
        if (currentAudio) {
          currentAudio.play();
        }
      }
    );
  });