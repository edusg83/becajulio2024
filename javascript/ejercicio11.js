var funciones = {
    colorVerde: function(){
        console.log("VERDE");
    },
}

var colorRojo = {
}

colorRojo.colorVerde = funciones.colorVerde;

colorRojo.colorVerde();