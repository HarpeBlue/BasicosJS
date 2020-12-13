var miAuto = {
  marca: "Toyota",
  modelo: "Corolla",
  annio: 2020,
  detalleDelAuto: function() {
    console.log(`Auto ${this.modelo} ${this.annio}`);
  }
};

// this es una variable que hace referencia al objeto

// la propiedad que lleva una función se le llama método de objetos.
miAuto.detalleDelAuto();
console.log(miAuto);