let ArrayCards = Array.from(document.getElementsByClassName("card"));

// Hacer un mapa donde guarde key y url

// Asignar la key de forma aleatoria con cada partida

function randomGenerator() {
  return Math.floor(Math.random() * 8 + 1);
}

function asignValue() {
  ArrayCards.forEach((element) => {
    element.value = randomGenerator();
    console.log(element.value);
  });
}

function toggleEffect(param) {
  let button = document.getElementById(param);
  console.log(button.classList);
  button.classList.toggle("test");
  console.log(button.classList);
}
