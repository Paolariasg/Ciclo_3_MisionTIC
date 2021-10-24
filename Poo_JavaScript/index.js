const Estudiante = require("./estudiante");

const objEstudiante = new Estudiante ("Pedro", 'Quintana', 'pedro@gmail.com');

/*objEstudiante.saludar ();
objEstudiante.setNombre ('Juan');
objEstudiante.setApellido ('Perez');
objEstudiante.setEmail ('Juan@gmail.com'); 

console.log (objEstudiante.nombre);
console.log (objEstudiante.apellido);
console.log (objEstudiante.email);
*/


const Materia = require("./materia");

const objMateria = new Materia
for (let i = 0; i < 50; i++){
    let codigo = 'm0' +i;
    let nombre = 'Matemáticas' +i;
    objMateria.matricularMateria (codigo, nombre, i);
}
objMateria.mostrarMaterias();
console.log('---------------');
console.log (objMateria.getMateria ("m05"));

console.log (objMateria.elevarCuadrado());