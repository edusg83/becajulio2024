(function(){
    var doc = document;
    var elem = doc.createElement("p");
    body = doc.body;
    elem.id = "parrafo1";
    
    elem.innerHTML = ".";

    body.appendChild(elem);
})();