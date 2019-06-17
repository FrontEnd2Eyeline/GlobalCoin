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
$(".ingresar_area, .ingresar, .logo1interno, .logo1externo").hover(function(){
    $(".logo1externo").css("animation", "rotating 3s linear infinite");
    $(".logo1interno").css("animation", "rotating_inv 3s linear infinite");
    $(".ingresar_area").css({"background": "rgba(0, 0, 0, 0.5)", "z-index": "-2"})}, 
    function(){  
    $(".ingresar_area").css({"background": "transparent", "z-index": "-2"});
    $(".logo1externo").css("animation", "static");
    $(".logo1interno").css("animation", "static");
  });

// Animacion de rotacion al hacer hover en registrar, area oscura de registrar, logo interno y externo
$(".registrar_area, .registrar , .logo2interno, .logo2externo").hover(function(){
    $(".registrar_area").css({"background": "rgba(0, 0, 0, 0.5)", "z-index": "-2"})
    $(".logo2externo").css("animation", "rotating 3s linear infinite");
    $(".logo2interno").css("animation", "rotating_inv 3s linear infinite");
    },function(){  
    $(".registrar_area").css({"background": "transparent", "z-index": "-2"});
    $(".logo2externo").css("animation", "static");
    $(".logo2interno").css("animation", "static");  
  });

  // Toggler del navbar funciona al dar click
$(".navbar-toggler").click(function(){
    $(".link").toggleClass("link-show");
});

$(".navbar-toggler").click(function(){
    $(".link").css("animation", "fadeInRight 0.5s linear");
});

// Cambia el color del navbar dependiendo de la ubicacion en la que se encuentre 

// Si el scroll en la parte de arriba de la ventana contiene servicios entonces
// cambia el color del navbar
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


// Si el scroll en la parte de arriba de la ventana contiene el carrusel entonces
// cambia el color del navbar
$(window).scroll(function(){
    if ($(this).scrollTop()>=$('#verification').position().top){
        $(".link-show").removeClass("blue-navbar");
        $("hr").removeClass("hr-blue");
        $(".explorar").removeClass("blue-navbar");
        $(".logo").removeClass("logo-blue");
        $(".navbar-toggler-icon").removeClass("toggle-blue")
    } 
});

// Si el scroll en la parte de arriba de la ventana contiene el carrusel entonces
// cambia el color del navbar
$(window).scroll(function(){
    if ($(this).scrollTop()>=$('#recibir').position().top) {
        $(".link-show").addClass("blue-navbar");
        $(".explorar").addClass("blue-navbar");
        $("hr").addClass("hr-blue");
        $(".logo").addClass("logo-blue");
        $(".navbar-toggler-icon").addClass("toggle-blue")
    } 
});


$(window).scroll(function(){
    if ($(this).scrollTop()>=$('#operamos').position().top) {
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


//Inicializa en Verificacion
$('.txtVerificacio').show();
$('.txtNegocio').hide();
$('.txtDeposito').hide();
$('#style-8').show();
$('#style-9').hide();
$('#style-10').hide();


if ($("#V").hasClass("activo")) {
    $("#right").click(function(){
        //Deposito
        $('#style-8').hide();
        $('#style-9').show();
        $('#style-10').hide();
        $('.txtVerificacio').hide();
        $('.txtNegocio').hide();
        $('.txtDeposito').show();
        $('#E').removeClass('activo');
        $('#V').removeClass('activo');
        $('#D').addClass('activo');
    });
    $("#left").click(function(){
        //Negocio
        $('#style-8').hide();
        $('#style-9').hide();
        $('#style-10').show();
        $('.txtVerificacio').hide();
        $('.txtNegocio').show();
        $('.txtDeposito').hide();
        $('#D').removeClass('activo');
        $('#V').removeClass('activo');
        $('#N').addClass('activo');
    });   
}


$.fn.check = function checking() {
    return this.each(function(){
        //MODO VERIFICACION
        if ($("#V").hasClass("activo")) {
            $("#right").click(function(){
                //Deposito
                $('#style-8').hide();
                $('#style-9').show();
                $('#style-10').hide();
                $('.txtVerificacio').hide();
                $('.txtNegocio').hide();
                $('.txtDeposito').show();
                $('#E').removeClass('activo');
                $('#V').removeClass('activo');
                $('#D').addClass('activo');
            });
            $("#left").click(function(){
                //Negocio
                $('#style-8').hide();
                $('#style-9').hide();
                $('#style-10').show();
                $('.txtVerificacio').hide();
                $('.txtNegocio').show();
                $('.txtDeposito').hide();
                $('#D').removeClass('activo');
                $('#V').removeClass('activo');
                $('#N').addClass('activo');
            });
            //MODO NEGOCIO
        } else if ($("#N").hasClass("activo")){
            $("#right").click(function(){
                //Verificacion
                $('.txtVerificacio').show();
                $('.txtNegocio').hide();
                $('.txtDeposito').hide();
                $('#style-8').show();
                $('#style-9').hide();
                $('#style-10').hide();
                $('#D').removeClass('activo');
                $('#N').removeClass('activo');
                $('#V').addClass('activo');
            });
            $("#left").click(function(){
                //Deposito
                $('#style-8').hide();
                $('#style-9').show();
                $('#style-10').hide();
                $('.txtVerificacio').hide();
                $('.txtNegocio').hide();
                $('.txtDeposito').show();
                $('#V').removeClass('activo');
                $('#N').removeClass('activo');
                $('#D').addClass('activo');
            });
            //MODO DEPOSITO
        }else if ($("#D").hasClass("activo")) {
            $("#left").click(function(){
                //Verificacion
                $('.txtVerificacio').show();
                $('.txtNegocio').hide();
                $('.txtDeposito').hide();
                $('#style-8').show();
                $('#style-9').hide();
                $('#style-10').hide();
                $('#D').removeClass('activo');
                $('#N').removeClass('activo');
                $('#V').addClass('activo');
            });
            $("#right").click(function(){
                //Negocio
                $('#style-8').hide();
                $('#style-9').hide();
                $('#style-10').show();
                $('.txtVerificacio').hide();
                $('.txtNegocio').show();
                $('.txtDeposito').hide();
                $('#N').addClass('activo');
                $('#V').removeClass('activo');
                $('#D').removeClass('activo');
            });
        }
    })
}




setTimeout( function(){$('html').css("overflow-y", "hidden")},0)

setTimeout( function(){$('html').css("overflow-y", "scroll")},3500)

window.onload = function() {
    setTimeout (function () {
     scrollTo(0,0);
    }, 100); //100ms for example
   }

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

})(jQuery);
