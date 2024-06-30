function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let meses = array.filter(el => el === 'Enero' || el === 'Marzo' || el === 'Noviembre');
  if (meses.length === 3) {
    return meses;
  } else {
    return 'No se encontraron los meses pedidos';
  }
}

module.exports = mesesDelAño;
