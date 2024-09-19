(function () {
    //let jugador1 = prompt("Introduce el nombre del jugador 1");
    //let jugador2 = prompt("Introduce el nombre del jugador 2");

    document.getElementById("titulo_turno").innerText += ' ' + jugador1;
    document.getElementById("jugador1").innerText += ' ' + jugador1;
    document.getElementById("jugador2").innerText += ' ' + jugador2;

    let imagenes = [1,2,3,4,5,6,7,8];
    let cartas = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

    function numeroAleatorio(array) {
        let random = Math.floor(Math.random() * array.length + 1);
        array.splice(array.indexOf(random), 1);
        return random;

    }

    function asignarImagenes(imagen, carta1, carta2) {
        document.getElementById(carta1).setAttribute("src", `../imagesparejas/${imagen}.png`);
        document.getElementById(carta2).setAttribute("src", `../imagesparejas/${imagen}.png`);
    }

    for(let i = 0; i < 8; i++) {
        let imagen = numeroAleatorio(imagenes);
        let carta1 = numeroAleatorio(cartas);
        let carta2 = numeroAleatorio(cartas);
        asignarImagenes(imagen, carta1, carta2);
    }

    let imagen_selec1;
    let imagen_selec2;

    function asignarValue( value ) {
        if ( imagen_selec1 == undefined ) {
            imagen_selec1 = value;
        } else {
            imagen_selec2 = value;
        }
    }

    function comprobarPareja(imagen_selec1, imagen_selec2) {
        if ( imagen_selec1 === imagen_selec2 ){
            return true;
        } else {
            return false;
        }
    }

}())