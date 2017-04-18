/*
*   # fire svgs on scroll #
* Author Ricardo Lapa
*/

$(document).ready(function(){

    var positionTop = 0,
        windowHeight = 0,
        positionBottom = 0,


    $(window).scroll(function() {

        positionTop = $(window).scrollTop();
        windowHeight = $(window).height();
        positionBottom = positionTop + windowHeight;

        function fadeObject(object, speed) {
            if ($(object).length) {
                var objectOffset = $(object).offset();

                if ($(object).hasClass('fadeObject')) {
                    $(object).css({
                        'margin-top': '100px'
                    });
                }

                if (!$(object).hasClass('completed')) {
                    if (positionBottom  > objectOffset.top ) {
                        $(object).animate({
                            'margin-top': 0
                        }, speed).addClass('completed').removeClass('fadeObject');
                    }
                }
            }
        }
        // ## call the animations ##

        //fadeObject('selector', speed);

    });

});
