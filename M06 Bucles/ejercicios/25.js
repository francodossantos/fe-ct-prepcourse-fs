function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  const stringSinEspacios = string.replace(/\s/g, '').toLowerCase();

  // Obtén la longitud de la cadena
  const longitud = stringSinEspacios.length;

  // Itera hasta la mitad de la cadena
  for (let i = 0; i < longitud / 2; i++) {
    // Compara caracteres desde el principio y el final
    if (stringSinEspacios[i] !== stringSinEspacios[longitud - 1 - i]) {
      // Si hay alguna discrepancia, no es un palíndromo
      return false;
    }
  }

  // Si el bucle se completa sin discrepancias, es un palíndromo
  return true;
}

module.exports = esPalindromo;
