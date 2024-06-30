function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  let faltante = null;
  if (numeros.length === 0) {
    return faltante;
  }
  let max = Math.max(...numeros);
  let min = Math.min(...numeros);
  for (let i = min; i <= max; i++) {
    if (!numeros.includes(i)) {
      faltante = i;
    }
  }
  return faltante;
}

module.exports = encontrarNumeroFaltante;