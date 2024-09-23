document.addEventListener('DOMContentLoaded', () => {
    const cartasArray = [
        {
            name_img: 'memoria1',
            img: 'img/memoria1.png'
        },
        {
            name_img: 'memoria2',
            img: 'img/memoria2.png'
        },
        {
            name_img: 'memoria3',
            img: 'img/memoria3.png'
        },
        {
            name_img: 'memoria4',
            img: 'img/memoria4.png'
        },
        {
            name_img: 'memoria5',
            img: 'img/memoria5.png'
        },
        {
            name_img: 'memoria6',
            img: 'img/memoria6.png'
        },
        {
            name_img: 'memoria7',
            img: 'img/memoria7.png'
        },
        {
            name_img: 'memoria8',
            img: 'img/memoria8.png'
        },
        {
            name_img: 'memoria9',
            img: 'img/memoria9.png'
        },
        {
            name_img: 'memoria10',
            img: 'img/memoria10.png'
        },
        {
            name_img: 'memoria11',
            img: 'img/memoria11.png'
        },
        {
            name_img: 'memoria12',
            img: 'img/memoria12.png'
        },
        {
            name_img: 'memoria1',
            img: 'img/memoria1.png'
        },
        {
            name_img: 'memoria2',
            img: 'img/memoria2.png'
        },
        {
            name_img: 'memoria3',
            img: 'img/memoria3.png'
        },
        {
            name_img: 'memoria4',
            img: 'img/memoria4.png'
        },
        {
            name_img: 'memoria5',
            img: 'img/memoria5.png'
        },
        {
            name_img: 'memoria6',
            img: 'img/memoria6.png'
        },
        {
            name_img: 'memoria7',
            img: 'img/memoria7.png'
        },
        {
            name_img: 'memoria8',
            img: 'img/memoria8.png'
        },
        {
            name_img: 'memoria9',
            img: 'img/memoria9.png'
        },
        {
            name_img: 'memoria10',
            img: 'img/memoria10.png'
        },
        {
            name_img: 'memoria11',
            img: 'img/memoria11.png'
        },
        {
            name_img: 'memoria12',
            img: 'img/memoria12.png'
        }
    ]

    cartasArray.sort(() => 0.5 - Math.random());

    let jugador1 = "Jugador 1";
    let jugador2 = "Jugador 2";
    let contador1 = 0;
    let contador2 = 0;
    let jugadorDeTurno = jugador1;
    let contadorTurno = 0;
    const cartas = document.querySelector(".cartas");
    const adios = document.querySelector(".adios");
    let cartasSeleccionadas = [];
    let cartasSeleccionadasId = [];
    const cartasGanadoras = [];
    const mostrarResultado = document.querySelector("#jugador");

    function crearEspacio() {
        for(let i = 0; i < cartasArray.length; i++){
            let carta = document.createElement('img');
            carta.setAttribute('src', 'img/sakura.png');
            carta.setAttribute('data-id', i);
            carta.style.margin = "12px";
            carta.addEventListener('click', voltearCarta);
            cartas.appendChild(carta);
        }
    }

    function coincidirImg() {
        let cartaMatch = document.querySelectorAll('img');
        const cartaUnoId = cartasSeleccionadasId[0];
        const cartaDosId = cartasSeleccionadasId[1];
        if(cartaUnoId == cartaDosId) {
            cartaMatch[cartaUnoId].setAttribute('src', 'img/sakura.png');
            cartaMatch[cartaDosId].setAttribute('src', 'img/sakura.png');
        }
        else if (cartasSeleccionadas[0] === cartasSeleccionadas[1]){
            cartaMatch[cartaUnoId].removeEventListener('click', voltearCarta);
            cartaMatch[cartaDosId].removeEventListener('click', voltearCarta);
            cartasGanadoras.push(cartasSeleccionadas);
        }
        else {
            cartaMatch[cartaUnoId].setAttribute('src', 'img/sakura.png');
            cartaMatch[cartaDosId].setAttribute('src', 'img/sakura.png');
        }
        cartasSeleccionadas=[];
        cartasSeleccionadasId=[];

        cartaMatch.onclick = turnos(true);

        if(cartasGanadoras.length === cartasArray.length/2) {
            mostrarResultado.textContent = "Ganador";
            const bye = document.createElement("img");
            bye.setAttribute('src', 'img/despedida.gif');
            adios.appendChild(bye);
        }
    }

    function turnos(e) {
        if (e) {
            if (jugadorDeTurno === jugador1) {
                contadorTurno++;
                document.getElementById("contador1").innerText = `Aciertos: ${contador1}`;
            } else {
                contador2++;
                document.getElementById("contador2").innerText = `Aciertos: ${contador2}`;
            }
        }

        jugadorDeTurno= (jugadorDeTurno === jugador1) ? jugador2 : jugador1;

        contadorTurno++;

        document.getElementById("jugadorDeTurno").innerText = `Turno de ${jugadorDeTurno} (Turno ${contadorTurno})`;
    }

    function voltearCarta() {
        let cartaId = this.getAttribute('data-id');
        cartasSeleccionadas.push(cartasArray[cartaId].name_img);
        cartasSeleccionadasId.push(cartaId);
        this.setAttribute('src', cartasArray[cartaId].img);
        if(cartasSeleccionadasId.length === 2) {
            setTimeout(coincidirImg, 700);
        }
    }

    crearEspacio();
})