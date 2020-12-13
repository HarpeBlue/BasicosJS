var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

console.log(frutas);

console.log(frutas.length);

console.log(frutas[2]);


// Tenemos ciertos métodos para mutar nuestros Arrays agregando o quitando elementos

var masFrutas = frutas.push("Uvas"); //Empujar al final del Array

console.log(frutas);

console.log(masFrutas);

var ultimo = frutas.pop(); //Eliminar el último elemento del Array

console.log(frutas);

var nuevaLongitud = frutas.unshift("Uvas") //Agrega el primer elemento en un Array

console.log(frutas);

var borrarFruta  = frutas.shift(); //Elimina el primer elemento de un Array

console.log(frutas);
console.log(borrarFruta);

var posicion = frutas.indexOf("Cereza"); //Para encontrar la posición de un elemento de un array

console.log(posicion);