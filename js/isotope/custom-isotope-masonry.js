(function($) {
    "use strict";
	
	
	// PORTFOLIO FILTERING - ISOTOPE
	//**********************************
	jQuery.noConflict()(function($){
	var $container = $('.tiles-portfolio-container');
			
	if($container.length) {
		$container.waitForImages(function() {
			
			// initialize isotope
			$container.isotope({
			  itemSelector : '.tiles-portfolio-item',
			  layoutMode : 'masonry'
			});
			
			$('#filters a:first-child').addClass('filter_current');
			// filter items when filter link is clicked
			$('#filters a').click(function(){
			  var selector = $(this).attr('data-filter');
			  $container.isotope({ filter: selector });
			  $(this).removeClass('filter_button').addClass('filter_button filter_current').siblings().removeClass('filter_button filter_current').addClass('filter_button');
			  
			  return false;
			});
			
			
			

			/*---------------------------------------------- 
					 I S O T O P E : Filter dropdown
			------------------------------------------------*/
			jQuery('.tiles-masonry-picker').on('change', function (e) {
				var optionSelected = $("option:selected", this);
				var valueSelected = this.value;
				$container.isotope({ filter: valueSelected });
				return (false);
			});
			
			
		},null,true);
	}});

})(jQuery);