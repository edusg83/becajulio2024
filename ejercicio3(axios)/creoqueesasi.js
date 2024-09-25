
const endpoint = 'http://192.168.1.26:3000/clientes';

axios.get(endpoint)
    .then(response => {
        const data = response.data;

        //quitar clientes
        const primerUsuario = data[0].arrayUsuarios[0];

        //se establece el nombre y apellido en el h5 con id nombre 
        document.getElementById('nombre').textContent = `${primerUsuario.nombre} ${primerUsuario.apellidos}`;

      //mirar documentacion para estar seguro 
        const mostrarDirecciones = document.getElementById('direcciones');
    //consultar mejor el funcionamiento - se crea la tabla que contendra las direcciones del usuario junto al codigo postal
        primerUsuario.direcciones.forEach(direc => {
            const fila = document.createElement('tr');
            
            const direccion = document.createElement('td');
            direccion.textContent = direc.direccion;
            
            const postal = document.createElement('td');
            postal.textContent = direc.cpostal;
        
            fila.appendChild(direccion);
            fila.appendChild(postal);
       
            mostrarDirecciones.appendChild(fila);
        });
    })

