// 76. Les bases de jQuery : jQuery et l'arborescence des éléments



$(function(){
    $("#start").click(function(){

        $("#p1").css("border-color", "green");

        // p1 sera en vert quand on appuie sur start



        $("#p1").parent().css("border-color", "blue");

        // div 1 sera mit en bleu quand on appuie sur start



        $("#p1").parents().css("border-color", "yellow");

        // main et div1 seront mit en jaune quand on appuie sur start



        $("#p1").parents(".special").css("border-color", "purple");

        // main sera mit en violet quand on appuie sur start




        $("#div1").children().css("border-color", "pink");

        // les paragraphes 1,2 et 3 seront mis en rose quand on appuie sur start




        $("#main").find("p").css("border-color", "orange");

        // Tous les paragraphes seront en orange quand on appuie sur start




        /* siblings = frère (ex : $("#p1").siblings().css("border-color", "green");) ... Paragraphe 2 et 3 seront en vert et pas le 1er.


        $("#p1").next().css("border-color", "black"); = prend le frère suivant du p1 qui est le p2. */
        
    });


});





$(function(){

    $("#start").click(function(){

        $("p").css("border-color", "pink");

        // Tous les paragraphes seront en rose




        $("p").first().css("border-color", "aqua");

        // Le 1er p (first) sera écrit en aqua (marche aussi pour le dernier (last))




        $("p").eq(2).css("border-color", "grey");

        // Le paragraphe 3 sera écrit en gris quand on appuie sur start




        $("p").filter(".special").css("border-color", "black");

        // Tous les paragraphes qui ont la class "special" seront écrit en noir quand on appuie sur start (para : 1, 3 et 4)



        $("p").not(".special").css("border-color", "burlywood");

        // Tous les paragraphes qui n'ont pas la class "special" seront écrit en couleur burlywood quand on appuie sur start (para 2 et 5)



    });



});