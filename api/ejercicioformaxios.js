const form = document.getElementById("formulario");

form.addEventListener('submit', function(element){
    element.preventDefault();

    const formData = new FormData(form);
    console.log(formData);

    const dataRequest = {
        "nombre": formData.get('nombre'),
        "apellidos": formData.get('apellidos'),
        "email": formData.get('email')
    }

    console.log(dataRequest);

    const headers = {
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin': '*'
    }

    let url = 'http://192.168.0.15:3000/usuarios'

    axios.post(url, dataRequest,{headers})
        .then((respuesta) =>{
            console.log("Se envio la informacion!");
        })
})