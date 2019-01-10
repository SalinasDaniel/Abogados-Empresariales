$(function() {
    var item = $(".nav-item");
    item.click(function() {
        item.removeClass("active");
        $(this).addClass("active");
    });

});

// $(function() {
//     var width = $(window).width();
//     if (width > 767) {

//         $('.carousel .carousel-item').each(function() {
//             var next = $(this).next();
//             if (!next.length) {
//                 next = $(this).siblings(':first');
//             }
//             next.children(':first-child').clone().appendTo($(this));

//             for (var i = 0; i < 0; i++) {
//                 next = next.next();
//                 if (!next.length) {
//                     next = $(this).siblings(':first');
//                 }

//                 next.children(':first-child').clone().appendTo($(this));
//             }
//         });
//     }
// });

$(function() {
    $('.icon').click(function() {
        $(this).toggleClass('fa-caret-up');
    });
});