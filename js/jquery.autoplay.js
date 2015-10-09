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
				"X91m1Gl4zfY",
				"kX-JrhRAfX8",
				"kslLHqG7HpY",
				"H_V12z8Bn2M",
				"_f-AP1Rw5oI",
				"1sDd6gsEoJk",
				"j0Scy_PyglY",
				"nUjDUVkJSR8"],
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
						$('html, body').css("overflow","auto");
					});
				},
				autoplay: function(vcode){
					"use strict";
  					$("#indepth_video").html('<iframe style="width: 100%; height: 100%;"  src="https://www.youtube.com/embed/'+vcode+'?autoplay=1&showinfo=0&controls=0&&rel=0" allowfullscreen></iframe>');
  					$('html, body').css("overflow","hidden");
  				}
  			}
		};
		return componentObj;
	};	
})(jQuery);
$(document).ready(function(){
	$("#indepth_page1").autoplay();
});