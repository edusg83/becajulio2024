(function (params) {
    var body = document.body,
    p = document.createElement("p"),
    button = document.createElement("button");

p.id = "p1";
p.textContent = "Párrafo1";
body.appendChild(p);

button.id = "boton1";
button.onclick = cambiarEstilo
button.textContent = "Aplicar estilo a párrafo";
p.appendChild(button);

function cambiarEstilo() {

    if (!p.classList.contains("parrafo")) {
        p.classList.add("parrafo");
        button.textContent = "Quitar estilo a párrafo";
        button.classList.add("aplicado");
    } else {
        p.classList.remove("parrafo");
        button.textContent = "Aplicar estilo a párrafo";
        button.classList.remove("aplicado");
    }
};
    
}());


