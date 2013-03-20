(function($) {

	$.fn.scrollDown = function() {
		var object = $(this);
		var lastposition = 0; 
		$(window).bind("scroll", function(e) {
			if(window.pageYOffset > (object.position().top - 20))
			{
				if(lastposition - window.pageYOffset > -50 && lastposition - window.pageYOffset < 50)
				{
					object.css('margin-top',((window.pageYOffset - object.position().top) + 20)+'px')
				}
				else
				{
					object.stop();
					object.animate({'margin-top':((window.pageYOffset - object.position().top) + 20)+'px'});	
				}
				

			}
			else
			{
				object.css('margin-top', '0px');	
			}
			lastposition = window.pageYOffset;
		});
	}


}) ( jQuery );
