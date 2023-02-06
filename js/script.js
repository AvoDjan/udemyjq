// 73. Les bases de jQuery : Animations

$(function(){

    $("button").click(function(){
        $("div").animate({
            left:'600px',
            opacity: 0.2,
            width: '+=150px',
            height: '+=150px'
    }, 5000);
        
// Tout change en même temps

    });

});


$(function(){

    $("button").click(function(){
        $("div").animate({left: '600px'}, 3000);
        $("div").animate({opacity: 0.2}, 3000);
        $("div").animate({width: '200px'}, 3000);
        $("div").animate({height: '200px'}, 3000);

        // Les changements se font les uns après les autres
    });

});


$(function(){

    $("#start").click(function(){
        $("div").animate({left: '600px'}, 3000);
        $("div").animate({opacity: 0.2}, 3000);
        $("div").animate({width: '200px'}, 3000);
        $("div").animate({height: '200px'}, 3000);
    });

    $("#stop").click(function(){
        $("div").stop(true);

        // true permet d'arrêter toutes les animations
        // .stop(true,true); = permet de même si on stop l'animation, elle va jusqu'à la fin de l'animation
    });

});


$(function(){
    
    $("#start").click(function(){
        $("div").slideUp(3000).slideDown(3000).fadeOut(3000).fadeIn(3000);
    });
    
});