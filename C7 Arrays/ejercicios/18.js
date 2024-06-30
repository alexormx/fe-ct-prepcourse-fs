function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let suma = resultadosTest.reduce((acc, el) => acc + el, 0);
  return suma / resultadosTest.length;
}

module.exports = promedioResultadosTest;
