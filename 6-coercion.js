/*

  Coerción es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción:
  Coerción implícita = es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
  Coerción explicita = es cuando obligamos a que cambie el tipo de valor.

*/

// Implícita

var a = 4 + "7"; // 47 hace una concatenación con el + provocando una coercion implicita.

typeof a // "string"

var b = 4 * "7"; // 28 también implícita pero ya lo toma como una operación

typeof b // "number"

// Explícita

var a = 20;
var b = a + ""; // Se vuelve un string el número utilizando la concatenación con las comillas vacías

var c = String(a); // de esta forma convertimos un número a string utilizando el método String

var d = Number(c); // obligamos a que se convierta explícitamente en un número.
