function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  let arrayMayusculas = [];
  for (let i = 0; i < array.length; i++) {
    arrayMayusculas.push(array[i].toUpperCase());
  }
  return arrayMayusculas;
}

module.exports = convertirStringAMayusculas;
