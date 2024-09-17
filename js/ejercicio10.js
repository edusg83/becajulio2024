function colorVerde(){
    return console.log("soy verde");
}
function colorRojo(){
    return console.log("soy rojo");
}

var funciones = {
}
funciones.colorRojo = colorRojo;

funciones.colorVerde = colorVerde;

funciones.colorRojo();
