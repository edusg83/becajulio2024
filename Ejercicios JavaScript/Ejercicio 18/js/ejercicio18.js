// Método 1: Buscar el elemento <header> usando getElementsByTagName
let headerByTagName = document.getElementsByTagName('header')[0];
console.log('Resultado con getElementsByTagName:', headerByTagName);

// Método 2: Buscar el elemento <header> usando getElementById
let headerById = document.getElementById('cabecera');
console.log('Resultado con getElementById:', headerById);

// Método 3: Buscar el elemento <header> usando querySelector
let headerByQuerySelector = document.querySelector('header');
console.log('Resultado con querySelector:', headerByQuerySelector);
