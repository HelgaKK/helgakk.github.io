//$('document').ready(function(){
//    $('.welcome_screen').stellar();
//});

//  for index.html  general  file //

$(window).scroll(function(){
    //st - scroll text
    var st = $(this).scrollTop();
    $(".text_block").css({
        "transform" : "translate(0%," + -st/7 +"%"
    });
    //sb - scroll backgraund
    var sb = $(this).scrollTop();
    $(".welcome_screen").css({
        "transform" : "translate(0%," + sb/30 +"%"
    });

 // а тут есть ошибка в блоке 
 
     var heightBlock=document.getElementById('nav');
      //var heightFirst=document.getElementById('home');
      if ($(this).scrollTop() > heightBlock.offsetHeight ) {
          $('#nav').removeClass("navbar_custom").removeClass("nav_links").fadeIn(9000);
      }
      else {
          $('#nav').addClass("navbar_custom").addClass("nav_links");

      }

});

   $('.count-wrap').bind('inview', function(event, visible) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).unbind('inview');
        }
    });

// Can also be used with $(document).ready()
    $(window).load(function() {
      $('.flex_slider').flexslider({
        animation: "slide"
      });
    });


    //back to top
    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    // hide and show additional block 
    function showDiv() {
   document.getElementById('on_click').style.display = "block";
   document.getElementById('temp_button').style.display = "none";
    }
       function hideDiv() {
   document.getElementById('on_click').style.display = "none";
   document.getElementById('temp_button').style.display = "block";
    }   

// experiment 
    //  $(document).ready(function(){
    // // = Вешаем событие прокрутки к нужному месту
    //   //   на все ссылки якорь которых начинается на #
    //   $('a[href^="#"]').bind('click.smoothscroll',function (e) {
    //     e.preventDefault();
    
    //     var target = this.hash,
    //     $target = $(target);
    
    //     $('html, body').stop().animate({
    //       'scrollTop': $target.offset().top - 60
    //     }, 900, 'swing', function () {
    //       window.location.hash = target;
    //     });
    //   });
    
    // });

