//FUNCIÓN PARA MANIPULAR EL DOM
function cambiarImagen(){
    document.getElementById("img1").src = "https://image.goat.com/750/attachments/product_template_pictures/images/060/556/759/original/815560_00.png.png";
}




/********* VARIABLES *********/
const numero_5 = 5;
var cadena = "Hola mundo";
let numero_decimal = 10.2;

/********* FUNCIONES *********/
function saludar() {
    alert("Hola mundo")
}

function operacion() {
    sumar(5, 2)
}

function sumar(num1, num2) {
    return num1 + num2;
}

let functionFlecha = () =>  {
    console.log("Esto es una función flecha")
}

/********* CICLOS *********/
for (let i = 0; i < 10; i++) {
    console.log(i);
}

let personas = ["Juan", "Ana", "Andrés", "Rubén"]
for (let i = 0; i < personas.length; i++) {
    console.log(personas[i]);
}

console.log("-------FORECH-------")
personas.forEach(element => {
    console.log(element);
});

console.log("-------WHILE-------")
let contador = 0;
while (contador < personas.length) {
    console.log(personas[contador]);
    ++contador;

    if (contador == 2) {
        console.log("Terminando recorrido...");
    }
}

//ESTRUCTURAS DE DESICIÓN
