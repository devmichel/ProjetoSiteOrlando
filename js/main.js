$(document).ready(function (){


    //Config do carousel das noticias e videos
    $('#cards-noticias').owlCarousel({
        items : 4,
    })


    //Config do botão prev e next das noticias e videos
    var owl = $('#cards-noticias').data('owlCarousel');

    $('.nav-left').click(function (){
        owl.prev();
    });
    $('.nav-right').click(function (){
        owl.next();
    });

    $('.page-up').click(function (){
        $('html').animate({
            scrollTop: 0
        });
    });

    //Config do botão menu no display mobile
    $('.btn-mobile-search').click(function ()
    {
        $('#menu-search-mobile').toggleClass('menu-search-ativo')
        $('#input-menu-search').focus();
    })
 
    //Config do botão x do input menu mobile
    $('.btn-reset').click(function() {

        $('#input-menu-search').focus();

    })

    //Config do menu hamburguer
    $('.btn-mobile-bars').click(function ()
    {
        // $('#menu-hamburguer').toggleClass('menu-hamb')
        // $('#menu-hamburguer ul').toggleClass('menu-hamb')
        // $('#logotipo').toggleClass('menu-hamb')
        // $('#menu-mask').toggleClass('menu-hamb')
        $('body').toggleClass('menu-hamb')
    })

    //Config do exit do menu hamburguer
    $('#menu-mask, .btn-close-menu').click(function () 
    {
        $('body').removeClass('menu-hamb')
    })

    //Configuração do click na lista de videos
    $('.card .item').click(function(){

        $('video').attr({
            'src':'mp4/'+ $(this).data('video') + '.mp4',
            'poster':'img/'+ $(this).data('video') + '.jpg',
        });
    });
   
})