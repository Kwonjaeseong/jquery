

$('.header_container').load('../inc/header.html')

// parallax
$('.banner').parallax({imageSrc: '../../images/slide_01.jpg'});

//gotop
$('gotop').on('click', function(){
    $('html').animate({scrollTop: 0}, 'fast')
})


$(window).on('scroll', function(){
    if($(this.screenTop() > 500)) {
        $('.gotop').fadeIn()
    } else {
        $('.gotop').fadeOut()  
    }
})



