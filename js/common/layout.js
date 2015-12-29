/**
Core script to handle the entire theme and core functions
**/
var Layout = function () {

    // Handles the go to top button at the footer
    var handleGoTop = function () {
        var offset = 300;
        var duration = 500;

        $(window).scroll(function() {
            if ($(this).scrollTop() > offset) {
                $('.scroll-to-top').fadeIn(duration);
            } else {
                $('.scroll-to-top').fadeOut(duration);
            }
        });
        
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
