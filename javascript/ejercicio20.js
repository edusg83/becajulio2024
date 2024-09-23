(function(){
    var doc = document,
    elem = doc.createElement("p"),
    pTres = doc.getElementById("tres");

   
    elem.innerHTML = "Este texto está añadido dinámicamente";
    elem.id = "conInner";

    
    pTres.parentNode.replaceChild(elem, pTres);
})();