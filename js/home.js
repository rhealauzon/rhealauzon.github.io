$(document).ready(function() 
{
  
  $(window).scroll(function () 
  {
        if ($(window).scrollTop() > 246) 
        {
            $('#navbar').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < 245) 
        {
            $('#navbar').removeClass('navbar-fixed');
        }
    });

    $('a[href^="#"]').on('click', function (element) 
	{
		// Stop the standard jump-to-div
	    element.preventDefault();

	    // Retrive the target element
	    var target = this.hash;
	    var $target = $(target);

	    // Slide to the target
	    $('html, body').stop().animate(
	    {
	        'scrollTop': $target.offset().top - 120
	    }, 1000, 'swing', function() 
	    {
	    	// Update the address bar
	        window.location.hash = target;
    	});
	});
});