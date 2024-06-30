function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var producto = 1;
  for (var i = a; i <= b; i++) {
    producto = producto * i;
  }
  return Math.abs(producto);
}

module.exports = productoEntreNúmeros;