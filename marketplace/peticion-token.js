const url="https://apilater.azurewebsites.net/api/token";

const headers={
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
}
    const request={
        "username":"usertest@gmail.com",
        "password":"aaa"
    }

    axios.post(url,request, {headers})
    .then(respuesta=>{
        const token = respuesta.data;
        sessionStorage.setItem("token",token); //Almacenar token en Session storage

    const base64Url = token.split('.')[1]; // Esto es el payload (segunda parte del JWT)
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); //Reemplazo contenido para base64

    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) { //UTF8 - decodificación

    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
}).join(''));

const objectJWT=JSON.parse(jsonPayload);


    if (objectJWT.role==="admin"){
        console.log(objectJWT.role);
    }

    console.log(objectJWT);
    })
    

    let tokenRecuperado = sessionStorage.getItem("token");
    console.log(tokenRecuperado);