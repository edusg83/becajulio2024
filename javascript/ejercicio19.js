(function(){
    var doc = document;
    var elem = doc.createElement("p");
    var body = doc.body; 

    
    elem.innerHTML = "Este texto está añadido dinámicamente";
    elem.id = "conInner";

    
    body.appendChild(elem);
})();