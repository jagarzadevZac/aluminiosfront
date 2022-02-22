$(document).ready(function(){
    $(window).on('scroll',function() {
        let posicion = $('#li').offset();
        if ($(window).scrollTop() >= posicion.top){
            $('header').removeClass('transparente');
        } else {
            $('header').addClass('transparente')
        }

    })
    $('#burger').click(function() {
        $('#burger').toggleClass('abierto');
        $('.menu').toggleClass('abierto');
    })



     // Smooth scroll
     $('a').on('click', function() {
        if (this.hash !== '') {
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800)
        }
    })
})
