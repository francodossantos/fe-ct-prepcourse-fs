function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  let arrayMayuscula = [];

  for (let i = 0; i < array.length; i++) {
    arrayMayuscula.push(array[i].toUpperCase());
    
  }
  return arrayMayuscula;
}

module.exports = convertirStringAMayusculas;
