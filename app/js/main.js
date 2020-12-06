$(function(){

    $('.filter-category__select-item').styler();

    $('.product-item__star').rateYo({
      starWidth: "18px",
      spacing: "13px",
      readOnly: true,
      normalFill: "#d6d6d6",
      ratedFill: "#ffcc00",
    });

    $('.recent-product__star').rateYo({
      starWidth: "11px",
      normalFill: "#d6d6d6",
      ratedFill: "#ffcc00",
      readOnly: true,
      spacing: "8px"
    });

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
  