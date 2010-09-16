(function($){
	$.fn.slider = function(options){
		
		var defaults = {
			main_container: "slides",
			indv_container: "slide",
		};
		
		var settings = $.extend(defaults, options);
		
		this.each(function(){
			obj = $(this);
			slider_width = 0;
			// append slides div to this container
			obj.append("<div class='slides'>");
			obj.find(".slide").appendTo(obj.find(".slides"));
		
			// append each of the slide div to slides div
			obj.find('.slide').css({'float' : 'left'});
			
			// get slider width
			obj.find(".slide").each(function(){
				slider_width = slider_width + $(this).width();
				alert(slider_width);
			});
			
			
			
		});
	};
	
})(jQuery);