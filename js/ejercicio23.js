
let submit = document.getElementById("submit");

submit.addEventListener("click", comprobarFormulario, false);


function comprobarFormulario(event) {

    event.preventDefault();

    let ok = true;

    let formulario = document.forms.form1;
    let nombre = formulario.nombre.value;
    let email = formulario.email.value;
    let provincia = formulario.provincia.value;
    let errorMensaje = document.getElementById("mensajeError");

    if (nombre.length > 20 || nombre != "ANTONIO") {
        ok = false;
    }

    if ( nombre === "" || email === "" || provincia === ""){
        ok = false;
    }

    if (ok) {
        addInfo(nombre, email, provincia);
        if ( errorMensaje != null){
            errorMensaje.innerHTML = "";
        }
        return true;
    } else {
        mostrarError();
        return false;
    }
};

function addInfo(nombre, email, provincia){

    info = document.getElementById("info");

    info.innerHTML = nombre + ", " + email + ", " + provincia;
}

function mostrarError(){

    let form = document.getElementById("form1");
    let legend = document.getElementById("legend");

    let p = document.createElement("p");
    p.setAttribute("id", "mensajeError")
    p.innerHTML = "Los datos del formulario no son correctos!";

    form.insertBefore(p, legend);
}




