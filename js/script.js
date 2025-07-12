//declaración de array para almacenar pacientes
const pacientes = [];

//creación de la función para registrar el paciente
function registrarPacientes() {
  let nombre = prompt("Ingrese el nombre del paciente");
  let edad = prompt("Ingrese la edad del paciente");
  let obraSocial = prompt(
    "Ingrese la obra social del paciente (en caso de no tener escriba 'ninguna')"
  );

  if (nombre && edad) {
    const paciente = {
      nombre: nombre.trim(),
      edad: parseInt(edad),
      obraSocial: obraSocial.trim().toLowerCase(),
    };

    pacientes.push(paciente);
    alert("Paciente ingresado con éxito:\n" + nombre + " - " + edad + " años");
  } else {
    alert("Datos incompletos. Registro cancelado.");
  }
}

//creación de la función para mostrar pacientes
function mostrarPacientes() {
  if (pacientes.length === 0) {
    console.log("No hay pacientes registrados");
  } else {
    console.log("Listado de pacientes:");
    for (let i = 0; i < pacientes.length; i++) {
      let paciente = pacientes[i];
      console.log(
        `${i + 1}.  ${paciente.nombre} - ${paciente.edad} años - Obra Social: ${
          paciente.obraSocial
        }`
      );
    }
  }
}

//creación de la función para buscar un paciente
function buscarPaciente() {
  let nombreBuscado = prompt("Ingrese el nombre del paciente a buscar:");
  let pacienteEncontrado = null;

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].nombre.toLowerCase() === nombreBuscado.toLowerCase()) {
      pacienteEncontrado = pacientes[i];
      break;
    }
  }

  if (pacienteEncontrado) {
    alert(
      `Paciente encontrado:\nNombre: ${pacienteEncontrado.nombre}\nEdad: ${pacienteEncontrado.edad}\nObra Social: ${pacienteEncontrado.obraSocial}`
    );
  } else {
    alert("Paciente no encontrado.");
  }
}

//creación de la función para menú principal
function menu() {
  let opcion;

  do {
    opcion = prompt(
      "Seleccione una opción (ingrese el número de la opción deseada):\n1 - Registrar paciente.\n2 - Mostrar pacientes.\n3 - Buscar paciente.\n4 - Salir"
    );

    if (opcion === "1") {
      registrarPacientes();
    } else if (opcion === "2") {
      mostrarPacientes();
    } else if (opcion === "3") {
      buscarPaciente();
    } else if (opcion === "4") {
      alert("Gracias por usar el simulador.");
    } else {
      alert("Opción inválida.");
    }
  } while (opcion !== "4");
}

menu();
