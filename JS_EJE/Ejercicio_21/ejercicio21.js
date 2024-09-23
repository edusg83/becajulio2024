
function elementoDinamico() {

    const etiquetaP = document.createElement("p");
    const textoNodo = document.createTextNode("Este texto está añadido dinámicamente");
    etiquetaP.appendChild(textoNodo);
    document.querySelector("body").appendChild(etiquetaP);

    etiquetaP.setAttribute('id', 'parrafo1');

}

elementoDinamico();

function parrafoDiv() {

    const parrafo = document.querySelector(".parrafo").style.color="red";
    const padre = document.querySelector("div");
}

parrafoDiv();