(function () {
    let doc = document,
        elem = doc.createElement("p"),
        boton = doc.createElement("button"),
        contenido = doc.createTextNode("Parrafo1");
        contenidoBoton = doc.createTextNode("Aplciar estilo al párrafo");


    boton.appendChild(contenidoBoton);
    boton.setAttribute("id","boton1");

    elem.appendChild(contenido);
    elem.appendChild(boton);
    elem.setAttribute("id","p1");

    doc.body.appendChild(elem);

    doc.getElementById("boton1").addEventListener("click", eventoBoton, false)
})();

function eventoBoton(){
    let parrafo = document.getElementById("p1"),
        boton = document.getElementById("boton1");

    if(parrafo.classList.contains("parrafo")){
        parrafo.classList.remove("parrafo");
        boton.textContent = "Aplicar estilo a párrafo"; 
        boton.classList.remove("aplicado"); 
    } else {
        parrafo.classList.add("parrafo");
        boton.textContent = "Quitar estilo a párrafo";
        boton.classList.add("aplicado");
    }
}