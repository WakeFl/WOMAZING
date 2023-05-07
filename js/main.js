(function ($)
  { "use strict"
  
//sticky nav-menu
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 200) {
        $(".nav-menu").removeClass("sticky-bar");
      } else {
        $(".nav-menu").addClass("sticky-bar")
      }
    });

//sliders first section
    $(document).ready(function(){
      $('.offer__slides').slick({
        dots : true ,
        arrows : false,
        asNavFor : ".offer__images",
        autoplay: true,
        autoplaySpeed: 3000,
        
      });
    });

    $(document).ready(function(){
      $('.offer__images').slick({
        slidesToShow: 1,
        dots : false ,
        arrows : false,
        asNavFor :".offer__slides"
      });
    });

//sliders last section
    $(document).ready(function(){
      $('.squad__slides').slick({
        dots : true,
        autoplay: true,
        autoplaySpeed: 1500,
      });
    });

//preloader
    $(window).on('load', function () {
      
      $('.areaForLoader').delay(450).fadeOut('slow');
      $('body').delay(450).css({
        'overflow': 'visible'
      });
    });

//scroll to shop
    $('.offer__arrow ').on("click", function () {
      $('body,html').animate({
        scrollTop: $(".collection").offset().top 
      }, 500);
      return false;
    });

//ModalWindow 
    const closeModal = function() {
      $('.modal').toggle();
      $('body').removeClass('body-fixed');
    }
    $('.tel__images').on('click' , function() {
      $('.modal').toggle();
      $('body').addClass('body-fixed')
    })
    $('.tel__link').on('click' , function() {
      $('.modal').toggle();
      $('body').addClass('body-fixed')
    })
    $('.modal__overlay').on('click' , closeModal);
     $('.modal__close').on('click' , closeModal);
//modalWindow-complete
    $('.modal-complete__overlay').on('click' , function() {
      $('.modal-complete').toggle();
      $('body').removeClass('body-fixed');
    })
    $('.modal-complete__btn').on('click' , function() {
      $('.modal-complete').toggle();
      $('body').removeClass('body-fixed');
    })
//Validation & submit
$(document).ready(function() {
  $('[data-submit]').on('click', function(e) {
      e.preventDefault();
      $(this).parent('form').submit();
      $(this).parent('div').parent('form').submit();

  })
  $.validator.addMethod(
      "regex",
      function(value, element, regexp) {
          const re = new RegExp(regexp);
          return this.optional(element) || re.test(value);
      },
      "Please check your input."
  );

  function valEl(el) {
      el.validate({
          rules: {
              phoneNumber: {
                  required: true,
                  regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
              },
              name: {
                  required: true
              },
              email: {
                  required: true,
                  email: true
              },
              sms : {
                required: true
              },
              country : {
                required: true
              },
              city : {
                required: true
              },
              street : {
                required: true
              },
              house : {
                required: true
              },
              flat : {
                required: true
              },
              pay : {
                required: true
              },
              quantity : {
                required: true
              },
              coupon : {
                required: true
              },
              
          },
          messages: {
            phoneNumber: {
                  required: 'Поле обязательно для заполнения',
                  regex: 'Телефон может содержать символы + - ()'
              },
              name: {
                  required: 'Поле обязательно для заполнения',
              },
              email: {
                  required: 'Поле обязательно для заполнения',
                  email: 'Неверный формат E-mail'
              },
              sms : {
                required: 'Поле обязательно для заполнения',
              },
              country : {
                required: 'Поле обязательно для заполнения',
              },
              city : {
                required: 'Поле обязательно для заполнения',
              },
              street : {
                required: 'Поле обязательно для заполнения',
              },
              house : {
                required: 'Поле обязательно для заполнения',
              },
              flat : {
                required: 'Поле обязательно для заполнения',
              },
              pay : {
                required: 'Поле обязательно для заполнения',
              },
              quantity : {
                required: 'Поле обязательно для заполнения',
              },
              coupon : {
                required: 'Поле обязательно для заполнения',
              },
          },

          
          submitHandler: function(form) {
              $('.areaForLoader').fadeIn();
              let $form = $(form);
              let $formId = $(form).attr('id');
              switch ($formId) {
                  case 'modal-form':
                      $.ajax({
                              type: 'POST',
                              url: $form.attr('action'),
                              data: $form.serialize(),
                          })
                          .done(function() {
                            console.log('Success');

                          })
                          .fail(function() {
                            console.log('Fail');
                          })
                          .always(function() {
                            console.log('Always');
                            setTimeout(function() {
                              $('.areaForLoader').fadeIn();
                            }, 100);
                            setTimeout(function() {
                              $('.modal').fadeOut("slow");
                              $('.modal-complete').fadeIn();
                                $form.trigger('reset');
                            }, 500);
                            setTimeout(function() {
                              $('.areaForLoader').fadeOut();
                                $form.trigger('reset');
                            }, 1100);
                          });
                      break;
                      case 'letter-form':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize()
                            })
                            .done(function() {
                                console.log('Success');
                            })
                            .fail(function() {
                                console.log('Fail');
                            })
                            .always(function() {
                                console.log('Always');
                                setTimeout(function() {
                                  $('.areaForLoader').fadeIn();
                                }, 100);
                                setTimeout(function() {
                                  $('.areaForLoader').fadeOut();
                                  $('.letter__done').fadeIn();
                                    $form.trigger('reset');
                                }, 1100);
                            });
                        break;
                        case 'order-form':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize()
                            })
                            .done(function() {
                                console.log('Success');
                            })
                            .fail(function() {
                                console.log('Fail');
                            })
                            .always(function() {
                                console.log('Always');
                                setTimeout(function() {
                                  $('.areaForLoader').fadeIn();
                                }, 100);
                                setTimeout(function() {
                                  $('.areaForLoader').fadeOut();
                                  $(location).attr('href', '../succes.html');
                                    $form.trigger('reset');
                                }, 1100);
                            });
                        break;
                        case 'market-form':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize()
                            })
                            .done(function() {
                                console.log('Success');
                            })
                            .fail(function() {
                                console.log('Fail');
                            })
                            .always(function() {
                                console.log('Always');
                                setTimeout(function() {
                                  $('.areaForLoader').fadeIn();
                                }, 100);
                                setTimeout(function() {
                                  $('.areaForLoader').fadeOut();
                                    $form.trigger('reset');
                                }, 1100);
                            });
                        break;
                        case 'coupon-form':
                          $.ajax({
                                  type: 'POST',
                                  url: $form.attr('action'),
                                  data: $form.serialize()
                              })
                              .done(function() {
                                  console.log('Success');
                              })
                              .fail(function() {
                                  console.log('Fail');
                              })
                              .always(function() {
                                  console.log('Always');
                                  setTimeout(function() {
                                    $('.areaForLoader').fadeIn();
                                  }, 100);
                                  setTimeout(function() {
                                    $('.areaForLoader').fadeOut();
                                      $form.trigger('reset');
                                  }, 1100);
                              });
                          break;
              }
              return false;
          }
      })
  }

  
  $('.js-form').each(function() {
      valEl($(this));
  });
  
});


//PagesShop & NumbersOfGoods

$(document).ready(function (){
  let currNum = $(".goods__item:visible").length;
  $(".goods__current").text(currNum);
  let allNum = $(".goods__tab > .goods__item").length;
  $(".goods__all").text(allNum);
});



$('.goods__btn').on('click' , function (event) {
  event.preventDefault();
  let currTab = $(this).index();
  $('.goods__btn').removeClass("active", 1000, "easeOutBounce" );
  $(this).addClass("active", 1000, "easeOutBounce" );
  $('.goods__tab').removeClass("active", 1000, "easeOutBounce" );
  $('.goods__tab').eq(currTab).addClass("active", 1000, "easeOutBounce" );
  let currNum = $(".goods__item:visible").length;
  $(".goods__current").text(currNum);
  let allNum = $(".goods__tab > .goods__item").length;
  $(".goods__all").text(allNum);
  $('body,html').animate({
    scrollTop: $(".merchandise").offset().top
  }, 500);
})

$('.goods__arrow').on('click' , function (event) {
  event.preventDefault();
  let currTab = $(this).index();
  $('.goods__btn').removeClass("active", 1000, "easeOutBounce" );
  $('.goods__btn').next().addClass("active", 1000, "easeOutBounce" );
  $('.goods__tab').removeClass("active", 1000, "easeOutBounce" );
  $('.goods__tab').next().addClass("active", 1000, "easeOutBounce" );
  let currNum = $(".goods__item:visible").length;
  $(".goods__current").text(currNum);
  let allNum = $(".goods__tab > .goods__item").length;
  $(".goods__all").text(allNum);
  $('body,html').animate({
    scrollTop: $(".merchandise").offset().top
  }, 500);
})




//category of goods 

$("#all").on('click' , function (event) {
  event.preventDefault();
  $(".categories__btn").removeClass("categories__btn_active");
  $(this).addClass("categories__btn_active");
  $(".goods__page").removeClass("active");
  $(".goods__tabs").css("display","block");
  $(".goods__item").css("display","block");
  let currNum = $(".goods__item:visible").length;
  $(".goods__current").text(currNum);
  let allNum = $(".goods__tab > .goods__item").length;
  $(".goods__all").text(allNum);
  $(".offer-shop__link_active").text('Магазин')
  $(".goods__buttons").css("display","block");
})

$("#coat").on('click' , function (event) {
  event.preventDefault();
  $(".categories__btn").removeClass("categories__btn_active");
  $(this).addClass("categories__btn_active");
  $(".goods__tabs").css("display","none");
  $(".goods__page").addClass("active");
  $(".goods__item").css("display","none");
  $(".goods__item[data-category=coat]").css("display","block");
  let currNum = $(".goods__item:visible").length;
  $(".goods__current").text(currNum);
  let allNum = $(".goods__items > .goods__item").length;
  $(".goods__all").text(allNum);
  if (currNum < 10) {
    $(".goods__buttons").css("display","none");
  } else {
    $(".goods__buttons").css("display","block");
  };
  $(".offer-shop__link_active").text('Пальто')
})

$("#sweetshirt").on('click' , function (event) {
  event.preventDefault();
  $(".categories__btn").removeClass("categories__btn_active");
  $(this).addClass("categories__btn_active");
  $(".goods__tabs").css("display","none");
  $(".goods__page").addClass("active");
  $(".goods__item").css("display","none");
  $(".goods__item[data-category=sweetshirt]").css("display","block");
  let currNum = $(".goods__item:visible").length;
  $(".goods__current").text(currNum);
  let allNum = $(".goods__items > .goods__item").length;
  $(".goods__all").text(allNum);
  if (currNum < 10) {
    $(".goods__buttons").css("display","none");
  } else {
    $(".goods__buttons").css("display","block");
  };
  $(".offer-shop__link_active").text('Свитшоты')
})

$("#cardigan").on('click' , function (event) {
  event.preventDefault();
  $(".categories__btn").removeClass("categories__btn_active");
  $(this).addClass("categories__btn_active");
  $(".goods__tabs").css("display","none");
  $(".goods__page").addClass("active");
  $(".goods__item").css("display","none");
  $(".goods__item[data-category=cardigan]").css("display","block");
  let currNum = $(".goods__item:visible").length;
  $(".goods__current").text(currNum);
  let allNum = $(".goods__items > .goods__item").length;
  $(".goods__all").text(allNum);
  if (currNum < 10) {
    $(".goods__buttons").css("display","none");
  } else {
    $(".goods__buttons").css("display","block");
  };
  $(".offer-shop__link_active").text('Кардиганы')
})

$("#hoody").on('click' , function (event) {
  event.preventDefault();
  $(".categories__btn").removeClass("categories__btn_active");
  $(this).addClass("categories__btn_active");
  $(".goods__tabs").css("display","none");
  $(".goods__page").addClass("active");
  $(".goods__item").css("display","none");
  $(".goods__item[data-category=hoody]").css("display","block");
  let currNum = $(".goods__item:visible").length;
  $(".goods__current").text(currNum);
  let allNum = $(".goods__items > .goods__item").length;
  $(".goods__all").text(allNum);
  if (currNum < 10) {
    $(".goods__buttons").css("display","none");
  } else {
    $(".goods__buttons").css("display","block");
  };
  $(".offer-shop__link_active").text('Толстовки')
})
//Reload-page
  $('.property__update').click(function(){
    location.reload();
  })

//price
    let sd = $('.cart-items__prices').text().replace(/[^0-9]/gi, ''); 
    let count = $('.cart-items__number').val();
    let currPrice = sd * count ;
    $(".cart-items__current-price").text("$" + currPrice);
    $(".result__subtotal_summary").text("$" + currPrice);
    $(".result__total_summary").text("$" + currPrice);
    

 $(".cart-items__number").change(function() {
  let sd = $('.cart-items__prices').text().replace(/[^0-9]/gi, ''); 
  let count = $('.cart-items__number').val();
  let currPrice = sd * count ;
  $(".cart-items__current-price").text("$" + currPrice);
  $(".result__subtotal_summary").text("$" + currPrice);
    $(".result__total_summary").text("$" + currPrice);
});

//delete-goods

$(".cart-items__delete").click(function() {
$(".cart-items__buy").css("display","none");
let all = $(".cart-items__buy");
let hidden = all.filter(function(){ return ($(this).css("display") == "none"); })
if (all.length == hidden.length){
  $(".result__subtotal_summary").text("$0");
  $(".result__total_summary").text("$0")
}
});

//Ordering
$(".result__btn").click(function() {
  $(location).attr('href', '../ordering.html');
})

$(".burger__btn").click(function() {
  $(".burger__menu").toggle();
  $(".burger__nav").css("display","block");
})


})(jQuery);



  
  
