function addParaf(){
    var doc = document;

    elem = doc.createElement("p");
    
    body = doc.getElementById("body");

    elem.innerHTML = "Párrafo1"

    elem.setAttribute("id", "p1");

    body.appendChild(elem);
}

function addButton(){
    var doc = document;

    elem = doc.createElement("button");
    
    p = doc.getElementById("p1");

    elem.innerHTML = "Aplicar estilo a párrafo"

    elem.setAttribute("id", "boton1");

    p.appendChild(elem);
}
    
addParaf();
addButton();

p1 = document.getElementById("p1");
button = document.getElementById("boton1");

button.addEventListener("click", function () {
    if (!p1.classList.contains("parrafo")) {
        p1.classList.add("parrafo");
        button.innerHTML = "Quitar estilo a párrafo";
        button.classList.add("aplicado");
    } else {
        p1.classList.remove("parrafo");
        button.innerHTML = "Aplicar estilo a párrafo";
        button.classList.remove("aplicado");
    }
}, false)
