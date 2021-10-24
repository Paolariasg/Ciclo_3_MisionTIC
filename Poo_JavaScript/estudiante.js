const Materia = require("./materia");

class Estudiante {

    constructor (nombre, apellido, email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }

    setNombre (nombre) {
        this.nombre = nombre;
    }

    setApellido (apellido) {
        this.apellido = apellido;
    }

    setEmail (email) {
        this.email = email;
    }

    //Métodos
    saludar () {
        console.log('Hola mundo');
    }

    sumar (num1, num2) {
        return num1 + num2;
    }




}

module.exports = Estudiante;


