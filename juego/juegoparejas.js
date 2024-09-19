
function numeroAleatorioImagen() {
    return Math.floor(Math.random() * 8 + 1);
}

function numeroAleatorioButton() {
    return Math.floor(Math.random() * 16 + 1);
}

let jugador1;
let jugador2;

function iniciarJuego() {

    let botones = `                
    <div>
        <button id="button1"><img id="imagen1"></button>
        <button id="button2"><img id="imagen2"></button>
        <button id="button3"><img id="imagen3"></button>
        <button id="button4"><img id="imagen4"></button>
    </div>
    <div>
        <button id="button5"><img id="imagen5"></button>
        <button id="button6"><img id="imagen6"></button>
        <button id="button7"><img id="imagen7"></button>
        <button id="button8"><img id="imagen8"></button>
    </div>
    <div>
        <button id="button9"><img id="imagen9"></button>
        <button id="button10"><img id="imagen10"></button>
        <button id="button11"><img id="imagen11"></button>
        <button id="button12"><img id="imagen12"></button>
    </div>
    <div>
        <button id="button13"><img id="imagen13"></button>
        <button id="button14"><img id="imagen14"></button>
        <button id="button15"><img id="imagen15"></button>
        <button id="button16"><img id="imagen16"></button>
    </div>`

    document.getElementById("colCartas").innerHTML = botones;


    jugador1 = "";
    jugador2 = "";

    jugador1 = prompt("Introduce el nombre del jugador1");
    jugador2 = prompt("Introduce el nombre del jugador2");

    document.getElementById("p-header").innerHTML += jugador1;
    document.getElementById("p-body-1").innerHTML = jugador1;
    document.getElementById("p-body-2").innerHTML = jugador2;

    let imagenesIntroducidas = [];
    let botonesIntroducidos = [];

    for (let i = 0; i < 8; i) {

        let imagen = numeroAleatorioImagen();

        let button1 = numeroAleatorioButton();
        let button2 = numeroAleatorioButton();

        if (button1 === button2) {
            button1 = numeroAleatorioButton();
            button2 = numeroAleatorioButton();
        }

        if (!imagenesIntroducidas.includes(imagen) && !botonesIntroducidos.includes(button1) && !botonesIntroducidos.includes(button2) && button1 != button2) {
            console.log("Hola");
            imagenesIntroducidas.push(imagen);
            botonesIntroducidos.push(button1);
            botonesIntroducidos.push(button2);

            //document.getElementById(`imagen${button1}`).setAttribute("src", `../imagesparejas/${imagen}.png`);
            //document.getElementById(`imagen${button2}`).setAttribute("src", `../imagesparejas/${imagen}.png`);

            document.getElementById(`button${button1}`).setAttribute("value", `${imagen}`);
            document.getElementById(`button${button2}`).setAttribute("value", `${imagen}`);

            document.getElementById(`button${button1}`).setAttribute("onclick", `prepararJugada(${imagen}, ${button1})`);
            document.getElementById(`button${button2}`).setAttribute("onclick", `prepararJugada(${imagen}, ${button2})`);

            i++;
        }
    }
}

let puntosJugador1 = 0;
let puntosJugador2 = 0;


let carta1;
let carta2;
let imagen1;
let imagen2;
let turno = false; // jugador1 = false jugador2 = true

function prepararJugada(imagen, button) {

    document.getElementById(`imagen${button}`).setAttribute("src", `../imagesparejas/${imagen}.png`);

    if (imagen1 == undefined) {
        imagen1 = imagen;
        carta1 = button;
        document.getElementById(`button${carta1}`).setAttribute("disabled", "disabled");
    } else {
        imagen2 = imagen;
        carta2 = button;
        document.getElementById(`button${carta1}`).setAttribute("disabled", "disabled");

        if (imagen1 == imagen2) {
            asignarAcierto();
        } else {
            setTimeout(function () {
                turno = !turno;

                if (turno == false) {
                    document.getElementById("p-header").innerHTML = "Turno de " + jugador1;
                } else {
                    document.getElementById("p-header").innerHTML = "Turno de " + jugador2;
                }


                document.getElementById(`button${carta1}`).removeAttribute("disabled");
                document.getElementById(`button${carta2}`).removeAttribute("disabled");

                document.getElementById(`imagen${carta1}`).removeAttribute("src");
                document.getElementById(`imagen${carta2}`).removeAttribute("src");

                imagen1 = undefined;
                imagen2 = undefined;
                carta1 = undefined;
                carta2 = undefined;


            }, 500);


        }


    }
}

function asignarAcierto() {

    if (turno == false) {
        document.getElementById("resultado1").innerHTML += " ✅";
        ++puntosJugador1;

    } else {
        document.getElementById("resultado2").innerHTML += " ✅";
        ++puntosJugador2;
    }

    if (puntosJugador1 + puntosJugador2 === 8) {

        let nombreGanador = puntosJugador1 > puntosJugador2 ? jugador1 : jugador2;
        let puntosGanador = puntosJugador1 > puntosJugador2 ? puntosJugador1 : puntosJugador2;

        if (puntosJugador1 === puntosJugador2) {
            alert("Empate!");
        } else {
            setTimeout(function(){

            },1500)

            alert("Ha ganado " + nombreGanador + " con " + puntosGanador + " puntos!");
        }


        puntosJugador1 = 0;
        puntosJugador2 = 0;
    }

    console.log("Acierto!");
    imagen1 = undefined;
    imagen2 = undefined;
    carta1 = undefined;
    carta2 = undefined;
}
