function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  let numerosPares = array.filter(function (numero) {
    return numero % 2 == 0;
  }
  );
  return numerosPares;
}

module.exports = filtrarNumerosPares;
