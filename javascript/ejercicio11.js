
let funciones = {
    colorVerde: function() {
      console.log("VERDE");
    }
  };
  

  funciones.colorRojo = function() {
    console.log("ROJO");
    this.colorVerde();
  };

  funciones.colorRojo();
  