function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  for (primer of array) {
    if (primer.length > 5) {
      return primer;
    }
  }
  return null;
}

module.exports = obtenerPrimerStringLargo;
