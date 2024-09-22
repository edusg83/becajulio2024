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
    
    const cartas = document.querySelector(".cartas");

    function crearEspacio() {
        for(let i = 0; i < cartasArray.length; i++){
            let carta = document.createElement('img');
            carta.setAttribute('src', 'img/sakura.png');
            carta.setAttribute('data-id', i);
            carta.style.margin = "12px";
            cartas.appendChild(carta);
        }
    }
    crearEspacio();
})