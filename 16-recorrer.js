var articulos = [
  { nombre: "Bici", costo: 3000},
  { nombre: "Tv", costo: 2500},
  { nombre: "Libro", costo: 320},
  { nombre: "Celular", costo: 10000},
  { nombre: "Laptop", costo: 20000},
  { nombre: "Teclado", costo: 500},
  { nombre: "Audífonos", costo: 1700},
]

// filter valida si algo es verdadero o falso y nos devuelve un nuevo Array
// verifica toda la matriz y los devuelve todos.
var articulosFiltrados = articulos.filter(function(articulo) {
  return articulo.costo <= 500;
});

console.log(articulosFiltrados);

// map ayuda a mapear ciertos artículos

var nombreArticulos = articulos.map(function(articulo) {
  return articulo.nombre;
})

console.log(nombreArticulos);

// find nos ayúda a encontrar algo dentro de el objeto de artículos.
// devuelve el primer valor que coincide de la colección 
var encuentraArticulo = articulos.find(function(articulo) {
  return articulo.nombre === "Laptop";
})

console.log(encuentraArticulo);

// for each no genera un nuevo array, : Ejecuta lo que le definamos una vez por cada elemento de nuestro array
articulos.forEach(function(articulo) {
  console.log(articulo.nombre);
})

// dome nos regresa una validación de verdadero o falso con un nuevo array

var articulosBaratos = articulos.some(function(articulo) {
  return articulo.costo <= 700;
})