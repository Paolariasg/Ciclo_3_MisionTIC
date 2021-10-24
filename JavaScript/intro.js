const functions = require("./functions");

functions.saludar ();

var result = functions.sumar (5, 5);
console.log ('Resultado:', result);

let band = functions.validar ("a");
console.error (band);

band = functions.validar ('Hola mundo');
console.log (band);

let nu = functions.mayorque (2);
console.log (nu);

let numFiltro = functions.filtro (5);
console.log (numFiltro);