

const pantalla = document.getElementById("resultado"); 

function addpantalla(input){
	pantalla.value += input;
}

function calcular() {
	pantalla.value = eval(pantalla.value);
}