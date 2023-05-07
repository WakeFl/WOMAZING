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