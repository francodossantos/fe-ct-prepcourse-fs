function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  // let suma = 0;

  // for (let i = 0; i < arrayOfNums.length; i++) { 
  //   suma = suma + arrayOfNums[i];
  //   //suma +=arrayOfNums[i];
  // }
  // return suma;

  return arrayOfNums.reduce(function (suma, elemento) {
    return suma + elemento;
  });
}

module.exports = agregarNumeros;
