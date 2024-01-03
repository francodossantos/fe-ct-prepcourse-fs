function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  if (fecha instanceof Date) {
    const TiempoEnMlisegundo = fecha.getTime();
    if (!isNaN(TiempoEnMlisegundo)) {
      return true;
    }
  }
  return false;

}

module.exports = esFechaValida;