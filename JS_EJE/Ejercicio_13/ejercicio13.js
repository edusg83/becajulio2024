try {

    throw new EvalError(['Se ha producido un error', ['ejercicio13.js', [100]]]);

} catch(e) { 

    console.error(e.name + ": " + e.message);

}