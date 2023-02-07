// 75. Les bases de jQuery : jQuery & CSS



 $(function(){

    $("#but1").click(function(){
        $("#p1").addClass("red");
            // permet que le p1 soit ajouté dans la classe .red (css)

            // toggleClass : enlève ou remet la couleur rouge, ça dépend de comment il était



    $("#p1").addClass("red bold");

        // permet d'ajouter sur le P1 la classe red et bold (css)



});




    $("#but2").click(function(){
        $("#p1").removeClass("red");

        // retire la couleur rouge quand tu cliques sur le button 2
    });




});





$(function(){

    $("#but1").click(function(){

        $("#p1").css({
            "color": "red",
            "font-weight": "bold",
            "background": "yellow"
        });

        // Change le code css via jQuery
    });


});






$(function(){
    $("#but1").click(function(){

        console.log($("#but1").width());

            // donne la largeur du button 1

        $("#but2").width(150);

            // change la largeur du button2
    });

});