
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
