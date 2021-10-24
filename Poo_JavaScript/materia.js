/*********************
 * Cree una clase llamada Materia,
 * y desarrolle un método que le permita 
 * al estudiante matricular y consultar
 * materias.
 * atributos de Materia:
 *      codigo, nombre
 */

class Materia {

    constructor (codigo, nombre, nota) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.nota = nota;
        this.materias = [];
    }

    matricularMateria (codigo, nombre, nota){
        let objMateria = new Materia (codigo, nombre, nota);
        this.materias.push(objMateria);
    }

    mostrarMaterias () {
        this.materias.forEach (element =>{
            console.log (element.codigo + "-" + element.nombre);
        });
    }

    getMateria (codigo) {
        let objMateria = this.materias.filter (m => (m.codigo == codigo));            
        return objMateria;
    }

    elevarCuadrado () {
        let tempo = this.materias.map (m => {
            m.nota *= 2;
            return m;
        });
        return tempo;
    }
}

module.exports = Materia;