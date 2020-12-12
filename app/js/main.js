$(function(){

    $('.related__slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
    });

    $('.product-tabs__top-item').on('click', function(e){
      e.preventDefault();
      $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
      $(this).addClass('product-tabs__top-item--active');

      $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
      $($(this).attr('href')).addClass('product-tabs__content-item--active');
    });

    $('.product-slide__big').slick({
      asNavFor: '.product-slide__thumb',
      draggable: false,
      fade: true,
      arrows: false
    });
    $('.product-slide__thumb').slick({
      asNavFor: '.product-slide__big',
      focusOnSelect: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      draggable: false
    });

    $('.filter-category__select-item, .product-detail__input').styler();

    $('.star').rateYo({
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
  