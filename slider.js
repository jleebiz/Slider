(function($){
	$.fn.slider = function(options){
		
		var defaults = {
			main_container: "slides",
			indv_container: "slide",
		};
		
		var settings = $.extend(defaults, options);
		
		var test = new Array();
		
		this.each(function(i){
			test[i] = $(this);
			slider = $(this);
			slides_width = 0;
			
			// append slides div to this container
			slider.append("<div class='slides'></div>");
			slider.find(".slide").appendTo(slider.find(".slides"));
		
			// append each of the slide div to slides div
			slider.find('.slide').css({'float' : 'left'});
			slider.append("<div style='clear: both'></div>");
			
			// get and set slides div width
			slider.find(".slide").each(function(){
				slides_width = slides_width + $(this).width();
			});
			slider.find('.slides').css('width', slides_width);
			
			// resets border, margin, padding to 0px for consistency
			slider.find('.slide').css('border', '0px');
			slider.find('.slide').css('margin', '0px');
			slider.find('.slide').css('padding', '0px');
			
			console.log(test);
		});
		
		
	};
	console.log(this);
})(jQuery);