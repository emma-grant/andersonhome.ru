// $(function() {
//  let headers = $('.headers_fixed');
//  let headersHeight = headers.height(); // вычисляем высоту шапки
  
//  $(window).scroll(function() {
//    if($(this).scrollTop() > 0) {
//     headers.addClass('headers_fixed');
//     $('body').css({
//        'paddingTop': headersHeight+'px' // делаем отступ у body, равный высоте шапки
//     });
//    } else {
//     headers.removeClass('headers_fixed');
//     $('body').css({
//      'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
//     })
//    }
//  });
// });

// if($(this).scrollTop() > 1) {
//  $('.headers')({
//    'padding': '5px 0',
//    'background': '#25272c9a',
//    'transition': '.3s'
//  });
// } else {
//  $(".headers").css({
//    'padding': '15px 0',
//    'background': 'red',
//    'transition': '.3s'
//  });
// }

var scrolled;
window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 50){
        $(".header").css({"background": "#000000de", "transition": ".2s", "padding": "0px 0"})
    }
    if(50 > scrolled){
        $(".header").css({"background": "#00000063", "transition": ".2s", "padding": "0px 0"})         
    }
}