var scrolled;
window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 50){
        $(".headers").css({"background": "#000000de", "transition": ".2s", "padding": "0px 0"})
    }
    if(50 > scrolled){
        $(".headers").css({"background": "#00000063", "transition": ".2s", "padding": "0px 0"})         
    }
}
