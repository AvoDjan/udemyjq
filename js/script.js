// 74. Les bases de jQuery : jQuery & HTML


 $(function(){

    var myVar = $("#p1").html();
    console.log(myVar);

// marque le code html
    
 });




 $(function(){

     $("#start").click(function(){
        var myVar = $("#myInput").val();
        console.log(myVar);
     });

    // Marque ce qu'on a écrit dans le input 
 });


$(function(){

    $("#start").click(function(){
        var myVar = $("div").attr("style");
        console.log(myVar);
        // background : red



        // $("#p1").text("Voilà mon nouveau texte");

            // remplace "mon paragraphe 1" par le text "voilà mon nouveau texte" faut appuyer sur start pour faire ça



        // $("#myInput").val("Nouvelle valeur");
            // change ce que j'écris en mettant "Nouvelle valeur" quand j'appuis sur start



        // $("div").append("<p>Mon nouveau paragraphe</p>");
            // Ajout "<p>Mon nouveau paragraphe</p>" dans le html sans y rentrer à l'intérieur (il se positionne à la fin)

            

        // $("div").prepend("<p>Mon nouveau paragraphe</p>");
            // Ajout "<p>Mon nouveau paragraphe</p>" dans le html sans y rentrer à l'intérieur (il se positionne au début)



        // $("div").after("<p>Mon nouveau paragraphe</p>");
                // Ajout "<p>Mon nouveau paragraphe</p>" dans le html sans y rentrer à l'intérieur (il se positionne hors du background red en bas)



        // $("div").before("<p>Mon nouveau paragraphe</p>");
            // Ajout "<p>Mon nouveau paragraphe</p>" dans le html sans y rentrer à l'intérieur (il se positionne hors du background red en haut)



        $("#p1").remove();
            // Retire l'élément et son contenu du html quand tu appuis sur start



        // $("div").empty();
            // Vide tout ce qu'il y a sur la page (tout le html et le background red)
    });


});