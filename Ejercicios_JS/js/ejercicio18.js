// a) Crear una plantilla Html5 con la siguiente estructura dentro del <body>:
// <header>CABECERA</header>
// <main><section>SECCION1<article>ARTICULO1
// </article></section></main><footer>PIE</footer>

// b) Buscar el elemento <header> y mostrar por consola el elemento encontrado. Realizar la búsqueda de 3 maneras diferentes :
//  getElementsByTagName, getElementById, querySelector

console.log(document.getElementsByTagName("header"));
console.log(document.getElementById("header"));
console.log(document.querySelector("header"));
