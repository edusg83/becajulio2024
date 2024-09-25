const request = "http://192.168.1.162:3000/usuarios";
const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
};
const form = document.getElementById("formulario");

form.addEventListener('submit', function (element) {
    element.preventDefault();
    const formData = new FormData(form);
    console.log(formData);

    const dataRequest = {
        "nombre": formData.get("nombre"),
        "apellidos": formData.get("apellidos"),
        "email": formData.get("email")
    }

    axios.post(request, dataRequest, { headers })
        .then((response) => {
            window.location.assign('ejercicio.html');
        })
})