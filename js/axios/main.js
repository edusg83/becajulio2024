// Obtener datos usuarios
let tableBody3 = document.querySelector('#usuarios tbody');
    
axios.get('http://192.168.1.135:3000/usuarios')
    .then(response => {
        let data = response.data;
        let columnasTabla = '';

        data.forEach(function(user) {
            columnasTabla += '<tr>';
            columnasTabla += '<td><a href="usuarios.html?id='+user.id+'">' + user.id + '</a></td>';
            columnasTabla += '<td>' + user.nombre + '</td>';
            columnasTabla += '<td>' + user.apellidos + '</td>';
            columnasTabla += '<td>' + user.email + '</td>';
            columnasTabla += '<td><button class="btn btn-danger"onclick="remove(\'' + user.id + '\')">Eliminar</button></td>';
            columnasTabla += '</tr>';
        });

        tableBody3.innerHTML = columnasTabla;
    })
  
const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id');

let inputNombre; 
let inputApellidos;
let inputId; 
let inputEmaill; 

console.log(id);

axios.get('http://192.168.1.135:3000/usuarios')
.then(response => {
    let data = response.data; 
    console.log(data); 
    
    inputNombre = document.getElementById('nombre'); 
    inputApellidos = document.getElementById('apellidos'); 
    inputId = document.getElementById('usuarioId'); 
    inputEmail = document.getElementById('email'); 

    data.forEach((usuario) => {
        if(usuario.id == id){
            inputNombre.value = usuario.nombre; 
            inputId.value = usuario.id; 
            inputApellidos.value = usuario.apellidos; 
            inputEmail.value = usuario.email; 
        }
    })
   
}); 
const userForm = document.getElementById('userForm'); 

userForm.addEventListener('submit', function(element){
    element.preventDefault(); 

    const updatedUser = {
        nombre: inputNombre.value, 
        apellidos: inputApellidos.value,
        email: inputEmail.value
    }
    axios.put(`http://192.168.1.135:3000/usuarios/${id}`, updatedUser)
    .then(response => {
        console.log(response.data); 
        alert('Usuario actualizado correctamente');
    })
})

function remove(id){
    axios.delete(`http://192.168.1.135:3000/usuarios/${id}`)
    .then(response => {
        console.log('Usuario eliminado', response.data);

        alert('Usuario eliminado correctamente');

        location.reload(); 

    })  
}



