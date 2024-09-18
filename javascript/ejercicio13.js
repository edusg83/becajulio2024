try{
    throw new EvalError(['Se ha producido un error', ['ejercicio13.js', [12]]]);
} catch(e){ 
    console.error(e.name + ": " + e.message);
}

