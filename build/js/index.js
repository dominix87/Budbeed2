$(function()
{
  Index.init();
});
var Index =
{
  init:function()
  {

    $.get("https://ipinfo.io", function(response) {
      $('input[name=city]').val(response.city);
      $('input[name=region]').val(response.region + ', ' + response.country);
      $('input[name=country]').val(response.country);
    }, "jsonp");

    const observer = lozad();
    observer.observe();





    setTimeout(function () {
      $('select[name=progs]').styler();
      $('select[name=qnty]').styler();
      $('select[name=format]').styler();
      $('select[name=duration]').styler();





      // $('select[name=city]').chosen({
      // 		width: '100%',
      // 		no_results_text: 'Совпадений не найдено',
      // 		placeholder_text_single: 'Город'
      // 	});
      // $('select[name=level]').chosen({
      // 		width: '100%',
      // 		no_results_text: 'Совпадений не найдено',
      // 		placeholder_text_single: 'Уровень'
      // 	});

    }, 100);

    $('input[name=phone]').mask('+38(099)999-99-99');

    $('.packItem','.packDescriptions').slice(1).hide();

    $('.contentItem', '#section2').hide();

    $('.childList','.facultChoise').slideUp();



    // Index.svgLength();
    Index.crutch();
    Index.magnificPopUp();
    Index.fixedHeader();
    Index.tinyAnimation();
    Index.slider5Init();
    Index.slider9Init();
    Index.slider11Init();
    Index.slider2block();
    Index.topScrollBar();
    Index.facebookVideo();
    Index.facultChoise();
    Index.openFacultChoise();
  },


  openFacultChoise: function(){
    var activeEl = $('li','.facultChoise');

    $(activeEl).on('click', function(e){
      $(this).toggleClass('active');
      $(this).find('.childList').slideToggle('slow');
      e.stopPropagation();
    })
  },

  facultChoise: function(){
    var activeEl = $('.childList','.facultChoise').find('li');
    $(activeEl).on('click', function(){
      $(activeEl).removeClass('active');
      // $(this).addClass('active');

    })

  },

  changeLevel: function(fThis){
    console.log(fThis.value);
  },
  changeSpec: function(fThis){
    console.log(fThis.value);
  },


  facebookVideo: function(){


    function setSizeVideo() {
      var elW = $('.vidsect-video--inner').width();
      var elH = $('.vidsect-video--inner').height();
      $('#fb-video > span > iframe').width(elW);
      $('#fb-video > span').width(elW);
      $('#fb-video > span > iframe').height(elH);
      $('#fb-video > span').height(elH);
    }
    $(window).on('resize', function() {
      setSizeVideo();
    });
    $(window).on('orientationchange', function() {
      setSizeVideo();
    });

    window.fbAsyncInit = function() {

      var videoFbCont = $('.videoBlock','.section6');
      var videoFbPlayBtn = $(videoFbCont).find('.playBtn');
      //remove preloader
      $(videoFbPlayBtn).on('click', function() {
        $(videoFbCont).find('img').hide();
        $(videoFbPlayBtn).hide();
        $(videoFbCont).addClass('is-play');
        FB.init({
          appId: 'fb-video',
          xfbml: true,
          version: 'v2.7'
        });
        var my_video_player;
        FB.Event.subscribe('xfbml.ready', function(msg) {

          if (msg.type === 'video' && msg.id === 'fb-video') {
            my_video_player = msg.instance;
            my_video_player.unmute();
            my_video_player.setVolume(1);
            my_video_player.play();
            $('.video-preload').addClass('is-remove');
            setTimeout(function() {
              console.clear()
            }, 10)
          }
        });

      });


    };
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


  },

  // Scroll BAR
  topScrollBar: function(){
    $(window).scroll(function() {
      // calculate the percentage the user has scrolled down the page
      var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());

      $('.bar-long').css('width', scrollPercent + "%");

    });
  },


    showInterestedUniver: function(){
      var spec = $('[name=spec]'),
          level = $('[name=level]'),
          city = $('[name=city]'),
          specVal = spec.val(),
          levelVal = level.val(),
          cityVal = city.val(),
          univers = $('.contentItem', '#section2');

      // univers.fadeOut('fast');

      console.log(specVal);
        $(univers).each(function(i, elem){
          if($(elem).hasClass(specVal)){
            $(this).slideDown('slow');
          }
          else{
            $(this).fadeOut('fast');
          }
        })


        // for(var i=0; i<univers.length; i++){
        //   if(univers[i].classList.contains(cityVal)){
            // univers[i].style.display = 'block';
          // }
          // else{
            // univers[i].style.display = 'none';
          // }
        // }

        // univers.slideDown('slow');

    },

    slider5Init: function(){
      var slider = $('.sliderBlock', '.section5');

        slider.slick({
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 1000,
          arrows: true,
          dots: false,
          slidesToShow: 2,
          customPaging: function (slider, i) {
            var thumb = $(slider.$slides[i]).data();
            return '<span></span>';
          },
          prevArrow: $('.slider__next', '.section5'),
          nextArrow: $('.slider__prev', '.section5'),
          responsive: [
            {
              breakpoint: 750,
              settings:{
                slidesToShow: 1
              }
            }
          ]
      });

      slider.on('afterChange',function(e, slick, currentSlide){
        var cur = $('.current','.section5'),
          end = $('.end','.section5'),
          current = currentSlide + 1;

          end.text('0' + slick.slideCount);
          cur.text('0' + current)
      });

    },

    slider9Init: function(){
      var slider1 = $('.univerListWords', '.section9'),
          slider2 = $('.infoBlock', '.section9');

      slider1.slick({
        arrows: false,
        dots: false,
        asNavFor: slider2,
        slidesToShow: 19,
        focusOnSelect: true,
        vertical: true,
        infinite: false,
        swipe: true,
      });

      slider2.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true,
        dots: false,
        infinite: false,
        asNavFor: slider1,
        swipe: false,
        customPaging: function (slider, i) {
          var thumb = $(slider.$slides[i]).data();
          return '<span>0' + (i + 1) + '</span>';
        },
        prevArrow: $('.slider__next', '.section9'),
        nextArrow: $('.slider__prev', '.section9'),
        responsive: [
          {
            breakpoint: 750,
            settings:{
              adaptiveHeight: true
            }
          }
        ]
      });

      slider1.on('afterChange',function(e, slick, currentSlide){
        var cur = $('.current','.section9'),
            end = $('.end','.section9'),
            current = currentSlide + 1;


            end.text(slick.slideCount);
          if(current < 10){
            cur.text('0' + current)
          }
          else{
            cur.text(current);
          }
      });


    },

    slider11Init: function(){
      var slider = $('.slideBlock', '.section11');

      slider.slick({
        vertical: true,
        swipe: false,
        prevArrow: $('.slider__next', '.section11'),
        nextArrow: $('.slider__prev', '.section11'),
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1
      });

      slider.on('afterChange',function(e, slick, currentSlide){
        var cur = $('.current','.section11'),
            end = $('.end','.section11'),
            current = currentSlide + 1;

        end.text(slick.slideCount);
        if(current < 10){
          cur.text('0' + current)
        }
        else{
          cur.text(current);
        }
      });

    },

    activatePackets: function(fThis, int){
      var packets = $('.packItem','.packDescriptions'),
          hiddenPackets = $('.packItem','.packsList '),
          btns = $('button','.packsList'),
          btnsPkg = $('button','.packsBtns'),
          formBtnCall = $('.paketBtn','.section4');

        btnsPkg.removeClass('active');
        btns.removeClass('show');

        $(fThis).toggleClass('active').addClass('show');


        if($(window).width() > 750){
          packets.slideUp('slow');
          $(packets).eq((int - 1)).slideDown('slow');
          $(formBtnCall).attr('data-title', 'Набор услуг Custom');
        }
        else{
          hiddenPackets.slideUp('slow');
          if($(fThis).hasClass('active')){
            $(fThis).next().slideDown('slow');
            setTimeout(function() {
              $('html, body').animate({scrollTop: ($(fThis).offset().top - 45)}, 1500);
            }, 500)
          }
          else{
            $(fThis).next().slideUp('slow');

          }
        }
    },

  activatePacket: function(fThis, int){
      var btns = $('button','.packsBtns'),
          btnsActivate1 = $('button.first','.packsList'),
          btnsActivate2 = $('button.second','.packsList'),
          btnsActivate3 = $('button.full','.packsList'),
          formBtnCall = $('.paketBtn','.section4');



      btns.removeClass('active');
      $(fThis).addClass('active');



      if(int == 1){
        $('button','.packsList').removeClass('active');
        $(btnsActivate1).addClass('active');
        $(formBtnCall).attr('data-title', 'Набор услуг Minimal');
      }
      else if(int == 2){
        $('button','.packsList').removeClass('active');
        $(btnsActivate2).addClass('active');
        $(formBtnCall).attr('data-title', 'Набор услуг Optimal');
      }
      else if(int == 3){
        $('button','.packsList').removeClass('active');
        $(btnsActivate3).addClass('active');
        $(formBtnCall).attr('data-title', 'Набор услуг All Inclusive');
      }

    },































  showHiddenText: function(fThis){
    $(fThis).find('.hiddenText').slideToggle('slow');
  },

  showAndHideHidden: function(fThis){
    var items = $('.hiddenItem', '.section7');
    if($(items).hasClass('active')){
      $(items).slideUp('slow').removeClass('active');
      $(fThis).text('Показати всіх');
    }
    else{
      $(items).slideDown('slow').addClass('active');
      $(fThis).text('Сховати');
      $('html, body').animate({scrollTop: ($('.section7').offset().top)}, 500);
    }
  },

  crutch: function(){
    $('.openMenu', 'header').click(function () {
      $('img[data-src]').each(function () {
        $(this).attr('src', $(this).data('src'));
      })
    });

    $('#mobMenu').hover(function () {
      $('img[data-src]').each(function () {
        $(this).attr('src', $(this).data('src'));

      })
    });
  },



  showHidden: function(fThis){
    var list = $(fThis).siblings('ul');
    $(list).toggleClass('active');

    if($(list).hasClass('active')){
      $(list).find('.hide').slideDown('slow');
      $(fThis).find('span').text('Скрыть пункты');
    }
    else{
      $(list).find('.hide').slideUp('slow');
      $(fThis).find('span').text('Показать все пункты');
    }
  },

  slider2block: function(){
    $('.sliderBlock', '.section2').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      dots: true,
      arrows: true,
      adaptiveHeight: true,
      customPaging: function (slider, i) {
        var thumb = $(slider.$slides[i]).data();
        return '<a>' + (i + 1) + '</a>';
      },
      nextArrow: '<button class="next__arrow"><svg width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 16L6 21L1 16" stroke="inherit" stroke-width="2"/><path d="M6 0V21" stroke="inherit" stroke-width="2"/></svg></button>',
      prevArrow: '<button class="prev__arrow"><svg width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 16L6 21L1 16" stroke="inherit" stroke-width="2"/><path d="M6 0V21" stroke="inherit" stroke-width="2"/></svg></button>',
    })
  },

  tinyAnimation: function(){
    $('.empty','.section1').addClass('run');
    setTimeout(function(){
      $('.animated','.section1').addClass('visible fadeInUp');
    }, 1500);
    $('svg', '.section3').viewportChecker({
      classToAdd: 'run',
      offset: 100,
    });
    $('svg', '.section5').viewportChecker({
      classToAdd: 'run',
      offset: 100,
    });
    $('svg', '.section8').viewportChecker({
      classToAdd: 'run',
      offset: 100,
    });
  },


  magnificPopUp: function(){

    $('[data-popup]').magnificPopup({
      type: 'inline',
      fixedContentPos: true,
    });

    $('.popup-image').magnificPopup({
      type: 'image',
      closeOnContentClick: false,
      closeBtnInside: false,
      fixedContentPos: true,
      mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
      image: {
        verticalFit: true
      }
    });

    $('.popup-gallery').magnificPopup({
      type:'image',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,0] // Will preload 0 - before current, and 1 after the current image
      }
    });

    $('.openVideo').magnificPopup({
      tClose: 'Закрыть (Esc)',
      closeMarkup: '<button title="%title%" type="button" class="mfp-close"><svg width="22px" height="22px"><path fill-rule="evenodd"  fill="rgb(0, 0, 0)" d="M-0.000,10.000 L-0.000,12.000 L10.000,12.000 L10.000,22.000 L12.000,22.000 L12.000,12.000 L22.000,12.000 L22.000,10.000 L12.000,10.000 L12.000,-0.000 L10.000,-0.000 L10.000,10.000 L-0.000,10.000 Z"/></svg></button>',
      type: 'iframe',
      preloader: true,
      fixedContentPos: true,
      midClick: true,
      closeBtnInside: false,
      mainClass: 'mfp-zoom-in',
      verticalFit: true
    });
  },


  //Инициализация прокрутки
  go_to:function(fThis, e){
    if($(window).width() < 991){
      $('.closeMenu','#mobMenu').click();
    }

    e.preventDefault();
    var id = $(fThis).attr('href');
    if( $(id).length != 0)
    {
      $('html, body').animate({scrollTop: ($(id).offset().top)}, 1500);
    }
  },

  sendInit: function (fThis){

    var warning_ico = '<svg version="1.1" class="warning_ico" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 292.805 292.805" xml:space="preserve"><path style="fill:#ff0000" d="M137.583,18.265L1.709,259.709c-4.933,8.767,1.402,19.601,11.462,19.599c57.413-0.01,208.901-0.037,266.469-0.047c10.059-0.002,16.388-10.833,11.454-19.598c-44.565-79.158-135.89-241.399-135.89-241.399C151.62,11.907,141.167,11.907,137.583,18.265z M145.761,248.714c-10.028,0-18.162-8.136-18.162-18.163c0-10.029,8.134-18.165,18.162-18.165c10.03,0,18.165,8.136,18.165,18.165C163.926,240.578,155.791,248.714,145.761,248.714zM160.925,98.708c0.023,0.487,0.02,0.992,0,1.471l-5.05,104.048c-3.149-1.214-6.539-1.948-10.114-1.948c-3.572,0-6.963,0.734-10.112,1.948l-5.05-104.048c-0.402-8.376,6.051-15.493,14.428-15.898C153.403,83.876,160.52,90.332,160.925,98.708z"/></svg>';
    var error_mess_1 = '<div class="allert"><span>поле обов\'язкове для заповнення</span>' + warning_ico + '</div>';
    var error_mess_2 = '<div class="allert"><span>Введите корректное имя</span>' + warning_ico + '</div>';
    var error_mess_3 = '<div class="allert"><span>Введите корректный e-mail</span>' + warning_ico + '</div>';
    var error_mess_4 = '<div class="allert"><span>Введите коректний номер телефону</span>' + warning_ico + '</div>';


    $('.inputWrapper').each(function(){
      $(this).removeClass('error');
    });
    $(':input.error').removeClass('error');
    $('.allert').remove();


    var sbmBtn = $(fThis).find('.btn'),
        ref = $(fThis).find('[required]'),
        formData = $(fThis).serializeArray(),
        error = 0;

    $(ref).each(function() {
      if ($(this).val() == '') {
        var errorfield = $(this);
        $(this).closest('.inputWrapper').addClass('error').append(error_mess_1);
        error = 1;
        $(':input.error:first').focus();
        return;
      }
      else {
        if ($(this).attr('type') == 'text') {
          var thisValueL = $(this).val().length;
          if (thisValueL < 3) {
            var errorfield = $(this);
            $(this).closest('.inputWrapper').addClass('error').append(error_mess_2);
            error = 1;
            $(':input.error:first').focus();
          }
        }
        // if ($(this).attr('type') == 'tel') {
        //   if ($(this).hasClass('is-complete')) {
        //   } else {
        //     error = 1;
        //     $(':input.error:first').focus();
        //     $(this).closest('.inputWrapper').addClass('error').append(error_mess_4);
        //   }
        // }
        if($(this).attr('type') == 'email'){
          console.log($(this).val());
          var pattern =/^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
          if(pattern.test($(this).val())){
          }
          else{
            error = 1;
            $(':input.error:first').focus();
            $(this).closest('.inputWrapper').addClass('error').append(error_mess_3);
          }
        }
      }
    });

    if(error == 0)
    {
      $(sbmBtn).attr('disabled','disabled');
      $(fThis).trigger('reset');
      $(location).attr('href', '../success.html')
      // setTimeout(function(){
      //   $(location).attr('href', 'success.html')
      // }, 5000);
      // $.ajax(
      //     {
      //       url: "db/registration.php",
      //       cache: false,
      //       type: "POST",
      //       data: formData,
      //       dataType: "json",
      //       success: function(data){
      //         if(data.status == 'ok'){
      //           $(location).attr('href', '/success.html');
      //         }
      //       },
      //       error: function(){
      //         console.log('ALARM ERROR');
      //       }
      //     }
      // );
    }
    else{
      console.log('error')
    }
  },

  fixedHeader:function(){
    $(window).scroll(function()
    {
      if ($(this).scrollTop() > 20)
      {
        $('header').addClass('fixed');
      }
      if ($(this).scrollTop() < 20)
      {
        $('header').removeClass('fixed');
      }
    });
  },

  openMenu:function(){
    $('#mobMenu').css('left', 0);
  },

  closeMenu:function(){
    $('#mobMenu').css('left', '100%');
  },

  showFormSpec:function(fThis){
    var title = $(fThis).attr('data-title'),
        btnText = $(fThis).attr('data-btnName'),
        orderType = $(fThis).attr('data-orderType');


    $('#mainForm').find('.title').html(title);
    $('#mainForm').find('.btn').text(btnText);
    $('#mainForm').find('[name=order_type]').val(orderType);


    $.magnificPopup.open({
      fixedContentPos: true,
      items:{
        src: '#mainForm',
        type: 'inline'
      }
    })
  },

  callBackForm:function(){
    $.magnificPopup.open({
      items: {
        src: '#callBackForm',
        type: 'inline',
      }
    })

  },

  formWithSelect1: function(fThis){
    var title = $(fThis).attr('data-title'),
      btnText = $(fThis).attr('data-btnName'),
      orderType = $(fThis).attr('data-orderType');


    $('#formWithSelect1').find('.title').html(title);
    $('#formWithSelect1').find('.btn').text(btnText);
    $('#formWithSelect1').find('[name=order_type]').val(orderType);


    $.magnificPopup.open({
      items: {
        src: '#formWithSelect1',
        type: 'inline',
      }
    })
  },

  formWithSelect2: function(fThis){

    var title = $(fThis).attr('data-title'),
      btnText = $(fThis).attr('data-btnName'),
      orderType = $(fThis).attr('data-orderType');


    $('#formWithSelect2').find('.title').html(title);
    $('#formWithSelect2').find('.btn').text(btnText);
    $('#formWithSelect2').find('[name=order_type]').val(orderType);
    $.magnificPopup.open({
      items: {
        src: '#formWithSelect2',
        type: 'inline',
      }
    })
  },

  formWithSelect3: function(fThis){
    var title = $(fThis).attr('data-title'),
      btnText = $(fThis).attr('data-btnName'),
      orderType = $(fThis).attr('data-orderType');


    $('#formWithSelect3').find('.title').html(title);
    $('#formWithSelect3').find('.btn').text(btnText);
    $('#formWithSelect3').find('[name=order_type]').val(orderType);
    $.magnificPopup.open({
      items: {
        src: '#formWithSelect3',
        type: 'inline',
      }
    })
  },



  openYoutube:function(fThis){
    var e = "https://www.youtube.com/embed/" + fThis.id + "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1";
    $(fThis).find('.playBtn').hide();
    $(fThis).data("params") && (e += "&" + $(fThis).data("params"));
    var a = $("<iframe/>", {class:"el", frameborder: "0", src: e, width: $(fThis).width(), height: $(fThis).height()});
    $(fThis).replaceWith(a)
  },

  showPolitics:function(int){
    event.preventDefault();
    if (int == 1) {
      $.magnificPopup.open({
        items:{
          src: '#modalPolitics1',
          type: 'inline'
        }
      })
    }
    else if(int == 2){
      $.magnificPopup.open({
        items:{
          src: '#modalPolitics2',
          type: 'inline'
        }
      })
    }
    else if(int == 3){
      $.magnificPopup.open({
        items:{
          src: '#modalPolitics3',
          type: 'inline'
        }
      })
    }
  },

  svgLength: function(){
    var path = document.querySelector('#testSVG'),
        len = Math.round( path.getTotalLength() );
    alert('длина ' + len);
  }

};