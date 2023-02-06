// 72. Les bases de jQuery : Effets

$(function(){

    $("#p1").click(function(){
        $('#p2').hide(3000, function(){
            $('#p3').hide(3000, function(){
                $('#p4').hide(3000);
            });
        });
    });

//  Fait partir les paragraphes en cascade

});


$(function(){


    $("#p1").click(function(){
        $('#p5').fadeTo(3000, 0.5); /* (0.5 = l'opacité ) */
    });
});

// Toggle = si c'est visible ça le rend invisible et si il est invisible ça le rend visible

// FadeOut = ex : fadeOut(3000); ça prend 3 secondes pour que le P5 disparaisse

// FadeIn = ex : fadeIn(3000) permet de refaire apparaitre le P5 en 3 secondes. (Faut le faire disparaitre avant pour le faire apparaitre)

// FadeToggle = ex : fadeToggle(3000) rendre visible ou invisible en 3 secondes

// fadeTo = ex : fadeTo(3000, 0.5) permets d'emmenerde à une opacité précise

