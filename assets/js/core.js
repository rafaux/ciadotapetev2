$(document).ready(function(){

    // Menu
    $('#header .right span.toggle').click(function(){
        $(this).toggleClass('on');
        $('#sidebar').toggleClass('on');
    })
        $('#sidebar section nav em').click(function(){
            $(this).find('img').toggleClass('on');
            $(this).parent().find('li').slideToggle();
        })

    // CEP
    $('.box-cep fieldset input[type=submit]').click(function(){
        var campo = $('.box-cep fieldset input[type=text]').val();
        if(campo.length == 10){
            $('.box-cep small').hide().fadeIn().css('display', 'inline-block');
            $('.box-cep table').hide().fadeIn().css('display', 'table');
            return false; // deve ser eliminado ao fazer a consulta
        } else {
            return false;
        }
    })

    // Categorias -> Barra Lateral
    $('#categorias aside .block header img').click(function(){
        $(this).parent().toggleClass('on');
        $(this).parent().parent().find('section').slideToggle();
    })

    // Produto -> Share
    $('#produto .right span.bt.share a').click(function(){
        $(this).parent().toggleClass('on');
        $('#produto .right nav').fadeToggle();
        return false;
    })

        // Produto -> Button Scroll
        $('.more-info').click(function(){
            $('html, body').animate({scrollTop: $('#produto-descricao').offset().top - 70 }, 1000);
        })
        $('.more-pay').click(function(){
            $('html, body').animate({scrollTop: $('#produto-pagamento').offset().top - 70 }, 1000);
        })

    // Produto -> Galeria
    $('#produto .left nav ul li a').on('click', function(){
        var imagem = $(this).attr('href');
        var id = $(this).attr('rel');
        $('#produto span.main a').attr('href', imagem);
        $('#produto span.main img').hide().fadeIn().attr('src', imagem);
        return false;
    })

    // Menu
    $('#menu nav li:first').mouseover(function(){
        $(this).addClass('on');
    })
        $('#menu nav li:first').mouseleave(function(){
            $(this).removeClass('on');
        })

    // Sumario
    $('#institutional .sumario nav li a').click(function(){
        var url = $(this).attr('href');
        $('html, body').animate({scrollTop: $(url).offset(). top - 10 }, 700);
    })

    // Componetns -> Slick
    // $('.vitrine').slick({
    //     slidesToShow:       3,
    //     slidesToScroll:     3,
    //     dots:               false,
    //     arrows:             true,
    //     prevArrow:          "<button class='prev'><i class='fal fa-chevron-left'></i></button>",
    //     nextArrow:          "<button class='next'><i class='fal fa-chevron-right'></i></button>",
    //     responsive: [
    //         { breakpoint: 1280, settings: { slidesToShow: 4, slidesToScroll: 4 } },
    //         { breakpoint: 960, settings: { slidesToShow: 3, slidesToScroll: 3 } },
    //         { breakpoint: 820, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    //         { breakpoint: 520, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    //     ]
    // })
    $('#banner nav ul').slick({
        slidesToShow:       1,
        slidesToScroll:     1,
        dots:               false,
        adaptiveHeight:     true,
        prevArrow:          "<button class='prev'><i class='fal fa-chevron-left'></i></button>",
        nextArrow:          "<button class='next'><i class='fal fa-chevron-right'></i></button>",
    })
    $('#produto .left nav ul').slick({
        slidesToShow:       4,
        slidesToScroll:     4,
        dots:               false,
        prevArrow:          "<button class='prev'><i class='fal fa-chevron-left'></i></button>",
        nextArrow:          "<button class='next'><i class='fal fa-chevron-right'></i></button>",
    })

    // Components -> Mask
    $('.field-cep').mask('00.000-000');
    $('.box-cep fieldset input[type=text]').mask('00.000-000');

});

$(window).scroll(function(){
    if($('html, body').scrollTop() > 100){
        $('body.home #header').addClass('on');
        $('body.home #menu').addClass('on');
        // $('body.home #header span.logo img').attr('src', 'assets/img/logo.png');
    } else {
        $('body.home #header').removeClass('on');
        $('body.home #menu').removeClass('on');
        // $('body.home #header span.logo img').attr('src', 'assets/img/logo-white.png');
    }
})
