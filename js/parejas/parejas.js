let doblesparejas = ["1.png", "2.png", "3.png", "4.png", "5.png",
    "6.png", "7.png", "8.png", "9.png", "10.png",
    "11.png", "12.png", "13.png", "14.png", "15.png",
    "1.png", "2.png", "3.png", "4.png", "5.png",
    "6.png", "7.png", "8.png", "9.png", "10.png",
    "11.png", "12.png", "13.png", "14.png", "15.png"]

let parejasMezcladas = barajarArray(doblesparejas);

let jugada = { carta1: { id: '', src: '' }, carta2: { id: '', src: '' } }
let puntuacio1 = 0
let puntuacio2 = 0
let nombreJugador1
let nombreJugador2
window.onload = function () {

    ocultarCartas()
    pedirJugadores();
    //cambiarJugador();

}

function cambiarJugador() {
    let sectionJugador1 = document.getElementById("jugador1")
    let sectionJugador2 = document.getElementById("jugador2")

    console.log(sectionJugador1.className)
    console.log(sectionJugador2.className)
    if (sectionJugador1.className == "jugador_selec") {
        sectionJugador1.className = "jugador_deselec";
        sectionJugador2.className = "jugador_selec";
    } else {
        sectionJugador1.className = "jugador_selec";
        sectionJugador2.className = "jugador_deselec";
    }
}

function revelar(id) {
    let img = document.getElementById("" + id); // Seleccionamos la imagen por ID

    if (img.src.endsWith("img/reverso.png") && (jugada.carta1.id.length == 0 || jugada.carta2.id.length == 0)) {

        img.src = "img/" + parejasMezcladas[id - 1]; // Asignamos la imagen correspondiente

        if (jugada.carta1.id.length != 0) {
            jugada.carta2.src = parejasMezcladas[id - 1];
            jugada.carta2.id = id;
        } else {
            jugada.carta1.src = parejasMezcladas[id - 1];
            jugada.carta1.id = id;
        }
        if (jugada.carta1.src == jugada.carta2.src) {
            let sectionJugador1 = document.getElementById("jugador1")
            if (sectionJugador1.className == "jugador_selec") {
                puntuacio1 += 1
            } else {
                puntuacio2 += 1
            }
            document.getElementById("score1").innerHTML = "Puntuacion: " + puntuacio1;
            document.getElementById("score2").innerHTML = "Puntuacion: " + puntuacio2;
            jugada = { carta1: { id: '', src: '' }, carta2: { id: '', src: '' } }
            comprobarGanador((puntuacio1+puntuacio2))
        } else if (jugada.carta1.src.length > 0 && jugada.carta2.src.length > 0) {
            setTimeout(function () {
                let img1 = document.getElementById("" + jugada.carta1.id); // Seleccionamos la imagen por ID
                img1.src = "img/reverso.png"
                let img2 = document.getElementById("" + jugada.carta2.id); // Seleccionamos la imagen por ID
                img2.src = "img/reverso.png"
                jugada = { carta1: { id: '', src: '' }, carta2: { id: '', src: '' } }
                cambiarJugador()
            }, 1000);
        }
    }
}

function ocultarCartas() {
    document.getElementById("score1").innerHTML = "Puntuacion: " + puntuacio1;
    document.getElementById("score2").innerHTML = "Puntuacion: " + puntuacio2;
    for (let i = 1; i <= 30; i++) {
        let img = document.getElementById("" + i); // Seleccionamos la imagen por ID
        img.src = "img/reverso.png"; // Asignamos la imagen correspondiente
    }
}

function barajarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
function comprobarGanador(i){
    console.log(i);
    if(i == 15){
        console.log("estoy")
        if(puntuacio1 > puntuacio2){
            prompt("Has resultado ganador, " + nombreJugador1+ " Felicidades, eres un maquina")
        }else if(puntuacio2 > puntuacio1){
            prompt("Has resultado ganador, " + nombreJugador2+ " Felicidades, eres un crack")
        }else{
            prompt("Increible, habeis empatado, Felicidades " +nombreJugador2 + " y " + nombreJugador1)
        }
    }
}

function pedirJugadores() {
    nombreJugador1 = prompt("Ingrese el nombre del jugador 1")
    nombreJugador2 = prompt("Ingrese el nombre del jugador 2")
    document.getElementById("jug1").innerHTML = "Jugador 1: " + nombreJugador1;
    document.getElementById("jug2").innerHTML = "Jugador 2: " + nombreJugador2;
}
function barajar() {
    // Mezclamos el array de imágenes
    let parejasMezcladas = barajarArray([...doblesparejas]);

    // Asignamos las imágenes a los elementos <img> con ids del 1 al 30
    for (let i = 1; i <= 30; i++) {
        let img = document.getElementById("" + i); // Seleccionamos la imagen por ID
        img.src = "img/" + parejasMezcladas[i - 1]; // Asignamos la imagen correspondiente
    }
    comprobarGanador(15);
}