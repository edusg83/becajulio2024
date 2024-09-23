(function () {
    var doc = document,
        elem = doc.createElement("p"),
        body = doc.getElementById("body");


    elem.innerHTML = "<strong> hola </strong>";

    elem.setAttribute("class", "parrafo");
    body.appendChild(elem);  
}());