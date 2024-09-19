const cards = Array.from(document.getElementsByClassName("card"));

const imagenes = [
  "/Parejas/resources/Squirtle.jpg",
  "/Parejas/resources/Pikachu.jpg",
  "/Parejas/resources/Eevee.jpg",
  "/Parejas/resources/Togepi.jpg",
  "/Parejas/resources/Jigglypuff.jpg",
  "/Parejas/resources/Bulbasaur.jpg",
  "/Parejas/resources/Psyduck.jpg",
  "/Parejas/resources/Charmander.jpg",
];

//Mapa para controlar la repeticion de imagenes
const imageMap = new Map();

//Mapa para controlar los valores asignados a cada carta
const valueMap = new Map();

for (let i = 0; i < imagenes.length; i++) {
  imageMap.set(imagenes[i], 0);
}

for (let i = 0; i < imagenes.length; i++) {
  valueMap.set(i, 0);
}

//ACUERDATEEEEE
console.log(imageMap); //DEVUELVE MAPA ENTERO
console.log(imageMap.get(imagenes[1])); //DEVUELVE VALOR

function randomGenerator() {
  return Math.floor(Math.random() * imagenes.length);
}

function asignValue() {
  cards.forEach((element) => {
    element.value = randomGenerator();
  });
}

function assignImage() {
  cards.forEach(function (card) {
    let index = randomGenerator();

    while (imageMap.get(imagenes[index]) == 2) {
      index = randomGenerator();
    }

    card.children[0].style.backgroundImage = `url(${imagenes[index]})`;

    //POR QUE NO DEJA OPERAR DIRECTAMENTE SOBRE EL VALOR?!?!?!?!?!
    let suma = imageMap.get(imagenes[index]) + 1;

    imageMap.set(imagenes[index], suma);
  });
}

function toggleEffect(param) {
  let button = document.getElementById(param);
  button.classList.toggle("rotateEffect");
  button.children[0].classList.toggle("opacity-100");
}
