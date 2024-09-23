(function () {
    var doc = document;

    elem = doc.createElement("p");
    
    body = doc.getElementById("body");

    elem.innerHTML = "Este texto se añadio dinámicamente!"

    //console.log(elem);

    body.appendChild(elem);

}());