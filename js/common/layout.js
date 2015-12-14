/**
Core script to handle the entire theme and core functions
**/
var Layout = function () {



    // Handles the go to top button at the footer
    var handleGoTop = function () {
        console.log('我是回到顶部');
        var offset = 300;
        var duration = 500;

        if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {  // ios supported
            $(window).bind("touchend touchcancel touchleave", function(e){
               if ($(this).scrollTop() > offset) {
                    $('.scroll-to-top').fadeIn(duration);
                } else {
                    $('.scroll-to-top').fadeOut(duration);
                }
            });
        } else {  // general 
            $(window).scroll(function() {
                if ($(this).scrollTop() > offset) {
                    $('.scroll-to-top').fadeIn(duration);
                } else {
                    $('.scroll-to-top').fadeOut(duration);
                }
            });
        }
        
        $('.scroll-to-top').click(function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop: 0}, duration);
            return false;
        });
    };



    return {
        initFooter: function() {
            handleGoTop(); //handles scroll to top functionality in the footer
        }
    };

}();

/*
if (App.isAngularJsApp() === false) {
    jQuery(document).ready(function() {    
       Layout.init(); // init metronic core componets
    });
}*/
