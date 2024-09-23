(function() {
    let texto = document.createElement("p");
    let contenido = document.createTextNode("Nuevo párrafo creado dinámicamente");
    
    texto.appendChild(contenido);
    
    document.body.appendChild(texto);
})();
