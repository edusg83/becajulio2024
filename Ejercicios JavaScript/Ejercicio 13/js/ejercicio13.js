// Bloque try...catch
try {
    // Lanzar un EvalError con un mensaje personalizado
    throw new EvalError('Se ha producido un error', 'ejercicio13.js', 100);
} catch (error) {
    // Mostrar por consola los detalles del error
    console.error(`Nombre del error: ${error.name}`);
    console.error(`Mensaje del error: ${error.message}`);
    console.error(`Archivo: ${error.fileName || 'ejercicio13.js'}`);
    console.error(`Línea: ${error.lineNumber || 100}`);
}
