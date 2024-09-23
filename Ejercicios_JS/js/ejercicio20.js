(function () {
    let doc = document,
        elem = doc.createElement("p"),
        contenido = doc.createTextNode("Este texto está añadido dinámicamente");

    elem.appendChild(contenido);
    elem.setAttribute("id","parrafo1");
    doc.body.appendChild(elem);
})();