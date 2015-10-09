(function($){
	$.fn.autoplay = function(){
		return this.each(function() {
			var element = $(this);						
			if (element.data('autoplay')) return;
			var myplugin = new autoplay(this);
			element.data('autoplay', myplugin);
			element.data('autoplay').methods.init();
			
		});
	};
	
	var autoplay = function(target){
		var componentObj = {
			videos:[
				"30XuJ8tQYTE",
				"yvv4CcGb1mo",
				"HMnuvaii7sk",
				"ljDO6Dhm974",
				"7GwGQ0EIGqU",
				"N44-6iECg-Y",
				"uiNK9OoDjrI",
				"VvrUkcqCFPk"],
			methods:{
				init:function(){
					$(".indepth_moisaico_item").each(function(key, val){
						if(key < componentObj.videos.length){
							$(this).on("click",function(){
								$("#indepth_video_show").show();
								componentObj.methods.autoplay(componentObj.videos[key]);
							});
						}
					});
					$("#indepth_video_close").on("click", function(){
						$("#indepth_video").html('');
						$("#indepth_video_show").hide();
					});
				},
				autoplay: function(vcode){
					"use strict";
  					$("#indepth_video").html('<iframe style="width: 100%; height: 100%;"  src="https://www.youtube.com/embed/'+vcode+'?autoplay=1" allowfullscreen></iframe>');
  				}
  			}
		};
		return componentObj;
	};	
})(jQuery);
$(document).ready(function(){
	$("#indepth_page1").autoplay();
});