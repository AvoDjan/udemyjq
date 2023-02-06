/* 70-71. Les bases de jQuery : Selectors (Selecteurs) et événement */

/* $(document).ready(function(){
}); */

$(function(){

    $("#p1").on({
        mouseenter: function(){
            $('#p5').hide();
        },
        mouseleave: function(){
            $('#p5').show();
        },
        click: function(){
            $('#p4').hide();
        }
    });

});