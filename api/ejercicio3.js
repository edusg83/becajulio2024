const request = new Request('http://192.168.0.15:3000/clientes');

fetch(request)
    .then(response => response.json())
    .then(data => {
        //console.log(data[0].arrayUsuarios[0]);
        for(let i = 0;  i < data[0].arrayUsuarios.length; i++){
            if ( i === 0 ) {
                //console.log(data[0].arrayUsuarios[0]);
                pintarCard(data[0].arrayUsuarios[i]);
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