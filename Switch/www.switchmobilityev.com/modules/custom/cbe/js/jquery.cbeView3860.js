(function ($, Drupal) {
    Drupal.behaviors.cbeView = {
        attach: function (context, settings) {
            $("[data-background]").each(function(){
                if($(this).data("background") != ''){
                    $(this).css("background-image", "url("+$(this).data("background")+")");
                }
            });
            $(".embed-responsive-item").each(function () {
                var type = $(this).attr('data-cbetype');
                if (type == 'videoembed') {
                    var youlink = $(this).attr('data-src');
                    VID_REGEX = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
                    //$selector.attr('data-background', '//img.youtube.com/vi/'+youlink.match(VID_REGEX)[1]+'/hqdefault.jpg');
                    var embedurl = 'https://www.youtube.com/embed/' + youlink.match(VID_REGEX)[1];
                }
                if (type == 'gmap') {
                    var embedurl = $(this).attr('data-src');
                    var height = $(this).attr('data-height');
                    height = height.replace("px", "");
                    var width = $(this).attr('data-width');
                    width = width.replace("px", "");
                }

                $(this).html('<iframe src="' + embedurl + '" height="' + height + '" width="' + width + '"></iframe>');

            });
        }
    };
})(jQuery, Drupal);