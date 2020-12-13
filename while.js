var estudiantes = ["María", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
  console.log(`Hola, ${estudiante}`);
}

saludarEstudiantes(estudiantes);

while(estudiantes.length > 0) {
  var estudiante = estudiantes.shift();
  saludarEstudiantes(estudiante);
}

console.log(estudiantes);