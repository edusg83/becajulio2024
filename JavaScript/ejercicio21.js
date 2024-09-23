let parrafo = document.createElement("p");

parrafo.setAttribute("id", "p1");
parrafo.textContent = "Párrafo 1";

document.body.appendChild(parrafo);

let boton = document.createElement("button");

boton.setAttribute("id", "boton1");
boton.textContent = "Aplicart estilo al párrafo";
parrafo.appendChild(boton);


boton.addEventListener("click", function(){
    if(!parrafo.classList.contains("parrafo")){
        parrafo.classList.add("parrafo");
        boton.textContent = "Quitar estilo al párrafo";
        boton.classList.add("aplicado");
    }else{
        parrafo.classList.remove("parrafo");
        boton.textContent ="Aplicar estilo al parrafo";
        boton.classList.remove("aplicado");
    }
});