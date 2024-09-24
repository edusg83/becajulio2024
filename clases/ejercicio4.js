const headers = {
    'Content-Type': 'application/json', 
    'Access-Control-Allow-Origin': '*'
};

const urlClientes = 'http://192.168.1.54:3000/clientes';

axios.get(urlClientes, { headers })
    .then((respuestaUsuarios) => {
        const users = respuestaUsuarios.data.arrayUsuarios; 
            
            const primerUsuario = users[0]; 

            const { nombre, apellidos, direcciones } = primerUsuario;

            let cardHTML = `
                <div class="card">
                    <div class="card-body">
                        <h2 class="card-title">${nombre} <br> ${apellidos}</h2>
                        <h3 class="card-subtitle mb-2 text-muted">Direcciones:</h3>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Dirección</th>
                                    <th>Código Postal</th>
                                </tr>
                            </thead>
                            <tbody>`;

            
           
                direcciones.forEach(direccion => {
                    cardHTML += `
                        <tr>
                            <td>${direccion.direccion}</td>
                            <td>${direccion.cpostal}</td>
                        </tr>`;
                });
            

            cardHTML += `
                            </tbody>
                        </table>
                    </div>
                </div>
            `;

            
            document.getElementById("resultado").innerHTML = cardHTML;
        
    });
