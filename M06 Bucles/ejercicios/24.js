function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  let arrayDeCaracteres = texto.split('');
  let arrayInvertido = arrayDeCaracteres.reverse();
  let cadenaInvertida = arrayInvertido.join('');
  return cadenaInvertida;


}
module.exports = invertirTexto;