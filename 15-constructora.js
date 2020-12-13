function auto(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

// Con new creamos una instancia que es crear un objeto que deriva de otro objeto.

var autoNuevo = new auto("Tesla", "Model 3", 2020);

console.log(autoNuevo);

var autoNuevo2 = new auto("Tesla", "Model x", 2018);

console.log(autoNuevo2);

var autoNuevo3 = new auto("Toyota", "Corolla", 2020);

console.log(autoNuevo3);