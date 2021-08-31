$(document).ready(function(){

    $('.slider__items').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1224,
          settings: {
            slidesToShow: 3.5,
          }
        },
        {
          breakpoint: 880,
          settings: {
            slidesToShow: 2.5,
            arrows: false
            
          }
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 2,
            arrows: false

          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.6,
            arrows: false

          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1.4,
            arrows: false

          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1.3,
            arrows: false

          }
        }
      ]
    });
        });