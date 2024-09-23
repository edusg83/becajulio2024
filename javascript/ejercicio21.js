(function(){
    var doc = document;
    var elemP = doc.createElement("p");
    var body = doc.body; 
    elemP.innerHTML = "Parrafo 1";
    elemP.id = "p1";
    
    body.appendChild(elemP);
})();

//-----------

(function(){
    var doc = document;
    var boton = doc.createElement("button");
    var parrafo = doc.getElementById("p1");
    boton.innerHTML = "Aplicar estilo a párrafo";
    boton.id = "boton1";
    
    parrafo.appendChild(boton);

})();


//-----------


 var parrafo = document.getElementById("p1");
 var botonEvent = document.getElementById("boton1");

 botonEvent.onclick = function() {
    if (!parrafo.classList.contains("parrafo")) {
        parrafo.classList.add("parrafo"); 
        botonEvent.innerHTML = "Quitar estilo a párrafo"; 
        botonEvent.classList.add("aplicado"); 
    }else{
        parrafo.classList.remove("parrafo"); 
        botonEvent.innerHTML = "Aplicar estilo a párrafo"; 
        botonEvent.classList.remove("aplicado"); 
    }

}