function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  let countPares = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 !== 0) {
      continue;  // Salta a la siguiente iteración si el número no es par
    }
    countPares += 1;
  }
  return countPares;
}

module.exports = contarParesConContinue;
