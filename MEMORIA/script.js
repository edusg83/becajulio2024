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
    
    const cartas = document.querySelector(".cartas");
    const adios = document.querySelector(".adios");
    let cartasSeleccionadas = [];
    let cartasSeleccionadasId = [];
    const cartasGanadoras = [];
    const mostrarResultado = document.querySelector("#puntos");

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
            cartaMatch[cartaUnoId].setAttribute('src', 'img/atras.png');
            cartaMatch[cartaDosId].setAttribute('src', 'img/atras.png');
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
        mostrarResultado.textContent = cartasGanadoras.length;
        if(cartasGanadoras.length === cartasArray.length/2) {
            mostrarResultado.textContent = "Ganador";
            const bye = document.createElement("img");
            bye.setAttribute('src', 'img/despedida.gif');
            adios.appendChild(bye);
        }

    }

    function voltearCarta() {
        let cartaId = this.getAttribute('data-id');
        cartasSeleccionadas.push(cartasArray[cartaId].name_img);
        cartasSeleccionadasId.push(cartaId);
        this.setAttribute('src', cartasArray[cartaId].img);
        if(cartasSeleccionadasId.length === 2) {
            setTimeout(coincidirImg, 500);
        }
    }

    crearEspacio();
})