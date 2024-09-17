
let funciones = {
    colorVerde: function() {
      console.log("VERDE");
    }
  };
  
  funciones.colorRojo = function() {
    console.log(funciones.colorVerde());
  };

  funciones.colorRojo();
  