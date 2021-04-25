$(document).ready(function () {
    // Selector de tema
    // definiendo variables
    let theme = $("#theme");
    let themeActual = localStorage.getItem('theme');
    let green = 'css/green.css'
    let red = 'css/red.css'
    let blue = 'css/blue.css'

    // cargando el tema actual
    if (themeActual == null) {
        themeActual = green;
    }
    theme.attr('href', themeActual);

    // Cambiando los temas
    $("#to-green").click(function () {
        theme.attr("href", green);
        localStorage.setItem('theme', green);
    });
    $("#to-red").click(function () {
        theme.attr("href", red);
        localStorage.setItem('theme', red);
    });
    $("#to-blue").click(function () {
        theme.attr("href", blue);
        localStorage.setItem('theme', blue);
    });


    /* anterioer cambiado de temas
    if(themeActual == 'green'){
        theme.attr("href","css/green.css");
    }else if(themeActual == 'red'){
        theme.attr("href","css/red.css");
    }else if(themeActual == 'blue'){
        theme.attr("href","css/blue.css");
    }
    */

    // Ir arriba
    $('.subir').click(function (e) { //no funciona
        e.preventDefault();
       $('html','body').animate({ // reintentar despues
           scrollTop: 0
       },500);
    });     //no funciona


    // Login falso

    $("#form").submit(function(e){
        let nombre = $("#form_name").val();
        localStorage.setItem('name',nombre);
    })

    let forName = localStorage.getItem('name');

    if (forName != null && forName != 'undenied') {
        let about_parrafo = $("#about p");

        about_parrafo.html("<br><strong>Bienvenido, " + forName + "</strong><br>");
        about_parrafo.append("<a herf='#' id='logout'>Cerrar sesion</a>")
        $("#login").hide();

        
        $("#logout").click(function(){
            localStorage.clear();
            location.reload()
        });
    } 
});