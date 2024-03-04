function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  if (array.length === 0) {
    return undefined;

  }
  const indiceAleatorio = Math.floor(Math.random() * array.length);
  return array[indiceAleatorio];
}


module.exports = obtenerElementoAleatorio;
