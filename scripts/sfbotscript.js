$(document).ready(function(){
    
    $("#div_sfbot_frame" ).invisible();
         $("#sfbot_logo").on('click',function(){
              $("#div_sfbot_frame" ).visible();
         });
    
	      $("#close_icon").on('click',function(){
                $("#div_sfbot_frame" ).invisible();
		    });
    
    
});


(function($) {
    $.fn.invisible = function() {
        return this.each(function() {
            $(this).css("visibility", "hidden");
        });
    };
    $.fn.visible = function() {
        return this.each(function() {
            $(this).css("visibility", "visible");
        });
    };
}(jQuery));
