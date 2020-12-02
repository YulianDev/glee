$(function(){

    $('.filter-price__input').ionRangeSlider({
      type: "double",
      prefix: "$",
      onStart: function (data) {
        $('.filter-price__from').text('$' + data.from);
        $('.filter-price__to').text('$' + data.to);
      },
      onChange: function (data) {
        $('.filter-price__from').text('$' + data.from);
        $('.filter-price__to').text('$' + data.to);
      },
    });
    
    $('.slider__items').slick({
        dots: true,
        arrows: false,
        fade: true, 
        autoplay: true,
      });

      var mixer1 = mixitup('.product__items', {
        selectors: {
          control: '.product__btn'
        }
      }) ;
      var mixer2 = mixitup('.design__items', {
        selectors: {
          control: '.design__btn'
        }
      });
});
  