(function() {
    let doc = document,

     elem = doc.createElement('p'),

     body = doc.getElementById('body');

     elem.innerHTML = "Este texto fue añadido automaticamente";
     elem.setAttribute('id', 'parrafo1');

     body.appendChild(elem);

    }());