const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*'
}

const urlClients = 'http://192.168.0.15:3000/clientes';

axios.get(urlClients,{headers})
.then((respuestaClientes) =>{
    let users = respuestaClientes.data[0].arrayUsuarios;
    console.log(users);

   for(let i  = 0; i < users.length; i++){
        console.log(users[i]);
        if ( i === 0 ){
            pintarCard(users[i]);
        }
   }

})

function pintarCard(user) {
    let card = `
    <div id="top" class="card" style="background-color: grey; width: 40%; padding: 15px">
                <p>${user.nombre}</p>
                <p>${user.apellidos}</p>
        <table>
        <thead>
                <th>Direccion</th>
                <th>Codigo Postal</th>
        </thead>
        <tbody id = "tbody">
   
        </tbody>
        </table>
    </div>
    `;

    document.getElementById("body").innerHTML += card;

    for( dir of user.direcciones){
        
        let direccion = `
        <tr>
            <th>${dir.direccion}</th>
            <th>${dir.cpostal}</th>
        </tr>
    `;
    document.getElementById("tbody").innerHTML += direccion ;
    }

    

}