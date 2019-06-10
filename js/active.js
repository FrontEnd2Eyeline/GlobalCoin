(function ($) {
    'use strict';

    // [ JS Active Code Index ]

    // :: 1.0 Owl Carousel Active Code
    // :: 2.0 Slick Active Code
    // :: 3.0 Footer Reveal Active Code
    // :: 4.0 ScrollUp Active Code
    // :: 5.0 CounterUp Active Code
    // :: 6.0 onePageNav Active Code
    // :: 7.0 Magnific-popup Video Active Code
    // :: 8.0 Sticky Active Code
    // :: 9.0 Preloader Active code

    // :: 1.0 Owl Carousel Active Code
    if ($.fn.owlCarousel) {
        $(".welcome_slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            nav: true,
            navText: ["<i class='pe-7s-angle-left'</i>", "<i class='pe-7s-angle-right'</i>"]
        });
        $(".app_screenshots_slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 800,
            margin: 30,
            center: true,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 3
                },
                992: {
                    items: 5
                }
            }
        });
    }

    // :: 2.0 Slick Active Code
    if ($.fn.slick) {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 500,
            asNavFor: '.slider-for',
            dots: true,
            centerMode: true,
            focusOnSelect: true,
            slide: 'div',
            autoplay: true,
            centerMode: true,
            centerPadding: '30px',
            mobileFirst: true,
            prevArrow: '<i class="fa fa-angle-left"></i>',
            nextArrow: '<i class="fa fa-angle-right"></i>'
        });
    }

    // :: 3.0 Footer Reveal Active Code
    if ($.fn.footerReveal) {
        $('footer').footerReveal({
            shadow: true,
            shadowOpacity: 0.3,
            zIndex: -101
        });
    }

    // :: 4.0 ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-angle-up arrow"></i>'
        });
    }

    // :: 5.0 CounterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: 6.0 onePageNav Active Code
    if ($.fn.onePageNav) {
        $('#nav').onePageNav({
            currentClass: 'active',
            scrollSpeed: 2000,
            easing: 'easeOutQuad'
        });
    }

    // :: 7.0 Magnific-popup Video Active Code
    if ($.fn.magnificPopup) {
        $('.video_btn').magnificPopup({
            disableOn: 0,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false
        });
    }

    $('a[href="#"]').click(function ($) {
        $.preventDefault()
    });

    var $window = $(window);

    if ($window.width() > 767) {
        new WOW().init();
    }

    // :: 8.0 Sticky Active Code
    $window.on('scroll', function () {
        if ($window.scrollTop() > 48) {
            $('.header_area').addClass('sticky slideInDown');
        } else {
            $('.header_area').removeClass('sticky slideInDown');
        }
    });

    // :: 9.0 Preloader Active code
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });


//Rota el celular
$("#start").click(function() {
    $('.cellphone').toggleClass('cellphone-rotate');
  });
//Hace que el botón desaparezca
$("#start").click(function() {
    $('#start').toggleClass('animated zoomOut');
});

//Hace que el chulo aparezca
$("#start").click(function() {
    $('#chulo').addClass('checkmark__check');
});

// Animacion de rotacion al hacer hover en ingresar, area oscura de ingresar, logo interno y externo
$(".ingresar, .ingresar_area").hover( function(){
    $(".logo1externo").css("animation", "rotating 3s linear infinite");
    $(".logo1interno").css("animation", "rotating_inv 3s linear infinite");
    }, function(){
    $(".logo1externo").css("animation", "static");
    $(".logo1interno").css("animation", "static");
});

$(".logo1externo").hover( function(){
    $(".logo1externo").css("animation", "rotating 3s linear infinite");
    $(".logo1interno").css("animation", "rotating_inv 3s linear infinite");
    }, function(){
    $(".logo1externo").css("animation", "static");
    $(".logo1interno").css("animation", "static");
});

$(".logo1interno").hover( function(){
    $(".logo1externo").css("animation", "rotating 3s linear infinite");
    $(".logo1interno").css("animation", "rotating_inv 3s linear infinite");
    }, function(){
    $(".logo1externo").css("animation", "static");
    $(".logo1interno").css("animation", "static");
});

// Animacion de rotacion al hacer hover en registrar, area oscura de registrar, logo interno y externo

$(".registrar_area, .registrar").hover( function(){
    $(".logo2externo").css("animation", "rotating 3s linear infinite");
    $(".logo2interno").css("animation", "rotating_inv 3s linear infinite");
    }, function(){
    $(".logo2externo").css("animation", "static");
    $(".logo2interno").css("animation", "static");
});


$(".logo2externo").hover( function(){
    $(".logo2externo").css("animation", "rotating 3s linear infinite");
    $(".logo2interno").css("animation", "rotating_inv 3s linear infinite");
    }, function(){
    $(".logo2externo").css("animation", "static");
    $(".logo2interno").css("animation", "static");
});

$(".logo2interno").hover( function(){
    $(".logo2externo").css("animation", "rotating 3s linear infinite");
    $(".logo2interno").css("animation", "rotating_inv 3s linear infinite");
    }, function(){
    $(".logo2externo").css("animation", "static");
    $(".logo2interno").css("animation", "static");
});

$(".navbar-toggler").click(function(){
    $(".link").toggleClass("link-show");
});

$(".navbar-toggler").click(function(){
    $(".link").css("animation", "fadeInRight 1s linear");
});

// Cambia el color del navbar dependiendo de la ubicacion en la que se encuentre 

$(window).scroll(function(){
    if  ($(this).scrollTop()>=$('#services').position().top ){
        $(".link-show").addClass("blue-navbar");
        $(".explorar").addClass("blue-navbar");
        $("hr").addClass("hr-blue");
        $(".logo").addClass("logo-blue");
        $(".navbar-toggler-icon").addClass("toggle-blue")
    } else {
        $(".link-show").removeClass("blue-navbar");
        $("hr").removeClass("hr-blue");
        $(".explorar").removeClass("blue-navbar");
        $(".logo").removeClass("logo-blue");
        $(".navbar-toggler-icon").removeClass("toggle-blue")
    }
});

$(window).scroll(function(){
    if ($(this).scrollTop()>=$('#verification').position().top) {
        $(".link-show").removeClass("blue-navbar");
        $("hr").removeClass("hr-blue");
        $(".explorar").removeClass("blue-navbar");
        $(".logo").removeClass("logo-blue");
        $(".navbar-toggler-icon").removeClass("toggle-blue")
    } 
});


$(window).scroll(function(){
    if ($(this).scrollTop()>=$('#recibir').position().top) {
        $(".link-show").addClass("blue-navbar");
        $(".explorar").addClass("blue-navbar");
        $("hr").addClass("hr-blue");
        $(".logo").addClass("logo-blue");
        $(".navbar-toggler-icon").addClass("toggle-blue")
    } 
});



// A partir de 991px empieza a aparecer un menu responsivo
$(".navbar-toggler").click(function(){
    $('.nav-menu').toggleClass('nav-menu-show')
})



})(jQuery);
// Se fetchea la API para ser consumida
fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
//Se crea una promesa cuyo resultado sera el JSON del API
.then(response => response.json())
// Se crea la data para que se vea en 
.then(data => {    
    let BTCUSD = document.getElementById('BTC')
    BTCUSD.innerHTML = `BTC: $${Math.round(data.bpi.USD.rate_float)}`;
})
.catch(err => console.log(err))