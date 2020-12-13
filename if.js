if (false) {
  console.log("Hola");
} else if (true) {
    console.log("Este nos sirve para seguir haciendo validaciones")
} else {
    console.log("Este es un valor por default")
}

// Es un condicional en el que ponemos dentro del paréntesis un valor verdadero para que se ejecute la función

var edad = 18;

if (edad === 18) {
  console.log("Puedes votar, será tu primera vez")
} else if (edad > 18) {
  console.log("puedes votar de nuevo");
} else {
  console.log("Eres menor de edad, no puedes votar hasta dentro de x años.")
}

// Operador ternario para generar en una línea el if else.


condition ? true : false;

var numero = 1;

var resultado = numero === 1 ? "Sí soy un uno" : "No, no soy un uno";