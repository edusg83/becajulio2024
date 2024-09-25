const request = new Request('http://192.168.1.121:3000/clientes');

fetch(request)
.then(response => response.json())
.then(data =>{
   for(let i=0; i<data[0].arrayUsuarios.length; i++){
      if(i === 0){
         pintarCard(data[0].arrayUsuarios[i]);
      }
   }
})

function pintarCard(usuario){
let card = `
<div id="top" class="card" style="background-color: grey; width: 40%; padding: 15px;">
   <p>${usuario.nombre}</p>
   <p>${usuario.apellidos}</p>
   
   <table>
   <thead>
      <th>Direccion</th>
      <th>Codigo Postal</th>
   </thead>
   <tbody id="tbody">
   
   </tbody>
   </table>
</div>`;

   document.getElementById('body').innerHTML += card;

   for(dir of usuario.direcciones){
      let direcciones =`
      <tr>
         <td>${dir.direccion}</td>
         <td>${dir.cpostal}</td>
      </tr>`;
      document.getElementById('tbody').innerHTML += direcciones;
   }

}