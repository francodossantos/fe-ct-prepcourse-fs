function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  if (array.length === 0) {
    return -1;
  }

  let numeroMasGrande = Math.max(...array);

  // Agregar una verificación adicional para evitar problemas con indexOf
  if (numeroMasGrande === -Infinity) {
    return -1;
  }

  let indice = array.indexOf(numeroMasGrande);
  return indice;

  // let maximo = array[0]; // Inicializa el máximo como el primer elemento del array
  // let indiceMaximo = 0; // Inicializa el índice del máximo como 0
  
  // for (let i = 1; i < array.length; i++) {
  //   if (array[i] > maximo) {
  //     maximo = array[i]; // Actualiza el máximo si encontramos un número mayor
  //     indiceMaximo = i; // Actualiza el índice del máximo
  //   }
  // }
  
  // return indiceMaximo; // Devuelve el índice del mayor número encontrado
}


module.exports = encontrarIndiceMayor;
