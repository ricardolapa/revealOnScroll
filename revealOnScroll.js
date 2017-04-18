/*
*   # fire svgs on scroll #
* Author Ricardo Lapa
*/

$(document).ready(function(){

    var positionTop = 0,
        windowHeight = 0,
        positionBottom = 0;

    function fadeObject(object, speed) {
        if ($(object).length) {

            $(object).each(function () {
                var objectOffset = $(this).offset();

                if ($(this).hasClass('rl-fadeObject')) {
                    $(this).css({
                        'margin-top': '100px'
                    });
                }

                if (!$(this).hasClass('completed')) {
                    if (positionBottom  > objectOffset.top ) {
                        $(this).animate({
                            'margin-top': 0
                        }, speed).addClass('completed').removeClass('rl-fadeObject');
                    }
                }
            });
        }
    }

    $(window).scroll(function() {

        positionTop = $(window).scrollTop();
        windowHeight = $(window).height();
        positionBottom = positionTop + windowHeight;

        // ## call the animations ##
        fadeObject('.rl-fadeObject', $('.rl-fadeObject').data('rj-speed'));
    });

});
