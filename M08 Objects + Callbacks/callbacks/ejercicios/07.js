function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  let convertirMinuscula = arrayOfStrings.map(function (element) {
    return element.toLowerCase(); 
  });
  
  let nuevoArreglo = convertirMinuscula.filter(function (element) {
    return element.startsWith("a");
 })
  return nuevoArreglo;

}

module.exports = filter;
