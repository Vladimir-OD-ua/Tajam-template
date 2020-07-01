$(document).ready(function () {
    $(".header-burger").click(function(event) {
        $(".header-burger,.nav-menu").toggleClass("active");
    });
});

$(document).ready(function() {
    $('a[href^="#"]').click(function() {
        const target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top-68
        }, 500);
    });
});

$(document).ready(function() {
    $("#header").removeClass("default");
    $(window).scroll(function() {
        if (window.matchMedia("(min-width: 768px)").matches) {
            if ($(this).scrollTop() > 40) {
                $("#header").addClass("default").fadeIn('fast');
            } else {
                $("#header").removeClass("default").fadeIn('fast');
            }
        }
    });
});