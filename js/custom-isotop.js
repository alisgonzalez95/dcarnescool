(function($) {
    "use strict";
    // Author code here

    /*---------------------------------------------- 
				 I S O T O P E : reorganize
	------------------------------------------------*/
    function reorganizeIsotope() {
        jQuery('.masonry-items').each(function() {
            var $container = jQuery(this);
            var maxitemwidth = $container.data('maxitemwidth');
            if (!maxitemwidth) {
                maxitemwidth = 370;
            }
            var containerwidth = Math.ceil((($container.width() + (parseInt($container.css('marginLeft')) * 2)) / 120) * 100 - (parseInt($container.css('marginLeft')) * 2));
            //alert(containerwidth);
            var itemmargin = parseInt($container.children('div').css('marginRight')) + parseInt($container.children('div').css('marginLeft'));
            var rows = Math.ceil(containerwidth / maxitemwidth);
            var marginperrow = (rows - 1) * itemmargin;
            var newitemmargin = marginperrow / rows;
            var itemwidth = Math.floor((containerwidth / rows) - newitemmargin + 1);
            //$container.css({ 'width': '110%' });
            $container.children('div').css({
                'width': itemwidth + 'px'
            });
            if ($container.children('div').hasClass('isotope-item')) {
                $container.isotope('reLayout');
            }
        });
    }

    if (jQuery().isotope) {
        /*---------------------------------------------- 
				  C A L L   I S O T O P E   
		------------------------------------------------*/
        jQuery('.masonry-items').each(function() {
            var $container = jQuery(this);

            $container.imagesLoaded(function() {
                $container.isotope({
                    itemSelector: '.masonry-item',
                    transformsEnabled: true // Important for videos
                });
            });
        });


        /*---------------------------------------------- 
				 I S O T O P E : Filter
		------------------------------------------------*/
        jQuery('.masonry-filters li a').on('click', function() {

            var parentul = jQuery(this).parents('ul.masonry-filters').data('related-grid');
            jQuery(this).parents('ul.masonry-filters').find('li a').removeClass('active');
            jQuery(this).addClass('active');

            var selector = jQuery(this).attr('data-option-value');
            jQuery('#' + parentul).isotope({
                filter: selector
            }, function() {});

            return (false);
        });


        reorganizeIsotope();

        jQuery(window).resize(function() {
            reorganizeIsotope();
        });
		
    } /* END if isotope */

})(jQuery);