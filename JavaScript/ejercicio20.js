(function() {
    let texto = document.createElement("p");
    let contenido = document.createTextNode("Este texto está añadido dinámicamente :D");
    
    texto.appendChild(contenido);
    
    document.body.appendChild(texto);
})();
