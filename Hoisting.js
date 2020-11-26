// sólo suceden con var y con function que son palabras claves usadas en ecmascript 5 para abajo.
//en síntesis es cunado las funciones y variables se declaran antes de ser llamadas.

var miNombre; // declara

miNombre = "Harold"; // inicializa


console.log(miNombre); // undefined

var miNombre = "Harold";


// con Funciones. Se declaran primero las funciones que las variables. Es buena práctica declarar las funciones de primeras

hey(); // hola undefined

function hey() {
  console.log("hola " + miNombre);
}

var miNombre = "Harold"
