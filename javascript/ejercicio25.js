fetch(request)

   .then(response=>response.json())

   .then(data=>{

    dibujarCard(data);

   });
   function dibujaCard(datos){

    console.log("Ya estamos fuera de la promesa");
   }