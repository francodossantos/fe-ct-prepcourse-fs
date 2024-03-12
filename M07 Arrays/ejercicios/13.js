function promedioResultadosTest(resultadosTest) {
 // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let promedioTotal = 0;

  resultadosTest.forEach(function (resultado) {
    promedioTotal = promedioTotal + resultado;

  });
  return promedioTotal / resultadosTest.length;

  
  
}


module.exports = promedioResultadosTest;
