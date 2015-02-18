$(document).ready(

    function animateFace()
    {
        var artistImg       = $('#artist-img');
        var programmerImg   = $('#programmer-img');
        var artistHover     = $('#artist-face');
        var programmerHover = $('#programmer-face'); 
        var section         = $('#section');
        var duration        = 500;

        var mouseX = 0;
        var relMouseX = 520;
        var xp = 520;
        frameRate =  30;
        timeInterval = Math.round( 1000 / frameRate );  

        section.mouseenter(function(e)
        {

            // Get mouse position
            section.mousemove(
            function(e)
            {
                // raw mouse position
                mouseX = e.pageX;

                // mouse position relative to face div
                relMouseX = mouseX - section.offset().left;


            });
            
            // Animate the face based on mouse movement
            loop = setInterval(function(){

                // zeno's paradox dampens the movement
                xp += (relMouseX - xp) / 12;

                programmerHover.css({width:420 + (520 - xp) * 0.5, left: 100 + (520 - xp) * 0.1});
                artistHover.css({width:420 + (xp - 520) * 0.5, right: 100 - (520 - xp) * 0.1});

            }, timeInterval );

            }).mouseleave(function(e){ 

            // reset the face to initial state
            clearInterval(loop);
            xp          = 520;
            mouseX      = 0;
            relMouseX   = 520;

            artistHover.hoverFlow(e.type, {width: 420, left: 100}, duration, 'easeOutQuad');
            programmerHover.hoverFlow(e.type, {width: 420, right: 100}, duration, 'easeOutQuad');

        });   
    }
);

        /*
        $("#programmer-face, #artist-face").each(
        function ()
        {
            $(this).data("standardWidth", $(this).width());
        });

        $("#programmer-face, #artist-face").hover(

        function ()
        {
            $(this).animate({width: "100%" }, 3000 );
            $(this).parent().children().not(this).animate({width: "0%"}, 3000);
        }, 
        
        function () 
        {
            $(this).parent().children().each(
                function () 
                {
                    $(this).animate({width: $(this).data("standardWidth")}, 3000);
                }
            );
        });

        */