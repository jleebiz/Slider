(function($){
	$.fn.slider = function(options){
		
		var defaults = {
			main_container: "slides",
			indv_container: "slide",
		};

		this.each(function(){
			obj = $(this);
		// append slides div to this container
			obj.append("<div class='slides'>");
			obj.find(".slide").appendTo(obj.find(".slides"));
			console.log(obj.find('slides'));
		
		// append each of the slide div to slides div
			obj.find('.slide').css({'float' : 'left'});
		});
	};
	
})(jQuery);