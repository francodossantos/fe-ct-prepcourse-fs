function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  

  // let arrayNumeros = array.filter((num) => {
    
  //   return num > 10;
  // });

  // return arrayNumeros.length;


  let contador = 0; // Inicializar el contador en 0
  
  // Recorrer el array
  for (let i = 0; i < array.length; i++) {
    // Verificar si el elemento actual es mayor que 10
    if (array[i] > 10) {
      contador++; // Incrementar el contador si el elemento es mayor que 10
    }
  }
  
  return contador; // Devolver la cantidad de elementos mayores a 10
}

module.exports = contarElementosMayoresA10;
