let a = 5;
let b = 5;

try {
  throw new EvalError("Se ha producido un error", "ejercicio13.js", 100);
} catch (error) {
  console.error(error);
  console.log(error.fileName);
  console.log(error.lineNumber);
}